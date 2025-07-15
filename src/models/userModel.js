// 3RD PARTY MODULES
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "username is required!"],
      maxLength: [50, "username should be less than 50 chars"],
      minLength: [3, "username should be greater than 3 chars"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "email is required!"],
      unique: true,
      maxLength: [255, "email should be less than 255 chars"],
    },
    password: {
      type: String,
      required: [true, "password is required!"],
      minLength: [8, "password should be at least 8 chars"],
    },
    profilePic: {
      type: String,
      default: "",
    },
    coverPic: {
      type: String,
      default: "",
    },
    followers: {
      type: Array,
      default: [],
    },
    followings: {
      type: Array,
      default: [],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
