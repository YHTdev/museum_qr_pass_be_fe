import { AdminData } from "../components/Data";
import apiCall from "./apiCall";
import Cookies from "js-cookie";
import Router, { useRouter } from "next/router";
import { verify } from "jsonwebtoken";
import jwt_decode from "jwt-decode";

export const getAdminRoutes = () => {
  const routes = AdminData.SidebarRoutes;
  return routes;
};

export const getVisitors = async () => {
  const res = await apiCall.get("/visitor/visitorLists");
  const visitorData = await res.data.data;

  return visitorData;
};

export const setSession = (key, value) => {
  sessionStorage.setItem(key, value);
};
export const setCookie = (key, value) => {
  Cookies.set(key, value, {
    expires: 1,
    sameSite: "lax",
  });
};

export const getSession = () => {
  if (typeof window !== "undefined") {
    sessionStorage.getItem("signinUserSession");
  }
};

export const getDecodedToken = () => {
  if (typeof window !== "undefined") {
    const get = sessionStorage.getItem("signinUserSession");
    const data = jwt_decode(get);
    return data;
  }
};

export const signin = async (formData) => {
  const res = await apiCall.post("/user/signin", formData);
  const user = await res.data;
  if (res.status === 200) {
    if (typeof window !== "undefined") {
      setSession("signinUserSession", user.accessToken);
      setCookie("signinUserCookie", user.accessToken);
    }
    Router.push("/admin");
  }
  return user;
};

export const signOut = () => {
  if (typeof window !== "undefined") {
    // REMOVE LOGGED IN USERS COOKIE AND REDIRECTO TO LOGIN PAGE
    Cookies.remove("signinUserCookie"), Router.push("/admin/signin");
  }
};

export const verifyToken = (token) => {
  const user = verify(token);
  return user;
};
