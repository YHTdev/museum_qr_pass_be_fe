import { Router } from "express";
import { body } from "express-validator";
import {
  createMuseum,
  deleteMuseum,
  MuseumLists,
  updateMuseum,
} from "../controllers/museumController";

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
museumRouter.put("/museumLists/:id", updateMuseum);
museumRouter.post("/museumLists/:id", deleteMuseum);
