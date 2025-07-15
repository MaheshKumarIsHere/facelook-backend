// CORE MODULES
import path from "node:path";
// 3RD PARTY MODULES
import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
// APP MODULES

// CONSTANTS
const DOTENV_FILE_PATH = path.join(import.meta.dirname, "../.env");

// APP INITIALITION
const app = express();

// DOTENV CONFIGURATIOn
dotenv.config({ path: DOTENV_FILE_PATH });

// MIDDLEWARES
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === "development") {
  console.log("dev");
  app.use(morgan("dev"));
}
if (process.env.NODE_ENV === "production") {
  console.log("pro");
  app.use(morgan("tiny"));
}

// ROUTES
// Testing Route
app.get("/", (req, res, next) => {
  res.status(200).json({ message: "test working" });
});

// EXPORT
export default app;
