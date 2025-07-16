// 3RD PARTY MODULES
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
// APP MODULES
import User from "../models/userModel.js";

// USER REGISTRATION METHOD
export const register = async (req, res, next) => {
  if (!req.body) {
    throw new Error("username,email,password are required");
  }
  const passwordHash = await bcrypt.hash(req.body.password, 10);
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    passwordHash: passwordHash,
  });
  const savedUser = await user.save();
  res.status(201).json(savedUser);
};

// USER LOGIN METHOD
export const login = async (req, res, next) => {
  if (!req.body.email || !req.body.password) {
    throw new Error("email and password is required");
  }

  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    throw new Error("Invalid email or password!");
  }

  const isPasswordValid = await bcrypt.compare(
    req.body.password,
    user.passwordHash
  );
  if (!isPasswordValid) {
    throw new Error("Invalid email or password!");
  }

  const token = jwt.sign(
    { id: user._id, isAdmin: user.isAdmin },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: "30d",
    }
  );
  res.status(200).json({ user, token });
};
