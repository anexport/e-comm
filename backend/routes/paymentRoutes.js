const express = require('express');
const Stripe = require('stripe');
const db = require('../db'); // Assuming you have a db connection set up
const router = express.Router();
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

router.post('/create-checkout-session', async (req, res) => {
    const { cartItems, userId } = req.body;

    const lineItems = cartItems.map(item => ({
        price_data: {
            currency: 'usd',
            product_data: {
                name: item.name,
            },
            unit_amount: item.price * 100,
        },
        quantity: item.quantity,
    }));

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: lineItems,
            mode: 'payment',
            success_url: `${process.env.FRONTEND_URL}/success`,
            cancel_url: `${process.env.FRONTEND_URL}/cancel`,
        });

        // Save order to the database (pseudo-code)
        const orderQuery = 'INSERT INTO orders (user_id, total_price, status) VALUES (?, ?, ?)';
        db.query(orderQuery, [userId, session.amount_total / 100, 'Pending']);

        res.json({ id: session.id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
