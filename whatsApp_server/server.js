import express from "express";
import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import dbConnection from "./database/db.js";
import appRoute from "./routes/index.js";

//
dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

//
app.use(helmet());
app.use(express.json());
app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use("/api/v1/", appRoute);


//
dbConnection();

//
app.listen(port, () => {
  console.log("listening on port:", port, process.env.PORT);
});