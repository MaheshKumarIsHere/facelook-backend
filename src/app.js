// CORE MODULES
import path from "node:path";
// 3RD PARTY MODULES
import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
// APP MODULES
import authRouter from "./routes/authRoutes.js";
import userRouter from "./routes/userRoutes.js";
import postRouter from "./routes/postRoutes.js";

// CONSTANTS
const DOTENV_FILE_PATH = path.join(import.meta.dirname, "../.env");

// APP INITIALITION
const app = express();

// DOTENV CONFIGURATIOn
dotenv.config({ path: DOTENV_FILE_PATH });

// MIDDLEWARES
app.use(express.json());
app.use(helmet());
app.use(cors({ origin: "http://localhost:5173" }));
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
app.use("/api/v1/posts", postRouter);

// GLOBAL ERROR HANDLER
app.use((err, req, res, next) => {
  res.status(500).json(err);
});

// EXPORT
export default app;
