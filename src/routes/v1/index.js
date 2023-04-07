import express from "express";

import { createTweet, getTweet } from "../../controllers/tweet-controller.js";
import { createComment } from "../../controllers/comment-controller.js";
import { togglelike } from "../../controllers/like-controller.js";
import { createUser } from "../../controllers/user-controller.js";

const router = express.Router();

router.post("/tweets", createTweet);
router.get("/tweets/:id", getTweet);

router.post("/user", createUser);

router.post("/likes/toggle", togglelike);

router.post("/comments", createComment);

export default router;
