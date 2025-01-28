const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully.");
  } catch (err) {
    console.error("Database connection error:", err.message);
    process.exit(1); // Exit the app if the database connection fails
  }
};

module.exports = connectToDB;
