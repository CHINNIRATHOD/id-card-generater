const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  dob: String,
  usn: String,
  branch: String,
  bloodGroup: String,
  emergencyContact: String,
  email: String,
  company: String,
  photo: String // ✅ Added photo field to store uploaded image filename
});

module.exports = mongoose.model("User", userSchema);
