import express from "express";
import { connect } from "./config/database.js";
import LikeService from "./services/like-service.js";
import { tweetRepo, userRepo } from "./repo/index.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(3001, async () => {
  console.log("server started");
  await connect();
  console.log("MongoDB connected");
  const userRepository = new userRepo();
  const tweetRepository = new tweetRepo();

  // const tweet = await tweetRepository.create({
  //   content: "Hi This is My #first #tweet",
  // });
  const tweets = await tweetRepository.getAll(0, 10);
  const user = await userRepository.getAll();
  const likeService = new LikeService();
  await likeService.toggleLike(tweets[0].id, "Tweet", user[0].id);
});
