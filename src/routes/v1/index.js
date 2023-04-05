import express from "express";

import { createTweet } from "../../controllers/tweet-controller.js";
import { togglelike } from "../../controllers/like-controller.js";

const router = express.Router();

router.post("/tweets", createTweet);

router.post("/likes/toggle", togglelike);

export default router;
