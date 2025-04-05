const express = require("express");
const router = express.Router();
const Finance = require("../models/Finance");

// POST - Record a new finance transaction
router.post("/", async (req, res) => {
  try {
    const newTransaction = new Finance(req.body);
    await newTransaction.save();
    res.status(201).json({ message: "Transaction recorded successfully!" });
  } catch (err) {
    res.status(500).json({ error: "Failed to record transaction" });
  }
});

// GET - Fetch all finance transactions
router.get("/", async (req, res) => {
  try {
    const transactions = await Finance.find().sort({ date: -1 });
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch transactions" });
  }
});

module.exports = router;
