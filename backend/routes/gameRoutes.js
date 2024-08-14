const express = require('express');
const db = require('../db');
const router = express.Router();

// Get all games
router.get('/', (req, res) => {
    const query = 'SELECT * FROM games';
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

// Get a single game by ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM games WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (results.length > 0) {
            res.json(results[0]);
        } else {
            res.status(404).json({ message: 'Game not found' });
        }
    });
});

// Add a new game
router.post('/', (req, res) => {
    const { name, description, price, image_url } = req.body;
    const query = 'INSERT INTO games (name, description, price, image_url) VALUES (?, ?, ?, ?)';
    db.query(query, [name, description, price, image_url], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ id: results.insertId, name, description, price, image_url });
    });
});

// Update an existing game
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name, description, price, image_url } = req.body;
    const query = 'UPDATE games SET name = ?, description = ?, price = ?, image_url = ? WHERE id = ?';
    db.query(query, [name, description, price, image_url, id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (results.affectedRows > 0) {
            res.json({ message: 'Game updated successfully' });
        } else {
            res.status(404).json({ message: 'Game not found' });
        }
    });
});

// Delete a game
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM games WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (results.affectedRows > 0) {
            res.json({ message: 'Game deleted successfully' });
        } else {
            res.status(404).json({ message: 'Game not found' });
        }
    });
});

module.exports = router;
