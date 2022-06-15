import { NextFunction, Request, Response } from "express";
import prisma from "../lib/prisma";

export const createGallery = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const gallery = await prisma.gallery.create({
      data: {
        name: req.body.name,
        slug: req.body.slug,
        museumId: req.body.museumId,
      },
    });
    if (gallery) {
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

export const galleryLists = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const galleryLists = await prisma.gallery.findMany({
      select: {
        id: true,
        name: true,
        slug: true,
        Museum: true,
        updatedAt: true,
        createdAt: true,
      },
    });
    res.status(200).json({
      message: "success",
      statusCode: 200,
      data: galleryLists,
    });
  } catch (error) {
    next(error);
  }
};

export const updateGallery = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const gallery = await prisma.gallery.update({
      where: {
        id: req.params.id,
      },
      data: {
        name: req.body.name,
        slug: req.body.slug,
      },
    });
    res.status(200).json({
      message: "success",
      statusCode: 200,
      data: gallery,
    });
  } catch (error) {
    next(error);
  }
};
