import Tweet from "../Models/tweet.js";
import Comment from "../Models/comment.js";
import CrudRepo from "./crud-repo.js";

class tweetRepo extends CrudRepo {
  constructor() {
    super(Tweet);
  }

  async getWithComments(id) {
    try {
      const tweet = await Tweet.findById(id).populate({ path: "comments" });
      tweet.comments = await Comment.populate(tweet.comments, {
        path: "comments",
      });
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }

  async getAll(offset, limit) {
    try {
      const tweet = await Tweet.find().skip(offset).limit(limit);
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }
}

export default tweetRepo;
