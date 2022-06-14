import { useRouter } from "next/router";
import { AdminData } from "../../Data";

const SubSidebar = ({ isSubSidebarOpen }) => {
  const n = 10; // Or something else
  const router = useRouter();

  return (
    <>
      <div
        className={`flex flex-col flex-none w-48 bg-slate-50 transform transition-all duration-500 ease-in-out ${
          isSubSidebarOpen ? `w-0` : ``
        }`}>
        <div className="p-5">
          <h1 className="text-lg leading-loose tracking-wide text-slate-900">
            Dashboard
          </h1>
        </div>

        <div className="flex-auto px-5 overflow-y-auto no-scrollbar">
          <p>Dailyyy</p>
          {/* {subRoutes.map((subRoute, i) => (
            <div key={i} className="space-y-4 ">
              {subRoute.title}
            </div>
          ))} */}
        </div>
      </div>
    </>
  );
};

export default SubSidebar;
