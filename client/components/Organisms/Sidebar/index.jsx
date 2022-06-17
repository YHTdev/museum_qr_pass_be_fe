import Image from "next/image";
import Link from "next/link";
import Iconx from "../../Atoms/Icons/iconx";
import YoonHanTharLogoOnly from "../../../public/assets/images/logo/YoonHanTharLogoOnly.png";
import { AdminData } from "../../Data";
import { useRouter } from "next/router";
import { SidebarRoutesContext } from "../../Templates/AdminLayout";
import PeopleCircleIcon from "../../Atoms/Icons/peopleCircle";
import { useState } from "react";
import AccountAction from "./AccountAction";

const Sidebar = ({}) => {
  const [isButtonHover, setIsButtonHover] = useState(false);
  const sidebarLinksData = AdminData.SidebarRoutes;
  const router = useRouter();
  const res = SidebarRoutesContext;

  const accountButtonhandler = () => {
    setIsButtonHover(!isButtonHover);
  };
  const mouseLeavehandler = () => {
    setIsButtonHover(!isButtonHover);
  };

  return (
    <div className="flex flex-col flex-none w-20 bg-slate-200">
      <div className="flex-none w-full">
        <Image src={YoonHanTharLogoOnly} alt="YoonHanThar" />
      </div>

      <div className="flex-auto overflow-y-auto no-scrollbar">
        <div className="">
          <div className="flex flex-col mx-auto ">
            {sidebarLinksData.map((sidebarLink, i) => (
              <Link key={i} href={sidebarLink.route}>
                <a
                  // onClick={() => setIndex(sidebarLink.id)}
                  className={`block py-2  hover:text-yellow-500 text-slate-600 ${
                    router.pathname === sidebarLink.route
                      ? " bg-slate-50 text-yellow-500"
                      : ""
                  }`}>
                  <div className="flex items-center justify-center ">
                    <Iconx icon={sidebarLink.icon} />
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center py-6 ">
        <AccountAction
          onMouseEnter={accountButtonhandler}
          // onMouseLeave={mouseLeavehandler}
          isButtonHover={isButtonHover}
        />
      </div>
    </div>
  );
};

export default Sidebar;
