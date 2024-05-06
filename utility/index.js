// utility
import mongoose from "mongoose";

async function connection() {
  try {
    if (mongoose.connections[0].readyState) return;

    await mongoose.connect("mongodb://localhost:27017/lcmass", {
      useUnifiedTopology: true,
      // These options are deprecated in Mongoose v6, so remove them
      // useFindAndModify: false,
      // useCreateIndex: true,
    });
  } catch (error) {
    console.error("Connection error:", error);
  }
}

export default connection;
