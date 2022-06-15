import { Router } from "express";
import { body } from "express-validator";
import { createMuseum, MuseumLists } from "../controllers/museumController";

export const museumRouter = Router();

museumRouter.post(
  "/createMuseum",
  [
    body("name").notEmpty(),
    body("slug").notEmpty(),
    body("location").notEmpty(),
    body("address").notEmpty(),
  ],
  createMuseum
);

museumRouter.get("/museumLists", MuseumLists);
