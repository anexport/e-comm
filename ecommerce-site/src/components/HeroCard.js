import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CardWrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.secondary};
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
    }
`;

const GameImage = styled.img`
    width: 100%;
    max-width: 200px;
    border-radius: 10px;
    margin-bottom: 15px;
`;

const GameTitle = styled.h2`
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 10px;
`;

const GameDescription = styled.p`
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 15px;
`;

const GamePrice = styled.p`
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.accent};
    margin-bottom: 15px;
`;


const HeroCard = ({ game }) => {
    return (
        <Link to={`/product/${game.id}`}>
            <CardWrapper>
                <GameImage src={game.image_url} alt={game.name} />
                <GameTitle>{game.name}</GameTitle>
                <GameDescription>{game.description}</GameDescription>
                <GamePrice>${game.price}</GamePrice>
            </CardWrapper>
        </Link>
    );
};

export default HeroCard;
