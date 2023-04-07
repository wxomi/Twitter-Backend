import express from "express";

import { createTweet, getTweet } from "../../controllers/tweet-controller.js";
import { createComment } from "../../controllers/comment-controller.js";
import { togglelike } from "../../controllers/like-controller.js";
import { signUp } from "../../controllers/auth-controller.js";

const router = express.Router();

router.post("/tweets", createTweet);
router.get("/tweets/:id", getTweet);

router.post("/signup", signUp);

router.post("/likes/toggle", togglelike);

router.post("/comments", createComment);

export default router;
