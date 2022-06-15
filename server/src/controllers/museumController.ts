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
        id: true,
        name: true,
        slug: true,
        location: true,
        address: true,
        updatedAt: true,
        createdAt: true,
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

export const updateMuseum = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const museum = await prisma.museum.update({
      where: {
        id: req.params.id,
      },
      data: {
        name: req.body.name,
        slug: req.body.slug,
        location: req.body.location,
        address: req.body.address,
      },
    });
    res.status(200).json({
      message: "success",
      statusCode: 200,
      data: museum,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteMuseum = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await prisma.museum.delete({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({
      message: "success",
      statusCode: 200,
    });
  } catch (error) {
    next(error);
  }
};
