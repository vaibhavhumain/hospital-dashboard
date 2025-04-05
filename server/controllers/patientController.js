const Patient = require('../models/Patient');

// Get all patients
exports.getPatients = async (req, res) => {
  const patients = await Patient.find();
  res.json(patients);
};

// Add new patient
exports.addPatient = async (req, res) => {
  const newPatient = new Patient(req.body);
  const saved = await newPatient.save();
  res.status(201).json(saved);
};

// Delete patient
exports.deletePatient = async (req, res) => {
  await Patient.findByIdAndDelete(req.params.id);
  res.status(204).end();
};
