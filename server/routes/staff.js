const express = require("express");
const router = express.Router();
const Staff = require("../models/Staff");

router.post("/", async (req, res) => {
  try {
    const newStaff = new Staff(req.body);
    await newStaff.save();
    res.status(201).json({ message: "Staff member registered successfully!" });
  } catch (error) {
    console.error("Error saving staff:", error);
    res.status(500).json({ message: "Failed to register staff member." });
  }
});

router.get("/", async (req, res) => {
  try {
    const staffList = await Staff.find();
    res.json(staffList);
  } catch (err) {
    console.error("Error fetching staff list:", err);
    res.status(500).json({ message: "Failed to fetch staff list." });
  }
});

module.exports = router;
