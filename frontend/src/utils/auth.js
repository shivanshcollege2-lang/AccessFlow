Here are the contents for the file /AccessFlow/AccessFlow/frontend/src/utils/auth.js:

import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/auth/';

export const register = async (username, password) => {
    const response = await axios.post(`${API_URL}register`, { username, password });
    return response.data;
};

export const login = async (username, password) => {
    const response = await axios.post(`${API_URL}login`, { username, password });
    if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
};

export const logout = () => {
    localStorage.removeItem('user');
};

export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
};

export const isAuthenticated = () => {
    const user = getCurrentUser();
    return user && user.token ? true : false;
};

export const googleLogin = async (tokenId) => {
    const response = await axios.post(`${API_URL}google`, { id_token: tokenId });
    if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
};

Please confirm if you would like to proceed to the next phase, which is generating the backend structure with routes, controllers, middleware, services, and models.