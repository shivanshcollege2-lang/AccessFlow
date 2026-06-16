Here are the contents for the file /AccessFlow/AccessFlow/backend/src/controllers/authController.js:

import User from '../models/User.js';
import { generateToken } from '../utils/jwt.js';
import { OAuth2Client } from 'google-auth-library';

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// User registration
export const registerUser = async (req, res) => {
    const { username, password, role } = req.body;
    try {
        const existingUser = await User.findOne({ where: { username } });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }
        const newUser = await User.create({ username, password, role });
        const token = generateToken(newUser.id);
        res.status(201).json({ token, user: newUser });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// User login
export const loginUser = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ where: { username } });
        if (!user || !(await user.validatePassword(password))) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const token = generateToken(user.id);
        res.status(200).json({ token, user });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Google OAuth authentication
export const googleAuth = async (req, res) => {
    const { tokenId } = req.body;
    try {
        const ticket = await client.verifyIdToken({
            idToken: tokenId,
            audience: process.env.GOOGLE_CLIENT_ID,
        });
        const { email, name } = ticket.getPayload();
        let user = await User.findOne({ where: { username: email } });
        if (!user) {
            user = await User.create({ username: email, password: 'google-oauth', role: 'Student' });
        }
        const token = generateToken(user.id);
        res.status(200).json({ token, user });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

Please confirm if you would like to proceed to the next phase, which is generating the backend structure with routes, controllers, middleware, services, and models.