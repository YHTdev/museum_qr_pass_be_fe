import apiCall from "./apiCall";

export const getVisitors = async () => {
  const res = await apiCall.get("/visitor/visitorLists");
  const visitorData = await res.data.data;

  return visitorData;
};
