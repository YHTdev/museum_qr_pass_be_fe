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
import CreateVisitor from "../../../components/Organisms/Visitors/CreateVisitor";
import VisitorLists from "../../../components/Organisms/Visitors/VisitorLists";
import apiCall from "../../../utils/apiCall";

const Visitors = ({ visitorLists }) => {
  // MODEL CONTROL
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // FORM DATA CONTROL
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    nrc: "",
    address: "",
    citizinship: "",
  });

  const [isLocal, setIsLocal] = useState(true);

  // const clearFormData = () => {
  //   setFormData({
  //     name: "",
  //     phoneNumber: "",
  //     email: "",
  //     nrc: "",
  //     address: "",
  //   });
  // };

  const openCreateModal = () => {
    setIsCreateModalOpen(!isCreateModalOpen);
    // clearFormData();
  };
  return (
    <>
      <AdminLayout>
        <AdminTitle className={` flex items-center justify-between`}>
          Visitor
          <div className="flex items-center">
            <button
              onClick={() => openCreateModal(true)}
              className="px-5 py-2 text-sm bg-yellow-500 rounded-lg shadow-lg text-slate-50">
              Add Visitor
            </button>
            <button className="ml-4 ">
              <Iconx icon={`DotsVerticalIcon`} />
            </button>
          </div>
        </AdminTitle>
        <AdminBody>
          <div className="">
            <VisitorLists visitorLists={visitorLists} />
          </div>
        </AdminBody>

        <Modal
          isModalOpen={isCreateModalOpen}
          setIsModalOpen={setIsCreateModalOpen}>
          <ModalTitle>Add Visitor </ModalTitle>
          <ModalBody>
            <CreateVisitor
              isLocal={isLocal}
              setIsLocal={setIsLocal}
              formData={formData}
              setFormData={setFormData}
              isModalOpen={isCreateModalOpen}
              setIsModalOpen={setIsCreateModalOpen}
            />
          </ModalBody>
        </Modal>
      </AdminLayout>
    </>
  );
};

export const getServerSideProps = async () => {
  const res = await apiCall.get("/visitor/visitorLists");
  const visitorData = await res.data;

  return {
    props: {
      visitorLists: visitorData.data,
      revalidate: 10,
    },
  };
};

export default Visitors;
