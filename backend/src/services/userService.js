// backend/src/services/userService.js

const db = require('../config/db');
const User = require('../models/User');

const userService = {
    register: async (userData) => {
        const { username, password, role } = userData;
        const newUser = new User({ username, password, role });
        return await newUser.save();
    },

    getUserById: async (userId) => {
        return await User.findById(userId);
    },

    getAllUsers: async () => {
        return await User.find();
    },

    updateUser: async (userId, updateData) => {
        return await User.findByIdAndUpdate(userId, updateData, { new: true });
    },

    deleteUser: async (userId) => {
        return await User.findByIdAndDelete(userId);
    }
};

module.exports = userService;