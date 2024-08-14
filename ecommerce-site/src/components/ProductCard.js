import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.secondary};
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
    }
`;

const ProductTitle = styled.h2`
    font-size: 1.2rem;
    margin: 10px 0;
`;

const ProductPrice = styled.p`
    font-size: 1rem;
    margin: 10px 0;
`;

const AddToCartButton = styled.button`
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background};
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: ${({ theme }) => theme.colors.accent};
    }
`;

const ProductCard = ({ product }) => {
    return (
        <CardWrapper>
            <ProductTitle>{product.name}</ProductTitle>
            <ProductPrice>${product.price}</ProductPrice>
            <AddToCartButton>Add to Cart</AddToCartButton>
        </CardWrapper>
    );
};

export default ProductCard;
