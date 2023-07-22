import express from "express";
import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import dbConnection from "./database/db.js";
import appRoute from "./routes/index.js";
import { escape } from "./utils/hooks.js";

//
dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

//
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);
app.use(express.json());
app.use(cors());
app.use("*", cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/profileImage", express.static("./profileImage"));
app.use("/api/v1/", appRoute);

//
dbConnection(); 

//Error handling
app.use("*", (req, res, next) => {
  const err = new Error("Route Not Found");
  err.statusCode = 404;
  next(err);
});

app.listen(port, () => {
  console.log("listening on port:", port, process.env.PORT);
});
