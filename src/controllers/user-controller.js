import { userRepo } from "../repo/index.js";

const userrepo = new userRepo();

export const createUser = async (req, res) => {
  try {
    const response = await userrepo.create(req.body);
    return res.status(201).json({
      success: true,
      message: "Successfully created a user",
      data: response,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      data: {},
      message: "Something went wrong",
      err: error,
    });
  }
};
