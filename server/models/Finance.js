const mongoose = require("mongoose"); // <-- Add this line!

const financeSchema = new mongoose.Schema({
  date: String,
  type: String,
  category: String,
  amount: Number,
  description: String,
  responsiblePerson: String,
});

module.exports = mongoose.model("Finance", financeSchema);
