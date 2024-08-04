import { ErrorRequestHandler } from "express";
import express, { Request, Response, NextFunction } from "express";

export const errorHandler: ErrorRequestHandler = (
  err,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(500).json({ message: "An error occurred" });
};
