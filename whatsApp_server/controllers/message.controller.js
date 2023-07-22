import Conversation from "../models/conversion.model.js";
import Message from "../models/message.model.js";
import { sendToClient } from "../utils/hooks.js";

export const newMessage = async (req, res, next) => {
  const { conversation_id, text } = req.body;
  console.log(req.body);
  try {
    const createMessage = new Message(req.body).save();

    const updateConversation = await Conversation.findByIdAndUpdate(
      conversation_id,
      { $set:{latest_message:text} }
    );

    res
      .status(200)
      .send(
        sendToClient("success", "message created and conversation updated",{
          createMessage,
          updateConversation
        })
      );
  } catch (error) {
    next(error);
  }
};
export const getMessages = async (req, res, next) => {
  const { conversation_id } = req.query;
  try {
    const messages = await Message.find().where({ conversation_id });

    res.status(200).json(sendToClient("success", "message found", messages));
  } catch (error) {
    next(error);
  }
};
