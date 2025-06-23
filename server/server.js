const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const User = require("./models/User");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/idcards")
  .then(() => console.log("✅ Connected to MongoDB locally"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + '-' + file.originalname;
    cb(null, uniqueName);
  },
});
const upload = multer({ storage: storage });

// API to handle form submission + file upload
app.post("/api/idcard", upload.single("photo"), async (req, res) => {
  try {
    const {
      name, dob, usn, branch, bloodGroup,
      emergencyContact, email, company
    } = req.body;

    const photo = req.file ? req.file.filename : null;

    const newUser = new User({
      name, dob, usn, branch, bloodGroup,
      emergencyContact, email, company, photo
    });

    await newUser.save();

    res.status(201).json({ message: "✅ ID Card data saved with photo!", filename: photo });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "❌ Error saving data", error });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
