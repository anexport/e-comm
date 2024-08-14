import React, { useState } from 'react';

const UserAuth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegister, setIsRegister] = useState(false);

    const handleAuth = () => {
        const url = isRegister ? 'http://localhost:5000/api/users/register' : 'http://localhost:5000/api/users/login';
        const body = { email, password };

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                console.error('Authentication error:', data.error);
            } else {
                console.log('User authenticated:', data);
                // Handle successful authentication (e.g., store token, redirect)
            }
        })
        .catch(error => console.error('Error:', error));
    };

    return (
        <div>
            <h1>{isRegister ? 'Register' : 'Login'}</h1>
            <form onSubmit={e => { e.preventDefault(); handleAuth(); }}>
                <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <button type="submit">{isRegister ? 'Register' : 'Login'}</button>
            </form>
            <button onClick={() => setIsRegister(!isRegister)}>
                {isRegister ? 'Already have an account? Login' : 'Need an account? Register'}
            </button>
        </div>
    );
};

export default UserAuth;
