import React, { useEffect, useState } from 'react';

const OrderHistory = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/api/orders/${1}`)  // Replace with actual user ID
            .then(response => response.json())
            .then(data => setOrders(data))
            .catch(error => console.error('Error fetching orders:', error));
    }, []);

    return (
        <div>
            <h1>Your Orders</h1>
            {orders.map(order => (
                <div key={order.id}>
                    <h2>Order #{order.id}</h2>
                    <p>Total: ${order.totalPrice}</p>
                    <p>Status: {order.status}</p>
                    {/* Optionally list products in the order */}
                </div>
            ))}
        </div>
    );
};

export default OrderHistory;
