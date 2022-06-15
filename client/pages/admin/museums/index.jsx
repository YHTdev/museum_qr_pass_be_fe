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
import MuseumLists from "../../../components/Organisms/Museums/MuseumLists";
import apiCall from "../../../utils/apiCall";

const Museums = ({ museumLists }) => {
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
        <div className="">
          <MuseumLists museumLists={museumLists} />
        </div>
      </AdminBody>

      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <ModalTitle>Add Museum </ModalTitle>
        <ModalBody>
          <CreateMuseum
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
        </ModalBody>
      </Modal>
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
