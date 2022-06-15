import { NextFunction, Request, Response } from "express";
import prisma from "../lib/prisma";

export const createMuseum = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const museum = await prisma.museum.create({
      data: {
        name: req.body.name,
        slug: req.body.slug,
        location: req.body.location,
        address: req.body.address,
      },
    });
    if (museum) {
      res.status(200).json({
        statusCode: 200,
        message: `success`,
      });
    } else {
      res.status(422).json({
        statusCode: 422,
        message: `fail`,
      });
    }
  } catch (error: any) {
    next(error);
  }
};

export const MuseumLists = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const museumLists = await prisma.museum.findMany({
      select: {
        name: true,
        slug: true,
        location: true,
        address: true,
      },
    });
    res.status(200).json({
      message: "success",
      statusCode: 200,
      data: museumLists,
    });
  } catch (error) {
    next(error);
  }
};
