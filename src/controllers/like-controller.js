import LikeService from "../services/like-service.js";

const likeService = new LikeService();

export const togglelike = async (req, res) => {
  try {
    const response = await likeService.toggleLike(
      req.params.modelId,
      req.params.modelType,
      req.body.userId,
    );
    return res.status(200).json({
      success: true,
      data: response,
      err: {},
      message: "Successfully toggled like",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: {},
      message: "Something went wrong",
      err: error,
    });
  }
};
