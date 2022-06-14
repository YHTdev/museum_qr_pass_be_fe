import cors from "cors";
import express from "express";
import { SERVER_DOMAIN, SERVER_PORT } from "./config";

const app = express();

app.use(cors());
app.listen(SERVER_PORT, () => {
  console.log(`Server is running at http://${SERVER_DOMAIN}:${SERVER_PORT}`);
  //   app.use("/api/user", userRouter);
  //   app.use("/api/employee", employeeRouter);
});
