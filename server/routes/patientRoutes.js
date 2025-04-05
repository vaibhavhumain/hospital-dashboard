const express = require('express');
const router = express.Router();
const { getPatients, addPatient, deletePatient } = require('../controllers/patientController');

router.get('/', getPatients);
router.post('/', addPatient);
router.delete('/:id', deletePatient);

module.exports = router;
