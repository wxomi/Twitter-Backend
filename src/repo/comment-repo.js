import CrudRepo from "./crud-repo.js";
import Comment from "../Models/comment.js";

class CommentRepo extends CrudRepo {
  constructor() {
    super(Comment);
  }
}

export default CommentRepo;
