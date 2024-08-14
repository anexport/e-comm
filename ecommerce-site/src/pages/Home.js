import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import HeroCard from '../components/HeroCard';

const HeroSection = styled.section`
    padding: 40px 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
`;

const Home = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        fetchGames();
    }, []);

    const fetchGames = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/games');
            setGames(response.data);
        } catch (error) {
            console.error('Error fetching games:', error);
        }
    };

    return (
        <div>
            <h1>Featured Games</h1>
            <HeroSection>
                {games.map((game) => (
                    <HeroCard key={game.id} game={game} />
                ))}
            </HeroSection>
        </div>
    );
};

export default Home;
