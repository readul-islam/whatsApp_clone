// top level route for all routes
import express from "express";
import userRoute from "./user.route.js";
const appRoute = express.Router();

appRoute.use("/user", userRoute);

appRoute.get("/", (req, res) => {
  res.send({ status: true });
});

export default appRoute;
