import { useState } from "react";
import Iconx from "../../../components/Atoms/Icons/iconx";
import AdminLayout, {
  AdminBody,
  AdminTitle,
} from "../../../components/Templates/AdminLayout";

import Modal, {
  ModalBody,
  ModalTitle,
} from "../../../components/Organisms/Modal";
import DeleteModal from "../../../components/Organisms/Modal/DeleteModal";
import CreateMuseum from "../../../components/Organisms/Museums/CreateMuseum";
import MuseumLists from "../../../components/Organisms/Museums/MuseumLists";
import apiCall from "../../../utils/apiCall";
import EditMuseum from "../../../components/Organisms/Museums/EditMuseum";

const Museums = ({ museumLists }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    location: "",
    address: "",
  });

  const clearFormData = () => {
    setFormData({
      name: "",
      slug: "",
      location: "",
      address: "",
    });
  };

  const openCreateModal = () => {
    setIsCreateModalOpen(!isCreateModalOpen);
    clearFormData();
  };

  // EDIT MUSEUM
  const editMuseumHandler = (id, museum) => {
    setIsModalOpen(!isModalOpen);
    setFormData({
      id: id,
      name: museum.name,
      slug: museum.slug,
      location: museum.location,
      address: museum.address,
    });
  };

  // DELETE MUSEUM
  const deleteMuseumHandler = (id, museum) => {
    setIsDeleteModalOpen(!isDeleteModalOpen);
    setFormData({
      id: id,
      name: museum.name,
      slug: museum.slug,
      location: museum.location,
      address: museum.address,
    });
  };

  return (
    <AdminLayout>
      <AdminTitle className={` flex items-center justify-between`}>
        Museum
        <div className="flex items-center">
          <button
            onClick={() => openCreateModal()}
            className="px-5 py-2 text-sm bg-yellow-500 rounded-lg shadow-lg text-slate-50">
            Add Museum
          </button>
          <button className="ml-4 ">
            <Iconx icon={`DotsVerticalIcon`} />
          </button>
        </div>
      </AdminTitle>
      <AdminBody>
        <div className="">
          <MuseumLists
            museumLists={museumLists}
            editMuseum={editMuseumHandler}
            deleteMuseum={deleteMuseumHandler}
          />
        </div>
      </AdminBody>

      <Modal
        isModalOpen={isCreateModalOpen}
        setIsModalOpen={setIsCreateModalOpen}>
        <ModalTitle>Add Museum </ModalTitle>
        <ModalBody>
          <CreateMuseum
            formData={formData}
            setFormData={setFormData}
            isModalOpen={isCreateModalOpen}
            setIsModalOpen={setIsCreateModalOpen}
          />
        </ModalBody>
      </Modal>

      {/* MUSEUM EDIT FORM */}
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <ModalTitle>Edit Museum </ModalTitle>
        <ModalBody>
          <EditMuseum
            formData={formData}
            setFormData={setFormData}
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
        </ModalBody>
      </Modal>

      {/* MUSEUM DELETE FORM */}
      <DeleteModal
        isModalOpen={isDeleteModalOpen}
        setIsModalOpen={setIsDeleteModalOpen}
        formData={formData}></DeleteModal>
    </AdminLayout>
  );
};
export const getServerSideProps = async () => {
  const res = await apiCall.get("/museum/museumLists");
  const museumData = await res.data;

  return {
    props: {
      museumLists: museumData.data,
      revalidate: 10,
    },
  };
};
export default Museums;
