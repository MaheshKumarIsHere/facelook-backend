import Post from "../models/postModel.js";
import User from "../models/userModel.js";

// GET ALL POSTS
export const getAllPosts = async (req, res, next) => {
  const posts = await Post.find();
  res.status(200).json(posts);
};

// CREATE POST
export const createPost = async (req, res, next) => {
  const post = await Post.create(req.body);
  res.status(200).json(post);
};

// GET POST
export const getPost = async (req, res, next) => {
  const post = await Post.findById(req.params.id);
  res.status(200).json(post);
};

// UPDATE POST
export const updatePost = async (req, res, next) => {
  const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json(post);
};

// DELETE POST
export const deletePost = async (req, res, next) => {
  await Post.findByIdAndDelete(req.params.id);
  res.status(200).json({ message: "delete post" });
};

// LIKE POST
export const likePost = async (req, res, next) => {
  const post = await Post.findById(req.params.id);
  if (post.likes.includes(req.body.userId)) {
    post.likes = post.likes.push(req.body.userId);
  }
  await post.save();
  res.status(200).json(post);
};

// GET TIMELINE POST
export const postTimeline = async (req, res, next) => {
  const currentUser = await User.findById(req.params.userId);

  const userPost = await Post.find({ userId: currentUser._id });

  const friendPost = await Promise.all(
    currentUser.followings.map((friendId) => {
      return Post.find({ userId: friendId });
    })
  );
  res.status(200).json([...userPost, ...friendPost[0]]);
};
