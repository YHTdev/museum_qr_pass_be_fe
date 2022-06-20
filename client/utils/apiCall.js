import axios from "axios";
// import { useSession } from "next-auth/react";
// const { data: session } = useSession();
const apiCall = axios.create({
  baseURL: "http://localhost:8800/api",
});
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error.response.data);
  }
);

export default apiCall;
