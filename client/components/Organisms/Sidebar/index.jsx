import Image from "next/image";
import Link from "next/link";
import Iconx from "../../Atoms/Icons/iconx";
import YoonHanTharLogoOnly from "../../../public/assets/images/logo/YoonHanTharLogoOnly.png";
import { AdminData } from "../../Data";
import { useRouter } from "next/router";
import { SidebarRoutesContext } from "../../Templates/AdminLayout";

const Sidebar = ({}) => {
  const n = 10; // Or something else
  const sidebarLinksData = AdminData.SidebarRoutes;
  const router = useRouter();
  // console.log("sidebarLinksData ===>", sidebarLinksData);
  // console.log("Current Route ===>", router);
  const res = SidebarRoutesContext;

  return (
    <div className="flex flex-col flex-none w-20 bg-slate-200">
      <div className="flex-none w-full">
        <Image src={YoonHanTharLogoOnly} alt="YoonHanThar" />
      </div>

      <div className="flex-auto overflow-y-auto no-scrollbar">
        <div className="flex flex-col mx-auto ">
          {sidebarLinksData.map((sidebarLink, i) => (
            <Link key={i} href={sidebarLink.route}>
              <a
                // onClick={() => setIndex(sidebarLink.id)}
                className={`block py-2 hover:bg-slate-50 ${
                  router.pathname === sidebarLink.route ? " bg-slate-50 " : ""
                }`}>
                <div className="flex items-center justify-center ">
                  <Iconx
                    icon={sidebarLink.icon}
                    className={`w-7 h-7 shrink-0`}
                  />
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
