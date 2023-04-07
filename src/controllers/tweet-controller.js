import TweetService from "../services/tweet-service.js";
import upload from "../config/s3-config.js";

const tweetservice = new TweetService();

const singleUploader = upload.array("image");

export const createTweet = async (req, res) => {
  try {
    singleUploader(req, res, async function (err, data) {
      if (err) {
        return res.status(500).json({
          error: err,
        });
      }
      // console.log("Image URL is ", req.files);

      const payload = { ...req.body };
      payload.images = req.files;
      const response = await tweetservice.create(payload);
      return res.status(201).json({
        success: true,
        message: "Successfully created a tweet",
        data: response,
        err: {},
      });
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
