// require mongoose
const mongoose = require("mongoose");

// connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log(`Error connecting to MongoDB: ${error.message}`);
  }
};

// export connectDB function
module.exports = connectDB;