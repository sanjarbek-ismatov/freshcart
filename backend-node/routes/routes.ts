import { Express } from "express";
import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";
import { authRouter } from "./auth.routes";
import morgan from "morgan";
export default function (app: Express) {
  app.use(
    cors({
      exposedHeaders: ["x-token"],
      optionsSuccessStatus: 200,
    })
  );
  app.use(
    helmet({
      crossOriginResourcePolicy: false,
    })
  );
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(morgan("tiny"));
  app.use("/api/auth", authRouter);
}
