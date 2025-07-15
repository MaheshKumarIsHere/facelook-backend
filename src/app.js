// CORE MODULES
import path from "node:path";
// 3RD PARTY MODULES
import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";
// APP MODULES
import authRouter from "./routes/authRoutes.js";
import userRouter from "./routes/userRoutes.js";

// CONSTANTS
const DOTENV_FILE_PATH = path.join(import.meta.dirname, "../.env");

// APP INITIALITION
const app = express();

// DOTENV CONFIGURATIOn
dotenv.config({ path: DOTENV_FILE_PATH });

// MIDDLEWARES
app.use(express.json());
app.use(helmet());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
if (process.env.NODE_ENV === "production") {
  app.use(morgan("tiny"));
}

// ROUTES
// Testing Route
app.get("/", (req, res, next) => {
  res.status(200).json({ message: "test working" });
});
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);

// EXPORT
export default app;
