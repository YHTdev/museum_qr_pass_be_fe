import { Tab } from "@headlessui/react";
import AdminLayout, {
  AdminBody,
  AdminTitle,
} from "../../../components/Templates/AdminLayout";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function CreateUser() {
  return (
    <AdminLayout>
      <Tab.Group>
        <AdminTitle>
          <Tab.List className="flex space-x-8">
            <Tab
              className={({ selected }) =>
                classNames(
                  selected
                    ? " px-3 focus:ring-0 focus:ring-offset-0 focus:outline-none border-b-2 border-yellow-500"
                    : " text-slate-600"
                )
              }>
              Profile
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  selected
                    ? " px-3 focus:ring-0 focus:ring-offset-0 focus:outline-none border-b-2 border-yellow-500"
                    : " text-slate-600"
                )
              }>
              Personal
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  selected
                    ? " px-3 focus:ring-0 focus:ring-offset-0 focus:outline-none border-b-2 border-yellow-500"
                    : " text-slate-600"
                )
              }>
              Job
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  selected
                    ? " px-3 focus:ring-0 focus:ring-offset-0 focus:outline-none border-b-2 border-yellow-500"
                    : " text-slate-600"
                )
              }>
              Policy
            </Tab>
          </Tab.List>
        </AdminTitle>
        <hr className="mt-4 " />

        <AdminBody>
          <Tab.Panels className={` mt-10 max-w-4xl flex-auto overflow-y-auto`}>
            {/* <Tab.Panel className="">
              <Profile />
            </Tab.Panel>
            <Tab.Panel>
              <Personal />
            </Tab.Panel> */}
          </Tab.Panels>
        </AdminBody>
      </Tab.Group>
    </AdminLayout>
  );
}

CreateUser.auth = true;
