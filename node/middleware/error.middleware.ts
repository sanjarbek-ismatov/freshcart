import { NextFunction, Request, Response } from "express";

export default function error(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err) {
    console.log(err);
    return res.status(500).send("Serverda xato yuz berdi :(");
  }
  next();
}
