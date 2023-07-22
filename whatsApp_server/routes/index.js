// top level route for all routes
import express from "express";
import userRoute from "./user.routes.js";
import conversationRoute from "./conversation.routes.js";
const appRoute = express.Router();

appRoute.use("/user", userRoute);
appRoute.use('/conversation',conversationRoute)

appRoute.get("/", (req, res) => {
  res.send({ status: true });
});

export default appRoute;
