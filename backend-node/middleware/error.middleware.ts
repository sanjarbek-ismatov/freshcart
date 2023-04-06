import "express-async-errors";
import { NextFunction, Request, Response } from "express";

export default async function error(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log("middleware working");
  if (err) {
    return res.status(500).send("Serverda xato yuz berdi :(");
  }
  next();
}
