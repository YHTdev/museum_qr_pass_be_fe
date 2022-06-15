import { Router } from "express";
import { body } from "express-validator";
import {
  createGallery,
  galleryLists,
  updateGallery,
} from "../controllers/galleryController";

export const galleryRouter = Router();

galleryRouter.post(
  "/createGallery",
  [
    body("name").notEmpty(),
    body("slug").notEmpty(),
    body("museumId").notEmpty(),
  ],
  createGallery
);

galleryRouter.get("/galleryLists", galleryLists);
galleryRouter.put("/galleryLists/:id", updateGallery);
