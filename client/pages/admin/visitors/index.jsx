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
import ViewQr from "../../../components/Organisms/Visitors/viewQr";
import { getVisitors } from "../../../utils/apiRoutes";
import ViewVisitor from "../../../components/Organisms/Visitors/viewVisitor";

// const Visitors = () => {
const Visitors = ({ visitorLists }) => {
  // MODEL CONTROL
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [viewQrModelopen, setViewQrModelopen] = useState(false);
  const [viewVisitorModelOpen, setViewVisitorModelOpen] = useState(false);

  // FORM DATA CONTROL
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    nrc: "",
    address: "",
    citizinship: "",
  });
  console.log("formData on test -->", formData);

  const [viewQrData, setViewQrData] = useState({
    id: "",
    name: "",
    qrSVG: "",
    phoneNumber: "",
  });

  const [isLocal, setIsLocal] = useState(true);

  const clearFormData = () => {
    setFormData({
      name: "",
      phoneNumber: "",
      email: "",
      nrc: "",
      address: "",
      citizinship: "",
    });
  };

  const openCreateModal = () => {
    setIsCreateModalOpen(!isCreateModalOpen);
    clearFormData();
  };

  const viewQrHandler = (id, visitor) => {
    setViewQrModelopen(!viewQrModelopen);
    setViewQrData({
      id: id,
      name: visitor.name,
      qrSVG: visitor.qrSVG,
      phoneNumber: visitor.phoneNumber,
    });
  };

  const viewVisitorHandler = (id, visitor) => {
    setViewVisitorModelOpen(!viewVisitorModelOpen);
    setFormData({
      id: id,
      name: visitor.name,
      phoneNumber: visitor.phoneNumber,
      email: visitor.email,
      nrc: visitor.nrc,
      address: visitor.address,
      citizinship: visitor.citizinship,
      qrSVG: visitor.qrSVG,
    });
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
            <VisitorLists
              visitorLists={visitorLists}
              viewQr={viewQrHandler}
              viewVisitor={viewVisitorHandler}
            />
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

        <Modal
          isModalOpen={viewQrModelopen}
          setIsModalOpen={setViewQrModelopen}>
          <ModalBody>
            <ViewQr
              viewQrModelopen={viewQrModelopen}
              setViewQrModelopen={setViewQrModelopen}
              viewQrData={viewQrData}
            />
          </ModalBody>
        </Modal>

        <Modal
          isModalOpen={viewVisitorModelOpen}
          setIsModalOpen={setViewVisitorModelOpen}>
          <ModalBody>
            <ViewVisitor singleVisitor={formData} />
          </ModalBody>
        </Modal>
      </AdminLayout>
    </>
  );
};

export const getServerSideProps = async () => {
  const visitorData = await getVisitors();

  return {
    props: {
      visitorLists: visitorData,
      revalidate: 10,
    },
  };
};

export default Visitors;
