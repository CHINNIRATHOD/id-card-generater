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
});

module.exports = mongoose.model("User", userSchema);
