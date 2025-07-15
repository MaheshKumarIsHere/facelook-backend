// CORE MODULES
import http from "node:http";
// APP MODULES
import app from "./app.js";
import connectToMongoDb from "./db.js";

// SERVER CREATION
const server = http.createServer(app);

// MONGODB CONNECTION
connectToMongoDb(process.env.MONGODB_URI);

// SERVER LISTENER
server.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
