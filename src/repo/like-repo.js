import Like from "../Models/like.js";
import CrudRepo from "./curd-repo.js";

class LikeRepo extends CrudRepo {
  constructor() {
    super(Like);
  }
}

export default LikeRepo;
