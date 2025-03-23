import mongoose from "mongoose";
import { MONGODB_URI } from "../config/env.js";

if (!MONGODB_URI) {
  throw new Error("Mongo URI is missing");
}

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB", error.message);
    process.exit(1);
  }
};

export default connectToMongoDB;
