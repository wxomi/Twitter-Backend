import Redis from "ioredis";
import { REDIS_URI } from "./serverConfig.js";

const redisClient = new Redis(REDIS_URI);

export default redisClient;
