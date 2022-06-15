import cors from "cors";
import express from "express";
import { SERVER_DOMAIN, SERVER_PORT } from "./config";
import { museumRouter } from "./router/museumRouter";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.listen(SERVER_PORT, () => {
  console.log(`Server is running at http://${SERVER_DOMAIN}:${SERVER_PORT}`);
  app.use("/api/museum", museumRouter);
});
