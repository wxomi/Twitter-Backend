const express = require("express");
const connect = require("./config/database");

const app = express();

app.listen(3000, async () => {
  console.log("server started");
  await connect();
  console.log("MongoDB connected");
  //   const tweet = await Tweet.create({
  //     content: "First Tweet",
  //     userEmail: "abc@gmail.com",
  //   });
  const tweetRepo = new TweetRepo();
  const tweet = await tweetRepo.getAll();
  console.log(tweet);
});
