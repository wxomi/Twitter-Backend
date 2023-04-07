import { tweetRepo, commentRepo } from "../repo/index.js";

class commentService {
  constructor() {
    this.commentRepo = new commentRepo();
    this.tweetRepo = new tweetRepo();
  }

  async createComment(modelId, modelType, userId, content) {
    if (modelType == "Tweet") {
      var commentable = await this.tweetRepo.get(modelId);
    } else if (modelType == "Comment") {
      var commentable = await this.commentRepo.get(modelId);
    } else {
      throw new Error("Unknow model type");
    }

    const comment = await this.commentRepo.create({
      content: content,
      userId: userId,
      onModel: modelType,
      commentable: modelId,
      comments: [],
    });
    commentable.comments.push(comment);
    await commentable.save();
    return comment;
  }
}

export default commentService;
