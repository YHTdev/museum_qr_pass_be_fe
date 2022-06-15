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

// import axios from "axios";
// // import { useSession } from "next-auth/react";
// // const { data: session } = useSession();

// export default function apiCall(accessToken) {
//   const apiCall = axios.create({
//     baseURL: "http://localhost:8800/api",
//     headers: {
//       "Content-Type": "application/json",
//       accept: "application/json",
//       Authorization: accessToken,
//       // Authorization: session.user.accessToken,
//     },
//     withCredentials: true,
//   });

//   apiCall.interceptors.response.use(
//     (response) => response,
//     (error) => {
//       if (error.response.status === 401) {
//         return Promise.reject();
//       }

//       return Promise.reject(error);
//     }
//   );
//   return apiCall;
// }
