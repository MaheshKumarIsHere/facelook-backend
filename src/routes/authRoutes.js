// 3RD PARTY MODULES
import express from "express";
// APP MODULES
import { login, register } from "../controllers/auth.js";

// ROUTER
const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);

// EXPORT
export default router;
