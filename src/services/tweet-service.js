const { tweetRepo, hashTagRepo } = require("../repo");

class TweetService {
  constructor() {
    this.tweetRepository = new tweetRepo();
    this.hashtagRepository = new hashTagRepo();
  }

  async create(data) {
    const content = data.content;
    let tags = content.match(/#[a-zA-Z0-9_]+/g);
    tags = tags.map((tag) => tag.substring(1));
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
  }
}

module.exports = TweetService;
