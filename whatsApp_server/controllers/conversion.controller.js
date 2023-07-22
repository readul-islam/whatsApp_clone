import Conversation from "../models/conversion.model.js";
import { sendToClient } from "../utils/hooks.js";
 
export const addConversation = async (req, res, next) => {
  try {
    const newConversation = new Conversation(req, body);
    const result = await newConversation.save();

    res
      .status(200)
      .json(sendToClient("success", "Conversation created", result));
  } catch (error) {
    next(error);
  }
};
