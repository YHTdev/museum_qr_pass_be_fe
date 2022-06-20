import Link from "next/link";
import Iconx from "../../../components/Atoms/Icons/iconx";
import AdminLayout, {
  AdminBody,
  AdminTitle,
} from "../../../components/Templates/AdminLayout";

const Users = () => {
  return (
    <AdminLayout>
      <AdminTitle className={` flex items-center justify-between`}>
        user Directory
        <div className="flex items-center">
          <Link href="/admin/user/create">
            <a>
              <div className="px-5 py-2 bg-yellow-500 rounded-lg shadow-lg text-slate-50">
                Create user
              </div>
            </a>
          </Link>
          <button className="ml-4 ">
            <Iconx icon={`DotsVerticalIcon`} />
          </button>
        </div>
      </AdminTitle>
      <AdminBody>user Page</AdminBody>
    </AdminLayout>
  );
};

export default Users;
