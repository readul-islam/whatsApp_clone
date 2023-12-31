import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import dbConnection from "./database/db.js";
import appRoute from "./routes/index.js";

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
app.get('/', (req,res)=>{
  res.send({server:'on'})
})
//

dbConnection(); 

//Error handling
app.use("*", (req, res, next) => {
  console.log(req.path, req.url)
  const err = new Error("Route Not Found");
  err.statusCode = 404;
  next(err);
});
app.listen(port, () => {
  console.log("listening on port:", port, process.env.PORT);
});
