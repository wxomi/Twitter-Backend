import TweetService from "../services/tweet-service.js";

const tweetservice = new TweetService();

export const createTweet = async (req, res) => {
  try {
    const response = await tweetservice.create(req.body);
    return res.status(201).json({
      success: true,
      message: "Successfully created a tweeet",
      date: response,
      err: {},
    });
  } catch (error) {
    console.log(error);
  }
};

export { createTweet };
