import mongoose from "mongoose";

export default async function connectDb() {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    console.log("Connected to data base");
  } catch (error) {
    console.log("Connection to database Failed");
    console.log(error);
  }
}
