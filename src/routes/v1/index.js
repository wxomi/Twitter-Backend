import express from "express";

import { createTweet, getTweet } from "../../controllers/tweet-controller.js";
import { createComment } from "../../controllers/comment-controller.js";
import { togglelike } from "../../controllers/like-controller.js";
import { login, signUp } from "../../controllers/auth-controller.js";
import { authenticate } from "../../middleware/authentication.js";

const router = express.Router();

router.post("/tweets", [authenticate], createTweet);
router.get("/tweets/:id", getTweet);

router.post("/signup", signUp);
router.post("/login", login);

router.post("/likes/toggle", togglelike);

router.post("/comments", [authenticate], createComment);

router.get("/ping", (req, res) => {
  return res.status(200).json({
    message: "pinged",
  });
});

export default router;
