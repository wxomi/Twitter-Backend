import TweetService from "../services/tweet-service.js";

const tweetservice = new TweetService();

export const createTweet = async (req, res) => {
  try {
    const response = await tweetservice.create(req.body);
    return res.status(201).json({
      success: true,
      message: "Successfully created a tweet",
      data: response,
      err: {},
    });
  } catch (error) {
    console.log(error);
  }
};

export const getTweet = async (req, res) => {
  try {
    const response = await tweetservice.get(req.params.id);
    return res.status(201).json({
      success: true,
      message: "Successfully fetched a tweeet",
      data: response,
      err: {},
    });
  } catch (error) {
    console.log(error);
  }
};
