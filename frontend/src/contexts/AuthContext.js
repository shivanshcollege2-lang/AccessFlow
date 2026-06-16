Here are the contents for the file /AccessFlow/AccessFlow/frontend/src/contexts/AuthContext.js:

import React, { createContext, useState, useEffect } from 'react';
import { getCurrentUser, login, logout } from '../utils/auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const currentUser = getCurrentUser();
        if (currentUser) {
            setUser(currentUser);
        }
        setLoading(false);
    }, []);

    const handleLogin = async (credentials) => {
        const loggedInUser = await login(credentials);
        setUser(loggedInUser);
    };

    const handleLogout = () => {
        logout();
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, loading, handleLogin, handleLogout }}>
            {children}
        </AuthContext.Provider>
    );
}; 

Please confirm if you would like to proceed to the next phase, which is generating the backend structure with routes, controllers, middleware, services, and models.