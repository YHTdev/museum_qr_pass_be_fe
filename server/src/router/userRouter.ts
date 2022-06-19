import { Router } from "express";
import { body } from "express-validator";
import { signIn } from "../controllers/userController";

export const userRouter = Router();

userRouter.post(
  "/signin",
  [body("email").notEmpty(), body("password").notEmpty()],
  signIn
);
