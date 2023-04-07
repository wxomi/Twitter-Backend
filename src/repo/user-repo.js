import User from "../Models/user.js";
import CrudRepo from "./crud-repo.js";

class userRepo extends CrudRepo {
  constructor() {
    super(User);
  }

  async findByUserAndLikeable(data) {
    try {
      const res = await Like.findOne(data);
      return res;
    } catch (error) {
      throw error;
    }
  }

  async findBy(data) {
    try {
      const response = await User.findOne({ email: data });
      return response;
    } catch (error) {
      throw error;
    }
  }
}

export default userRepo;
