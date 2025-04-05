const mongoose = require("mongoose");

const staffSchema = new mongoose.Schema({
  name: String,
  age: String,
  gender: String,
  email: String,
  phone: String,
  address: String,
  department: String,
  shiftTiming: String,
  joiningDate: String,
  salary: String,
}, { timestamps: true });

module.exports = mongoose.model("Staff", staffSchema);
