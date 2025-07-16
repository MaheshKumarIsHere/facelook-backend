import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: [true, "userId is required!"],
  },
  desc: {
    type: String,
    maxLength: [500, "desc should be less than 500 chars"],
  },
  img: {
    type: String,
  },
  likes: {
    type: Array,
    default: [],
  },
});

const Post = mongoose.model("Post", postSchema);

export default Post;
