import Link from "next/link";
import { useAppContext } from "../../../context/appContext";
import { signOut } from "../../../utils/apiRoutes";
import GearIcon from "../../Atoms/Icons/GearIcon";
import Iconx from "../../Atoms/Icons/iconx";
import PeopleCircleIcon from "../../Atoms/Icons/peopleCircle";

const AccountAction = ({
  className,
  isButtonHover,
  onMouseEnter,
  onMouseLeave,
}) => {
  const { authenticatedUser } = useAppContext();
  return (
    <div
      className="relative z-30 inline-block text-left"
      //   onMouseEnter={onMouseEnter}
      //       onMouseLeave={onMouseLeave}
    >
      <button className="" onClick={onMouseEnter}>
        <PeopleCircleIcon
          className={`w-10 h-10 text-slate-600 hover:text-yellow-500`}
        />
      </button>
      {/* <AccountAction isButtonHover={isButtonHover} /> */}

      <div
        // onMouseEnter={onMouseEnter}
        className={
          `${
            isButtonHover
              ? "absolute z-10 overflow-y-auto origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg max-h-44 -left-2 -top-40 w-52 ring-1 ring-black ring-opacity-5 focus:outline-none"
              : ""
          }` || "hidden"
        }>
        <div className="p-2 group">
          <Link href="#">
            <a>
              <div className="flex items-center space-x-2 group text-slate-600 group-hover:text-yellow-500">
                <PeopleCircleIcon className={`w-6 h-6`} />
                <div className="">
                  <p>{authenticatedUser.name}</p>
                  <p className="text-xs ">{authenticatedUser.email}</p>
                </div>
              </div>
            </a>
          </Link>
        </div>
        <div className="p-2 group">
          <div>
            <Link href="/admin/settings/siteSettings">
              <a>
                <div className="flex items-center space-x-2 group text-slate-600 group-hover:text-yellow-500">
                  {/* <GearIcon className={`w-6 h-6`} /> */}
                  <p>Settings</p>
                </div>
              </a>
            </Link>
          </div>
        </div>
        <div className="p-2 group">
          <button onClick={() => signOut()}>
            <div className="flex items-center space-x-2 group text-slate-600 group-hover:text-yellow-500">
              {/* <Iconx icon={`LogoutIcon`} className={`w-6 h-6`} /> */}
              <p>SignOut</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountAction;
