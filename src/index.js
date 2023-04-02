const express = require("express");
const connect = require("./config/database");
const TweetService = require("./services/tweet-service");

const app = express();

app.listen(3001, async () => {
  console.log("server started");
  await connect();
  console.log("MongoDB connected");
  let repo = new TweetService();
  const tweet = await repo.create({
    content: "This is After #processing really #Excited",
  });
  console.log(tweet);
});
