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
import CreateMuseum from "../../../components/Organisms/Museums/CreateMuseum";

const Museums = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <AdminLayout>
      <AdminTitle className={` flex items-center justify-between`}>
        Museum
        <div className="flex items-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-5 py-2 text-sm bg-yellow-500 rounded-lg shadow-lg text-slate-50">
            Add Museum
          </button>
          <button className="ml-4 ">
            <Iconx icon={`DotsVerticalIcon`} />
          </button>
        </div>
      </AdminTitle>
      <AdminBody>
        <div className="">Museum Data Lists</div>
      </AdminBody>

      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <ModalTitle>Add Museum </ModalTitle>
        <ModalBody>
          <CreateMuseum />
        </ModalBody>
      </Modal>
    </AdminLayout>
  );
};

export default Museums;
