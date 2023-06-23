import dotenv from "dotenv";

dotenv.config();

export const MONGODB_URI = process.env.MONGODB_URI;
export const AWS_REGION = process.env.AWS_REGION;
export const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY;
export const ACCESS_KEY_ID = process.env.ACCESS_KEY_ID;
export const BUCKET_NAME = process.env.BUCKET_NAME;
export const REDIS_URI = process.env.REDIS_URI;
