const User = require('../models/User');

// Get all users
exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

// Add new user
exports.addUser = async (req, res) => {
  try {
    const user = new User(req.body);
    const saved = await user.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete user
exports.deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.status(204).end();
};
