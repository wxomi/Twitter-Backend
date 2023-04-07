import { tweetRepo, hashtagRepo } from "../repo/index.js";

class TweetService {
  constructor() {
    this.tweetRepository = new tweetRepo();
    this.hashtagRepository = new hashtagRepo();
  }

  async create(data) {
    try {
      const content = data.content;
      let tags = content.match(/#[a-zA-Z0-9_]+/g);
      tags = tags
        .map((tag) => tag.substring(1))
        .map((tag) => tag.toLowerCase());
      const tweet = await this.tweetRepository.create(data);
      let alreadyPresentTags = await this.hashtagRepository.findByName(tags);
      let titleOfPresentTags = alreadyPresentTags.map((tags) => tags.title);

      let newTags = tags.filter((tag) => !titleOfPresentTags.includes(tag));
      newTags = newTags.map((tag) => {
        return {
          title: tag,
          tweets: [tweet.id],
        };
      });
      const response = await this.hashtagRepository.bulkCreate(newTags);
      alreadyPresentTags.forEach((tag) => {
        tag.tweets.push(tweet.id);
        tag.save();
      });

      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async get(id) {
    try {
      const tweet = await this.tweetRepository.getWithComments(id);
      return tweet;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export default TweetService;
