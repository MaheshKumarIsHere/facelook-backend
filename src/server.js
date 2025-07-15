// CORE MODULES
import http from "node:http";
// APP MODULES
import app from "./app.js";

// SERVER CREATION
const server = http.createServer(app);

// SERVER LISTENER
server.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
