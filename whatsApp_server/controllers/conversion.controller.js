import Conversation from "../models/conversion.model.js";
import { sendToClient } from "../utils/hooks.js";

export const addConversation = async (req, res, next) => {
  const { creator, participant } = req.body;
  try {
    const exits = await Conversation.findOne({
      "creator.id": creator.id,
      "participant.id": participant.id,
    });
   
    if (exits) {
     return res.status(200).json(sendToClient("fail", "conversation already exists",exits));
    }
    // console.log(req.body)
    const newConversation = new Conversation(req.body);
    const result = await newConversation.save();
    // console.log(result);

    res
      .status(200)
      .send(sendToClient("success", "Conversation created", result));
  } catch (error) {
    next(error);
  }
};
