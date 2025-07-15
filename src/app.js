import express from "express";

const app = express();

app.get("/", (req, res, next) => {
  res.status(200).json({ message: "test working" });
});

export default app;
