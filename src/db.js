// 3RD PARTY MODULES
import mongoose from "mongoose";

// MONGODB DATABASE CONNECTION METHOD
const connectToMongoDb = async (URI) => {
  try {
    const con = await mongoose.connect(URI);

    console.log(
      `✔ SUCCESS :: Server is connected with mongodb on ${con.connection.host}:${con.connection.port}`
    );
  } catch (error) {
    console.log(`❌ FAILED :: ${error.message}`);
    console.log(error);
  }
};

export default connectToMongoDb;
