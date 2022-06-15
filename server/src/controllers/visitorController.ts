import { Request, Response, NextFunction } from "express";
import prisma from "../lib/prisma";

export const createVisitor = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const visitor = await prisma.visitor.create({
      data: {
        name: req.body.name,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
        nrc: req.body.nrc,
        address: req.body.address,
      },
    });
    if (visitor) {
      res.status(200).json({
        statusCode: 200,
        message: `Success`,
      });
    } else {
      res.status(422).json({
        statusCode: 422,
        message: `fail`,
      });
    }
  } catch (error) {
    next(error);
  }
};

export const visitorLists = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const visitorList = await prisma.visitor.findMany({
      select: {
        id: true,
        name: true,
        phoneNumber: true,
        email: true,
        nrc: true,
        address: true,
        updatedAt: true,
        createdAt: true,
      },
    });
    res.status(200).json({
      message: "success",
      statusCode: 200,
      data: visitorList,
    });
  } catch (error) {
    next(error);
  }
};
