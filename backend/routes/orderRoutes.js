const express = require('express');
const db = require('../db');
const router = express.Router();

// Create a new order
router.post('/', (req, res) => {
    const { userId, products, totalPrice } = req.body;

    // Insert the order into the orders table
    const query = 'INSERT INTO orders (user_id, total_price) VALUES (?, ?)';
    db.query(query, [userId, totalPrice], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        const orderId = results.insertId;

        // Insert each product in the order_products table
        const orderProductsQuery = 'INSERT INTO order_products (order_id, product_id, quantity) VALUES ?';
        const orderProductsData = products.map(product => [orderId, product.productId, product.quantity]);

        db.query(orderProductsQuery, [orderProductsData], (err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.status(201).json({ orderId, userId, products, totalPrice });
        });
    });
});

// Get all orders for a specific user
router.get('/:userId', (req, res) => {
    const { userId } = req.params;
    const query = `
        SELECT o.id as order_id, o.total_price, o.created_at, op.product_id, op.quantity, p.name as product_name, p.price as product_price
        FROM orders o
        JOIN order_products op ON o.id = op.order_id
        JOIN products p ON op.product_id = p.id
        WHERE o.user_id = ?
        ORDER BY o.created_at DESC;
    `;
    db.query(query, [userId], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        // Format the response to group products under their respective orders
        const orders = results.reduce((acc, row) => {
            const { order_id, total_price, created_at, product_id, quantity, product_name, product_price } = row;
            const order = acc.find(o => o.id === order_id);
            const product = { id: product_id, name: product_name, price: product_price, quantity };

            if (order) {
                order.products.push(product);
            } else {
                acc.push({
                    id: order_id,
                    totalPrice: total_price,
                    createdAt: created_at,
                    products: [product]
                });
            }

            return acc;
        }, []);

        res.json(orders);
    });
});

module.exports = router;
