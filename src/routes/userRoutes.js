// 3RD PARTY MODULES
import express from "express";
import {
  deleteUser,
  followUser,
  getAllUsers,
  getUser,
  unFollowUser,
  updateUser,
} from "../controllers/userControllers.js";
// APP MODULES

// ROUTER
const router = express.Router();

router.route("/").get(getAllUsers);
router.route("/:id").put(updateUser).delete(deleteUser).get(getUser);
router.route("/:id/follow").put(followUser);
router.route("/:id/unfollow").put(unFollowUser);
// EXPORT
export default router;
