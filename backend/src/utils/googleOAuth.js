Here are the contents for the file /AccessFlow/AccessFlow/backend/src/utils/googleOAuth.js:

const { OAuth2Client } = require('google-auth-library');
const User = require('../models/User');
const jwt = require('../utils/jwt');

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

async function verifyGoogleToken(token) {
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();
    return payload;
}

async function findOrCreateUser(profile) {
    let user = await User.findOne({ where: { email: profile.email } });
    if (!user) {
        user = await User.create({
            username: profile.name,
            email: profile.email,
            role: 'Student', // Default role
        });
    }
    return user;
}

async function googleOAuthLogin(token) {
    const profile = await verifyGoogleToken(token);
    const user = await findOrCreateUser(profile);
    const accessToken = jwt.generateToken(user);
    return { user, accessToken };
}

module.exports = {
    googleOAuthLogin,
}; 

Please confirm if you would like to proceed to the next phase, which is generating the backend structure with routes, controllers, middleware, services, and models.