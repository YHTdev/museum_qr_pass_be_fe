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

const Galleries = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <AdminLayout>
        <AdminTitle className={` flex items-center justify-between`}>
          Gallyyy
          <div className="flex items-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-5 py-2 text-sm bg-yellow-500 rounded-lg shadow-lg text-slate-50">
              Add Gallary
            </button>
            <button className="ml-4 ">
              <Iconx icon={`DotsVerticalIcon`} />
            </button>
          </div>
        </AdminTitle>
        <AdminBody>
          <div className="">Gally</div>
        </AdminBody>

        <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
          <ModalTitle>Add Gallery </ModalTitle>
          <ModalBody>
            <CreateGallery />
          </ModalBody>
        </Modal>
      </AdminLayout>
    </>
  );
};

export default Galleries;
