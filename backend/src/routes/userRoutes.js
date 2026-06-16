Here are the contents for the file /AccessFlow/AccessFlow/backend/src/routes/userRoutes.js:

import express from 'express';
import { registerUser, getUser, updateUser } from '../controllers/userController';
import { authMiddleware, roleMiddleware } from '../middlewares';

const router = express.Router();

// Route for user registration
router.post('/register', registerUser);

// Route for getting user details
router.get('/:id', authMiddleware, getUser);

// Route for updating user details
router.put('/:id', authMiddleware, roleMiddleware(['Administrator']), updateUser);

export default router; 

Please confirm if you would like to proceed to the next phase, which is generating the backend structure with routes, controllers, middleware, services, and models.