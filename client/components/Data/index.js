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
    {
      id: 4,
      title: "visitors",
      icon: "UserIcon",
      route: "/admin/visitors",
      subRoutes: [
        {
          title: "Visitors",
          route: "/admin/visitors",
        },
      ],
    },
  ],
  AdminActionRoutes: [
    {
      id: 1,
      title: "Settings",
      route: "/admin/settings",
      subRoutes: [
        {
          id: 1,
          title: "Site Settings",
          route: "/admin/settings/siteSettings",
        },
        {
          id: 2,
          title: "Museum Settings",
          route: "/admin/settings/museumSettings",
        },
      ],
    },
  ],
};
