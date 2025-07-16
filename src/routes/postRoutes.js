import express from "express";
import {
  createPost,
  deletePost,
  getAllPosts,
  getPost,
  likePost,
  postTimeline,
  updatePost,
} from "../controllers/postControllers.js";

const router = express.Router();

router.route("/").get(getAllPosts).post(createPost);
router.route("/:id").put(updatePost).delete(deletePost).get(getPost);
router.route("/:id/like").put(likePost);
router.route("/timeline").post(postTimeline);

export default router;
