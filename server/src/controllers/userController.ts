import { NextFunction, Request, Response } from "express";
import { comparePassword, signinToken } from "../helpers";
import { CreateError } from "../helpers/errors";
import prisma from "../lib/prisma";

export const signIn = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await prisma.user.findFirst({
      where: {
        OR: [{ email: req.body.email }, { phoneNumber: req.body.phoneNumber }],
      },
    });
    if (!user) return next(CreateError(404, "USER NOT FOUND !!"));

    const isPasswordCorrect = comparePassword(req.body.password, user.password);
    if (!isPasswordCorrect)
      return next(CreateError(404, "PASSWORD INCORRECT."));

    const accessToken = signinToken({
      id: user.id,
      name: user.name,
      email: user.email,
      phoneNumber: user.phoneNumber,
      userTypes: user.userTypes,
      updatedAt: user.updatedAt.toDateString(),
      createdAt: user.createdAt.toDateString(),
    });
    if (accessToken) {
      const { password, ...others } = user;
      //   res.status(200).json({ ...others, accessToken });
      res
        .cookie("accessToken", accessToken, {
          httpOnly: true,
        })
        .status(200)
        .json({
          statusCode: 200,
          message: "success",
          ...others,
          accessToken,
        });
    }
  } catch (error) {
    //   next(CreateError())
    next(error);
  }
};
