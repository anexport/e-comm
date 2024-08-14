import React from 'react';
import styled from 'styled-components';

const ProductPageWrapper = styled.div`
    padding: 20px;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
`;

const ProductTitle = styled.h1`
    font-size: 2rem;
    margin-bottom: 20px;
`;

const ProductDetails = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const ProductImage = styled.img`
    width: 100%;
    max-width: 300px;
    margin-right: 20px;
    border-radius: 10px;
`;

const ProductInfo = styled.div`
    flex: 1;
`;

const ProductPrice = styled.p`
    font-size: 1.5rem;
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

const ProductPage = ({ product }) => {
    return (
        <ProductPageWrapper>
            <ProductTitle>{product.name}</ProductTitle>
            <ProductDetails>
                <ProductImage src="/assets/product.jpg" alt={product.name} />
                <ProductInfo>
                    <ProductPrice>${product.price}</ProductPrice>
                    <p>{product.description}</p>
                    <AddToCartButton>Add to Cart</AddToCartButton>
                </ProductInfo>
            </ProductDetails>
        </ProductPageWrapper>
    );
};

export default ProductPage;
