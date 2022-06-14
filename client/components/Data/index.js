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
      icon: "LibraryIcon",
      route: "/admin/museums",
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
  ],
};
