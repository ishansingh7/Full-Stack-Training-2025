const express = require("express"); 
const path = require("path");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Signup = require("./models/signupSchema"); 
const app = express();
dotenv.config();

app.use(express.json()); 

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });

app.get("/", (req, res) => {
  res.send("Hello, is this the MERNStack SECE2025 Training?");
});

app.get("/static/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/signup/", async (req, res) => {
  const { firstName, lastName, userName, email, password } = req.body; 
  try {
   
    const newCustomer = new Signup({
      firstName: firstName,
      lastName: lastName, 
      userName: userName,
      email: email,
      password: password,
    });

    // Save to database  

    await newCustomer.save();
    res.status(201).send("User created successfully");
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.post('/update', async (req, res) => {
  var updateRec = await Signup.findOneAndUpdate({"userName":"ishan7"}, {$set:{"userName":"ishan2060"}})
  res.send("User updated successfully");

})

app.post('/delete', async (req, res) => {
  try {
    var deletedUser = await Signup.findOneAndDelete({ "userName": "ishan2060" });
    if (deletedUser) {
      res.send("User deleted successfully");
    } else {
      res.send("User not found");
    }
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).send("Internal Server Error");
  }
});


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
