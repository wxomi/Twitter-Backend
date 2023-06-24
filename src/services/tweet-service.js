import redis from "../config/redis-client.js";
import { hashtagRepo, tweetRepo } from "../repo/index.js";

class TweetService {
  constructor() {
    this.tweetRepository = new tweetRepo();
    this.hashtagRepository = new hashtagRepo();
  }

  async create(data) {
    try {
      const content = data.content;
      let tags = content.match(/#[a-zA-Z0-9_]+/g);
      if (tags && tags.length > 0) {
        tags = tags
          .map((tag) => tag.substring(1))
          .map((tag) => tag.toLowerCase());
      }
      const tweet = await this.tweetRepository.create({ content });
      if (data.images && data.images.length > 0) {
        data.images.forEach((ele) => {
          tweet.images.push(ele.location);
        });
      }
      await tweet.save();
      if (tags && tags.length > 0) {
        let alreadyPresentTags = await this.hashtagRepository.findByName(tags);
        let titleOfPresentTags = alreadyPresentTags.map((tags) => tags.title);

        let newTags = tags.filter((tag) => !titleOfPresentTags.includes(tag));
        newTags = newTags.map((tag) => {
          return {
            title: tag,
            tweets: [tweet.id],
          };
        });
        await this.hashtagRepository.bulkCreate(newTags);

        alreadyPresentTags.forEach((tag) => {
          tag.tweets.push(tweet.id);
          tag.save();
        });
      }

      return tweet;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async get(id) {
    try {
      const response = await redis.get(id);
      if (response) {
        const tweet = JSON.parse(response);

        setImmediate(async () => {
          const tweet = await this.tweetRepository.getWithComments(id);
          await redis.set(id, JSON.stringify(tweet));
          await redis.expire(id, 10 * 60);
        });
        return tweet;
      }

      const tweet = await this.tweetRepository.getWithComments(id);
      await redis.set(id, JSON.stringify(tweet));
      await redis.expire(id, 10 * 60);

      return tweet;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export default TweetService;
