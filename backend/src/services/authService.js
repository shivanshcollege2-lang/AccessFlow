Here are the contents for the file: /AccessFlow/AccessFlow/backend/src/services/authService.js

import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import { OAuth2Client } from 'google-auth-library';

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export const registerUser = async (userData) => {
    const { username, password, role } = userData;
    const newUser = new User({ username, password, role });
    await newUser.save();
    return newUser;
};

export const loginUser = async (username, password) => {
    const user = await User.findOne({ username });
    if (!user || !(await user.comparePassword(password))) {
        throw new Error('Invalid credentials');
    }
    const token = generateToken(user._id);
    return { user, token };
};

export const generateToken = (userId) => {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

export const verifyToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET);
};

export const googleAuth = async (token) => {
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();
    const user = await User.findOne({ email: payload.email });
    if (!user) {
        const newUser = await registerUser({ username: payload.email, password: 'defaultPassword', role: 'Student' });
        return { user: newUser, token: generateToken(newUser._id) };
    }
    return { user, token: generateToken(user._id) };
};

Please confirm if you would like to proceed to the next phase, which is generating the backend structure with routes, controllers, middleware, services, and models.