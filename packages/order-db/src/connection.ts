import mongoose from "mongoose";

declare const process: {
  env: {
    MONGO_URL?: string;
  };
};

let isConnected = false;

export const connectOrderDB = async () => {
  if (isConnected) return;

  const mongoUrl = process.env.MONGO_URL;

  if (!mongoUrl) {
    throw new Error("MONGO_URL is not defined in env file!");
  }

  try {
    await mongoose.connect(mongoUrl);
    isConnected = true;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
    throw error;
  }
};