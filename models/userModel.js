const db = require("../config/db");

exports.createUser = (user, callback) => {
  const sql = "INSERT INTO users (name, email, age) VALUES (?, ?, ?)";
  db.query(sql, [user.name, user.email, user.age], (err, result) => {
    if (err) return callback(err);
    callback(null, result.insertId);
  });
};

exports.getUsers = (callback) => {
  const sql = "SELECT * FROM users";
  db.query(sql, (err, results) => {
    if (err) return callback(err);
    callback(null, results);
  });
};

exports.getUserById = (id, callback) => {
  const sql = "SELECT * FROM users WHERE id = ?";
  db.query(sql, [id], (err, results) => {
    if (err) return callback(err);
    callback(null, results[0]);
  });
};

exports.updateUser = (id, user, callback) => {
  const sql = "UPDATE users SET name = ?, email = ?, age = ? WHERE id = ?";
  db.query(sql, [user.name, user.email, user.age, id], (err, result) => {
    if (err) return callback(err);
    callback(null, result);
  });
};

exports.deleteUser = (id, callback) => {
  const sql = "DELETE FROM users WHERE id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) return callback(err);
    callback(null, result);
  });
};
