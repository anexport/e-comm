const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    products: [{ product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' }, quantity: Number }],
    totalPrice: { type: Number, required: true },
    status: { type: String, default: 'Pending' },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
