import axios from "axios";
// import { useSession } from "next-auth/react";
// const { data: session } = useSession();
const apiCall = axios.create({
  baseURL: "http://192.168.1.79:8800/api",
  headers: {
    Authorization:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN1cGVyX2FkbWluQGFkbWluLmNvbSIsImlkIjoiYmY5MDY0NDktMTQyZi00MGMzLTk1MjQtNGVmMTlkODYxNTA1IiwicGFzc3dvcmQiOiIkMmIkMTIkYUk2UkF3Q3BEL3pxNEt1QmkvMnRUTzA0NGFLdTBvWGxySkdtOEJXaGl4cDBCcWlCMWlCSjIiLCJ1cGRhdGVkQXQiOiJTdW4gTWF5IDI5IDIwMjIiLCJjcmVhdGVkQXQiOiJTdW4gTWF5IDI5IDIwMjIiLCJpYXQiOjE2NTQxMDA1NzIsImV4cCI6MTY1NDE4Njk3Mn0.h0YZDgjbm3SlPbsQCIEovs3kmTTYDkqsT_ILTxBSSIQ",
  },
  withCredentials: true,
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
