import { likeRepo, tweetRepo } from "../repo/index.js";

class LikeService {
  constructor() {
    this.likeRepo = new likeRepo();
    this.tweetRepo = new tweetRepo();
  }

  async toggleLike(modelId, modelType, userId) {
    // api/v1/likes/toggle?id=model&type=Tweet
    let likeable;
    if (modelType == "Tweet") {
      likeable = await this.tweetRepo.get(modelId);
    } else if (modelType == "Comment") {
    } else {
      throw new Error("unknown model type");
    }

    const exists = await this.likeRepo.findByUserAndLikeable({
      user: userId,
      onModel: modelType,
      likeable: modelId,
    });
    let isAdded;
    if (exists) {
      likeable.likes.pull(exists.id);
      await likeable.save();
      await exists.deleteOne();
      isAdded = false;
    } else {
      const newLike = await this.likeRepo.create({
        user: userId,
        onModel: modelType,
        likeable: modelId,
      });
      likeable.likes.push(newLike);
      await likeable.save();
      isAdded = true;
    }
    return isAdded;
  }
}

export default LikeService;
