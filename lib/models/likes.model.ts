import mongoose from "mongoose";

const likesSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  threadId: { type: mongoose.Schema.Types.ObjectId, ref: "Thread" },
  createdAt: { type: Date, default: Date.now },
});

const Likes = mongoose.models.Likes || mongoose.model("Likes", likesSchema);
export default Likes;
