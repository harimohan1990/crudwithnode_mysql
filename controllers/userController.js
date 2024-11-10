const userModel = require("../models/userModel");

exports.createUser = (req, res) => {
  const { name, email, age } = req.body;
  userModel.createUser({ name, email, age }, (err, userId) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: "User created", userId });
  });
};

exports.getUsers = (req, res) => {
  userModel.getUsers((err, users) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(users);
  });
};

exports.getUserById = (req, res) => {
  const { id } = req.params;
  userModel.getUserById(id, (err, user) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  });
};

exports.updateUser = (req, res) => {
  const { id } = req.params;
  const { name, email, age } = req.body;
  userModel.updateUser(id, { name, email, age }, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ message: "User not found" });
    res.status(200).json({ message: "User updated" });
  });
};

exports.deleteUser = (req, res) => {
  const { id } = req.params;
  userModel.deleteUser(id, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ message: "User not found" });
    res.status(200).json({ message: "User deleted" });
  });
};
