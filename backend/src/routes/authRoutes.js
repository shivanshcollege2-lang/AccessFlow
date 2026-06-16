Here are the contents for the file /AccessFlow/AccessFlow/backend/src/routes/authRoutes.js:

const express = require('express');
const { register, login, googleOAuth } = require('../controllers/authController');
const { validateRegister, validateLogin } = require('../middlewares/validateMiddleware');

const router = express.Router();

// User registration route
router.post('/register', validateRegister, register);

// User login route
router.post('/login', validateLogin, login);

// Google OAuth route
router.get('/google', googleOAuth);

module.exports = router; 

Please confirm if you would like to proceed to the next phase, which is generating the backend structure with routes, controllers, middleware, services, and models.