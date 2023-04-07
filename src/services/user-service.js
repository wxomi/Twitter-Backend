import { userRepo } from "../repo/index.js";

class UserService {
  constructor() {
    this.userrepo = new userRepo();
  }

  async signUp(data) {
    try {
      const user = this.userrepo.create(data);
      return user;
    } catch (error) {
      console.log("Something went wronng in user Service");
      throw error;
    }
  }
}

export default UserService;
