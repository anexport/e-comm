import React, { useEffect, useState } from 'react';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    const addToCart = (product) => {
        const storedCartItems = JSON.parse(localStorage.getItem('cart')) || [];
        const updatedCart = [...storedCartItems, { ...product, quantity: 1 }];
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    return (
        <div>
            <h1>Product List</h1>
            <div className="product-grid">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>${product.price}</p>
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};



export default ProductList;
