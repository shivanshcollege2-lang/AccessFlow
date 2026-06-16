Here are the contents for the file /AccessFlow/AccessFlow/backend/src/models/User.js:

import { DataTypes } from 'sequelize';
import db from '../config/db.js';

const User = db.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.ENUM('Student', 'Security Guard', 'Administrator'),
        allowNull: false,
    },
    googleId: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
    },
}, {
    timestamps: true,
});

// Method to find user by username
User.findByUsername = async function(username) {
    return await this.findOne({ where: { username } });
};

// Method to create a new user
User.createUser = async function(userData) {
    return await this.create(userData);
};

// Method to validate user password
User.prototype.validatePassword = function(password) {
    // Implement password validation logic here (e.g., using bcrypt)
};

// Export the User model
export default User;

Please confirm if you would like to proceed to the next phase, which is generating the backend structure with routes, controllers, middleware, services, and models.