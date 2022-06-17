import { AdminData } from "../components/Data";
import apiCall from "./apiCall";

export const getAdminRoutes = () => {
  const routes = AdminData.SidebarRoutes;
  return routes;
};

export const getVisitors = async () => {
  const res = await apiCall.get("/visitor/visitorLists");
  const visitorData = await res.data.data;

  return visitorData;
};
