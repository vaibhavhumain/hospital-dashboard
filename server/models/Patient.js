const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
  email: String,
  phone: String,
  address: String,
  admissionDate: Date,
  symptoms: String,
  diagnosis: String,
  doctor: String,
  room: String,
  insurance: String,
  emergencyContactName: String,
  emergencyContactPhone: String,
});

module.exports = mongoose.model("Patient", patientSchema);
