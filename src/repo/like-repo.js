import Like from "../Models/like.js";
import CrudRepo from "./crud-repo.js";

class LikeRepo extends CrudRepo {
  constructor() {
    super(Like);
  }

  async findByUserAndLikeable(data) {
    try {
      const res = await Like.findOne(data);
      return res;
    } catch (error) {
      throw error;
    }
  }
}

export default LikeRepo;
