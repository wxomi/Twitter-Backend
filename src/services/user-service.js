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

  async getUserByEmail(email) {
    try {
      const user = await this.userrepo.findBy(email);
      return user;
    } catch (error) {
      console.log("Something went wronng in user Service");
      throw error;
    }
  }

  async signin(data) {
    try {
      const user = await this.getUserByEmail(data.email);
      if (!user) {
        throw {
          message: "No user found",
          success: false,
        };
      }

      if (!user.comparePassword(data.password)) {
        throw {
          message: "Incorrect Password",
          success: false,
        };
      }

      const token = user.genJWT();
      return token;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export default UserService;
