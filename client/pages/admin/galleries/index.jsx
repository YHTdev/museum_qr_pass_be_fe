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
import CreateGallery from "../../../components/Organisms/Galleries/CreateGallery";
import apiCall from "../../../utils/apiCall";
import GalleryLists from "../../../components/Organisms/Galleries/MuseumLists";
import EditGallery from "../../../components/Organisms/Galleries/EditGallery";

const Galleries = ({ museumLists, galleryLists }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    museumId: "",
  });

  const clearFormData = () => {
    setFormData({
      name: "",
      slug: "",
      museumId: "",
    });
  };

  const openCreateModal = () => {
    setIsCreateModalOpen(!isCreateModalOpen);
    clearFormData();
  };

  const editGalleryHandler = (id, gallery) => {
    setIsEditModalOpen(!isEditModalOpen);
    setFormData({
      id: id,
      name: gallery.name,
      slug: gallery.slug,
    });
  };
  const deleteGalleryHandler = () => {};
  return (
    <>
      <AdminLayout>
        <AdminTitle className={` flex items-center justify-between`}>
          Gallyyy
          <div className="flex items-center">
            <button
              onClick={() => openCreateModal()}
              className="px-5 py-2 text-sm bg-yellow-500 rounded-lg shadow-lg text-slate-50">
              Add Gallary
            </button>
            <button className="ml-4 ">
              <Iconx icon={`DotsVerticalIcon`} />
            </button>
          </div>
        </AdminTitle>
        <AdminBody>
          <div className="">
            <GalleryLists
              galleryLists={galleryLists}
              editGallery={editGalleryHandler}
              deleteGallery={deleteGalleryHandler}
            />
          </div>
        </AdminBody>

        {/* CREATE GALLERY FORM */}
        <Modal
          isModalOpen={isCreateModalOpen}
          setIsModalOpen={setIsCreateModalOpen}>
          <ModalTitle>Add Gallery </ModalTitle>
          <ModalBody>
            <CreateGallery
              formData={formData}
              setFormData={setFormData}
              isModalOpen={isCreateModalOpen}
              setIsModalOpen={setIsCreateModalOpen}
              museumLists={museumLists}
            />
          </ModalBody>
        </Modal>

        {/* EDIT GALLERY FORM */}
        <Modal
          isModalOpen={isEditModalOpen}
          setIsModalOpen={setIsEditModalOpen}>
          <ModalTitle> Edit Gallery</ModalTitle>
          <ModalBody>
            <EditGallery
              museumLists={museumLists}
              isEditModalOpen={isEditModalOpen}
              setIsEditModalOpen={setIsEditModalOpen}
              formData={formData}
              setFormData={setFormData}
            />
          </ModalBody>
        </Modal>
      </AdminLayout>
    </>
  );
};

export const getServerSideProps = async () => {
  const museumResult = await apiCall.get("/museum/museumLists");
  const museumData = await museumResult.data;

  const galleryResult = await apiCall.get("/gallery/galleryLists");

  const galleryData = await galleryResult.data.data;

  return {
    props: {
      museumLists: museumData.data,
      galleryLists: galleryData,
      revalidate: 10,
    },
  };
};
export default Galleries;
