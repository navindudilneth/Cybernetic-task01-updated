const db = require('../configuration/db');

// Add users
const saveUser = (req, res) => {
    const { name, contact, age, address } = req.body;
    const sql = 'INSERT INTO users (name, contact, age, address) VALUES (?, ?, ?, ?)';
    db.query(sql, [name, contact, age, address], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ status: true, message: 'User added successfully', id: result.insertId });
    });
};

// Find all users
const findAllUsers = (req, res) => {
    const sql = 'SELECT * FROM users';
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json({ status: true, data: results });
    });
};

// Find user by ID
const findUser = (req, res) => {
    const userId = req.params.id;
    const sql = 'SELECT * FROM users WHERE id = ?';
    db.query(sql, [userId], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (result.length === 0) {
            return res.status(404).json({ status: false, message: 'User not found' });
        }
        res.status(200).json({ status: true, data: result[0] });
    });
};

// Update user
const updateUser = (req, res) => {
    const userId = req.params.id;
    const { name, contact, age, address } = req.body;
    const sql = 'UPDATE users SET name = ?, contact = ?, age = ?, address = ? WHERE id = ?';
    db.query(sql, [name, contact, age, address, userId], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json({ status: true, message: 'User updated successfully' });
    });
};

// Delete user
const deleteUser = (req, res) => {
    const userId = req.params.id;
    const sql = 'DELETE FROM users WHERE id = ?';
    db.query(sql, [userId], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        console.log(result); // Check the result of the delete operation
        if (result.affectedRows === 0) {
            return res.status(404).json({ status: false, message: 'User not found or already deleted' });
        }
        res.status(200).json({ status: true, message: 'User deleted successfully' });
    });
};
module.exports = {
    saveUser,
    findAllUsers,
    findUser,
    updateUser,
    deleteUser
};


