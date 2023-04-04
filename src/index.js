import express from "express";
import { connect } from "./config/database.js";
import TweetService from "./services/tweet-service.js";

const app = express();

app.listen(3001, async () => {
  console.log("server started");
  await connect();
  console.log("MongoDB connected");
  const repo = new TweetService();
  repo.create({
    content: "Hello this is my #SANKET #tweet",
    email: "wxomi@gmail.com",
  });
});
