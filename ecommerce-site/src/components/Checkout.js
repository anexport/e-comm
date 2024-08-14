import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('your-publishable-key');

const Checkout = () => {
    const [cartItems, setCartItems] = useState(() => {
        // Assuming cart items are stored in local storage
        return JSON.parse(localStorage.getItem('cart')) || [];
    });

    const [currentUser, setCurrentUser] = useState(() => {
        return JSON.parse(localStorage.getItem('user')) || null;
    });


    const handleCheckout = async () => {
        const stripe = await stripePromise;

        const response = await fetch('http://localhost:5000/api/payment/create-checkout-session', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ cartItems, userId: currentUser.id }),
        });

        const { id } = await response.json();

        // Redirect to Stripe Checkout
        const { error } = await stripe.redirectToCheckout({ sessionId: id });
        if (error) {
            console.error('Stripe Checkout error:', error);
        }
    };

    return (
        <div>
            <h1>Checkout</h1>
            {/* Display cart items and total here */}
            <button onClick={handleCheckout}>Proceed to Payment</button>
        </div>
    );
};

export default Checkout;
