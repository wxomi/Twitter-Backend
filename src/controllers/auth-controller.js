import UserService from "../services/user-service.js";

const userService = new UserService();

export const signUp = async (req, res) => {
  try {
    const response = await userService.signUp({
      email: req.body.email,
      password: req.body.password,
      name: req.body.name,
    });
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

export const login = async (req, res) => {
  try {
    const token = await userService.signin(req.body);
    return res.status(201).json({
      message: "successfully signedin",
      success: true,
      token: token,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      message: "Unable to singin",
      success: false,
      token: {},
      err: error,
    });
  }
};
