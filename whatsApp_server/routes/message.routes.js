import express from "express";
import { getMessages, newMessage } from "../controllers/message.controller.js";
const router = express.Router();

router.post("/new", newMessage);
router.get("/get-messages", getMessages);

export default router;
