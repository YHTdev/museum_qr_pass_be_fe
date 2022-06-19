import { createContext, useContext, useState } from "react";
import { getAdminRoutes } from "../utils/apiRoutes";

const AppContext = createContext();

export const useAppContext = () => {
  const state = useContext(AppContext);

  if (state === undefined) {
    throw new Error("useAppContext must be used within a AuthProvider");
  }

  return state;
};
export const AppWrapper = ({ children }) => {
  const adminRoutes = getAdminRoutes();
  const [adminRouteIndex, setAdminRouteIndex] = useState(1);
  const [authenticatedUser, setAuthenticatedUser] = useState({});

  const state = {
    adminRoutes,
    adminRouteIndex,
    setAdminRouteIndex,
    authenticatedUser,
    setAuthenticatedUser,
  };
  console.log("authenticatedUser ->", authenticatedUser);
  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};
