import express from "express";
import routes from "./routes/routes";
import "./helpers/logger";
import {config} from 'dotenv'
config()
import { dbConnect } from "./helpers/dbconnector";
const app = express();
dbConnect()
routes(app);
app.listen(process.env.PORT || 4000, () => console.log("Server is running..."));
