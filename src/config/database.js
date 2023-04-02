import mongoose from "mongoose";
import { MONGODB_URI } from "./serverConfig.js";

export const connect = async () => {
  await mongoose.connect(MONGODB_URI);
};
