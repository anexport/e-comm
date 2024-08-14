import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const AdminPageWrapper = styled.div`
    padding: 20px;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
`;

const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin-bottom: 20px;

    input, textarea {
        margin-bottom: 10px;
        padding: 10px;
        border-radius: 5px;
        border: 1px solid ${({ theme }) => theme.colors.primary};
        background-color: ${({ theme }) => theme.colors.secondary};
        color: ${({ theme }) => theme.colors.text};
    }

    button {
        align-self: flex-start;
    }
`;

const GameList = styled.div`
    margin-top: 20px;
`;

const GameItem = styled.div`
    background-color: ${({ theme }) => theme.colors.secondary};
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const AdminPage = () => {
    const [games, setGames] = useState([]);
    const [form, setForm] = useState({
        name: '',
        description: '',
        price: '',
        image_url: '',
    });

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

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/games', form);
            fetchGames();
            setForm({ name: '', description: '', price: '', image_url: '' });
        } catch (error) {
            console.error('Error adding game:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/games/${id}`);
            fetchGames();
        } catch (error) {
            console.error('Error deleting game:', error);
        }
    };

    return (
        <AdminPageWrapper>
            <h1>Admin Panel</h1>
            <FormWrapper onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Game Name"
                    required
                />
                <textarea
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    placeholder="Game Description"
                    required
                />
                <input
                    type="number"
                    name="price"
                    value={form.price}
                    onChange={handleChange}
                    placeholder="Game Price"
                    required
                />
                <input
                    type="text"
                    name="image_url"
                    value={form.image_url}
                    onChange={handleChange}
                    placeholder="Image URL"
                />
                <button type="submit">Add Game</button>
            </FormWrapper>

            <GameList>
                {games.map(game => (
                    <GameItem key={game.id}>
                        <div>
                            <h2>{game.name}</h2>
                            <p>{game.description}</p>
                            <p>${game.price}</p>
                        </div>
                        <button onClick={() => handleDelete(game.id)}>Delete</button>
                    </GameItem>
                ))}
            </GameList>
        </AdminPageWrapper>
    );
};

export default AdminPage;
