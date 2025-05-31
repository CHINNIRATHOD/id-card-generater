const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/User");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB (local, viewable in Compass)
mongoose.connect("mongodb://127.0.0.1:27017/idcards")
  .then(() => console.log("✅ Connected to MongoDB locally"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// POST endpoint to save form data
app.post("/api/idcard", async (req, res) => {
  try {
    const {
      name, dob, usn, branch, bloodGroup,
      emergencyContact, email, company
    } = req.body;

    const newUser = new User({
      name, dob, usn, branch, bloodGroup,
      emergencyContact, email, company
    });

    await newUser.save();

    res.status(201).json({ message: "ID Card data saved to MongoDB" });
  } catch (error) {
    res.status(500).json({ message: "Error saving data", error });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
