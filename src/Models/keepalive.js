import mongoose from "mongoose";

const keepaliveSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Keepalive = mongoose.model("Keepalive", keepaliveSchema);

export default Keepalive;
