import mongoose from "mongoose";

const conversationSchema = mongoose.Schema(
  {
    creator: {
      id: mongoose.Types.ObjectId,
      userName: String,
      image: String,
    },
    participant: {
      id: mongoose.Types.ObjectId,
      userName: String,
      image: String,
    },
    latest_message: {
      type: String,
    },
    last_update: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Conversation = mongoose.model("Conversation", conversationSchema);

export default Conversation;
