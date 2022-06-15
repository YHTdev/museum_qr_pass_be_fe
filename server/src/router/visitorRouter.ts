import { Router } from "express";
import { body } from "express-validator";
import { createVisitor, visitorLists } from "../controllers/visitorController";

export const visitorRouter = Router();

visitorRouter.post(
  "/createVisitor",
  [
    body("name").notEmpty(),
    body("email").notEmpty(),
    body("phoneNumber").notEmpty(),
    body("nrc").notEmpty(),
    body("address").notEmpty(),
  ],
  createVisitor
);

visitorRouter.get("/visitorLists", visitorLists);
