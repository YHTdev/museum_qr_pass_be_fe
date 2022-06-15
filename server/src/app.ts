import cors from "cors";
import express from "express";
import { SERVER_DOMAIN, SERVER_PORT } from "./config";
import { galleryRouter } from "./router/galleryRouter";
import { museumRouter } from "./router/museumRouter";
import { visitorRouter } from "./router/visitorRouter";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.listen(SERVER_PORT, () => {
  console.log(`Server is running at http://${SERVER_DOMAIN}:${SERVER_PORT}`);
  app.use("/api/museum", museumRouter);
  app.use("/api/gallery", galleryRouter);
  app.use("/api/visitor", visitorRouter);
});
