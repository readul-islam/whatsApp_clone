import mongoose from "mongoose";

const messageSchema = mongoose.Schema(
  {
    text: {
      type: String,
      default:null,
    },
    attachment: {
      type: String,
    },
    sender_id: {
      type: mongoose.Types.ObjectId,
    },
    conversation_id: {
      type: mongoose.Types.ObjectId,
    },
    receiver_id: {
      type: mongoose.Types.ObjectId,
    },
    date_time: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Message = mongoose.model("Message", messageSchema);

export default Message;
