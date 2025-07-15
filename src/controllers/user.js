// APP MODULES
import User from "../models/userModel.js";

// UPDATE USER DETAILS
export const updateUser = async (req, res, next) => {
  console.log(req.body, req.params.id);
  if (req.body.isAdmin || req.body.password) {
    throw new Error("you can't change is admin field and password field here");
  }
  const newUser = await User.findByIdAndUpdate(
    req.params.id,
    {
      email: req.body.email,
      username: req.body.username,
      profilePic: req.body.profilePic,
      coverPic: req.body.coverPic,
      desc: req.body.desc,
      city: req.body.city,
      from: req.body.from,
      relationship: req.body.relationship,
    },
    {
      new: true,
      runValidators: true,
    }
  );

  if (!newUser) {
    throw new Error("User not found or not exists");
  }
  res.status(200).json(newUser);
};

// DELETE USER
export const deleteUser = async (req, res, next) => {
  await User.findByIdAndDelete(req.params.id);
  res.status(400).json({ message: "User deleted!" });
};

// GET ALL USER
export const getAllUsers = async (req, res, next) => {
  const users = await User.find();
  res.status(400).json(users);
};

// GET SINGLE USER
export const getUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);
  console.log(user);
  res.status(400).json(user);
};

// ADD FOLLOWERS
export const followUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    throw new Error("User not found or not exists");
  }
  user.followers.push(req.body.userId);
  await user.save();

  res.status(400).json(user);
};
// REMOVE FOLLOWERS
export const unFollowUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    throw new Error("User not found or not exists");
  }
  user.followers = user.followers.filter((item) => item !== req.body.userId);
  await user.save();

  res.status(400).json(user);
};

// ADD FOLLOWINGS
// REMOVE FOLLOWINGS
