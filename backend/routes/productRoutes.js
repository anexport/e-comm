const express = require('express');
const db = require('../db');
const router = express.Router();

// Get all products
router.get('/', (req, res) => {
    const query = 'SELECT * FROM products';
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

// Get a single product by ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM products WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (results.length > 0) {
            res.json(results[0]);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    });
});

// Create a new product
router.post('/', (req, res) => {
    const { name, description, price, stock } = req.body;
    const query = 'INSERT INTO products (name, description, price, stock) VALUES (?, ?, ?, ?)';
    db.query(query, [name, description, price, stock], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ id: results.insertId, name, description, price, stock });
    });
});

// Update a product
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name, description, price, stock } = req.body;
    const query = 'UPDATE products SET name = ?, description = ?, price = ?, stock = ? WHERE id = ?';
    db.query(query, [name, description, price, stock, id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (results.affectedRows > 0) {
            res.json({ message: 'Product updated successfully' });
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    });
});

// Delete a product
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM products WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (results.affectedRows > 0) {
            res.json({ message: 'Product deleted successfully' });
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    });
});

module.exports = router;
