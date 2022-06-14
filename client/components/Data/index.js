export const AdminData = {
  SidebarRoutes: [
    {
      id: 1,
      title: "Dashboard",
      icon: "DesktopComputerIcon",
      route: "/admin",
      subRoutes: [
        {
          title: "Daily",
          route: "/admin",
        },
      ],
    },
    {
      id: 2,
      title: "Museum",
      icon: "UserIcon",
      route: "/employees/",
      subRoutes: [
        {
          title: "Record",
          route: "/attendance/record",
        },
        {
          title: "Duty Roster",
          route: "/attendance/dutyroster",
        },
      ],
    },
    {
      id: 3,
      title: "Galleries",
      icon: "PhotographIcon",
      route: "/admin/galleries",
      subRoutes: [
        {
          title: "Employee Directory",
          route: "/employees/",
        },
      ],
    },
    {
      id: 3,
      title: "visitors",
      icon: "UserIcon",
      route: "/admin/visitors",
      subRoutes: [
        {
          title: "Employee Directory",
          route: "/employees/",
        },
      ],
    },
  ],
};
