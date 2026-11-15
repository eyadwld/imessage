import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI;
    if (!mongoURI) {
      throw new Error("mongoURI is required");
    }
    const connect = await mongoose.connect(mongoURI);

    console.log("Connected to mongo DB successfully");
  } catch (err) {
    console.error("Mongo connection error", err.message);
    process.exit(1);
  }
};

export default connectToDB;
