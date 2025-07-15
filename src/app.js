// CORE MODULES
import path from "node:path";
// 3RD PARTY MODULES
import express from "express";
import dotenv from "dotenv";
// APP MODULES

// CONSTANTS
const DOTENV_FILE_PATH = path.join(import.meta.dirname, "../.env");

// APP INITIALITION
const app = express();

// DOTENV CONFIGURATIOn
dotenv.config({ path: DOTENV_FILE_PATH });

// ROUTES
// Testing Route
app.get("/", (req, res, next) => {
  res.status(200).json({ message: "test working" });
});

// EXPORT
export default app;
