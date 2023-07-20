import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, { useUnifiedTopology: true });
    console.log("Database connection established");
  } catch (error) {
    console.log("Error while connecting to Database", error.message);
  }
};


 export default dbConnection;
