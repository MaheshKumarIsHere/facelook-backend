import http from "node:http";
import app from "./app.js";

const server = http.createServer(app);

server.listen(5555, () => {
  console.log(`Server is running 5555`);
});
