Here are the contents for the file /AccessFlow/AccessFlow/frontend/src/pages/LoginPage.js:

import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { login } from '../services/api';
import './LoginPage.css';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { setAuthTokens } = useContext(AuthContext);
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await login({ email, password });
            setAuthTokens(response.data.tokens);
            history.push('/dashboard');
        } catch (err) {
            setError('Invalid email or password');
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            <div>
                <p>Or login with:</p>
                <button onClick={() => window.open('/auth/google', '_self')}>Google</button>
            </div>
        </div>
    );
};

export default LoginPage;

Please confirm if you would like to proceed to the next phase, which is generating the backend structure with routes, controllers, middleware, services, and models.