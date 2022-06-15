import { LibraryIcon } from "@heroicons/react/outline";
import Link from "next/link";
import Iconx from "../../components/Atoms/Icons/iconx";
import AdminLayout, {
  AdminBody,
  AdminTitle,
} from "../../components/Templates/AdminLayout";

const Dashboard = ({}) => {
  return (
    <AdminLayout>
      <AdminTitle className={`text-yellow-700`}>Admin Dashboard</AdminTitle>
      <AdminBody>
        <div className="grid grid-cols-4 gap-6 ">
          <div className="shadow-xl rounded-3xl bg-yellow-500/20">
            <Link href="admin/museums">
              <a>
                <div className="p-5">
                  <Iconx
                    icon={`LibraryIcon`}
                    className={` w-10 h-10  text-yellow-700 shrink-0`}
                  />
                  <p className="mt-1 text-sm text-slate-600">Museum Count</p>
                  <p className="mt-3 text-3xl tracking-wider text-yellow-700 ">
                    <span>37</span>
                  </p>
                </div>
              </a>
            </Link>
          </div>
          <div className="shadow-xl rounded-3xl bg-yellow-500/20">
            <Link href="admin/galleries">
              <a>
                <div className="p-5">
                  <Iconx
                    icon={`PhotographIcon`}
                    className={` w-10 h-10  text-yellow-700 shrink-0`}
                  />
                  <p className="mt-1 text-sm text-slate-600">Gallery Count</p>
                  <p className="mt-3 text-3xl tracking-wider text-yellow-700 ">
                    <span>118</span>
                  </p>
                </div>
              </a>
            </Link>
          </div>
          <div className="shadow-xl rounded-3xl bg-yellow-500/20">
            <Link href="/admin/visitors">
              <a>
                <div className="p-5">
                  <Iconx
                    icon={`UserIcon`}
                    className={` w-10 h-10  text-yellow-700 shrink-0`}
                  />
                  <p className="mt-1 text-sm text-slate-600">Visitor Count</p>
                  <p className="mt-3 space-x-4 text-3xl tracking-wider text-yellow-700 ">
                    <span>37</span>
                    <span className="text-sm">Today</span>
                  </p>
                </div>
              </a>
            </Link>
          </div>
          <div className="shadow-xl rounded-3xl bg-yellow-500/20">
            <Link href="/admin">
              <a>
                <div className="p-5">
                  <Iconx
                    icon={`LibraryIcon`}
                    className={` w-10 h-10  text-yellow-700 shrink-0`}
                  />
                  <p className="mt-1 text-sm text-slate-600">Museum Count</p>
                  <p className="mt-3 text-3xl tracking-wider text-yellow-700 ">
                    <span>37</span>
                  </p>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </AdminBody>
    </AdminLayout>
  );
};

export default Dashboard;
