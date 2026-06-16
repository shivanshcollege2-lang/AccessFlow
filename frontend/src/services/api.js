Here are the contents for the file /AccessFlow/AccessFlow/frontend/src/services/api.js:

import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const apiClient = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Authentication
export const registerUser = async (userData) => {
    const response = await apiClient.post('/auth/register', userData);
    return response.data;
};

export const loginUser = async (credentials) => {
    const response = await apiClient.post('/auth/login', credentials);
    return response.data;
};

export const googleLogin = async (token) => {
    const response = await apiClient.post('/auth/google', { idToken: token });
    return response.data;
};

// Pass Requests
export const createPassRequest = async (passData, token) => {
    const response = await apiClient.post('/pass', passData, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
};

export const getPassHistory = async (token) => {
    const response = await apiClient.get('/pass/history', {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
};

// Notifications
export const getNotifications = async (token) => {
    const response = await apiClient.get('/notifications', {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
};

// Analytics
export const getAnalyticsData = async (token) => {
    const response = await apiClient.get('/analytics', {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
};

// QR Code Verification
export const verifyQRCode = async (qrData, token) => {
    const response = await apiClient.post('/qr/verify', qrData, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
};

export default {
    registerUser,
    loginUser,
    googleLogin,
    createPassRequest,
    getPassHistory,
    getNotifications,
    getAnalyticsData,
    verifyQRCode,
}; 

Please confirm if you would like to proceed to the next phase, which is generating the backend structure with routes, controllers, middleware, services, and models.