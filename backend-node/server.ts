import express from "express";
import routes from "./routes/routes";
import "./helpers/logger";
const app = express();
routes(app);
app.listen(process.env.PORT || 4000, () => console.log("Server is running..."));
