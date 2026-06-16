Here are the contents for the file: /AccessFlow/AccessFlow/backend/src/routes/passRoutes.js

const express = require('express');
const router = express.Router();
const passController = require('../controllers/passController');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

// Route to create a new pass request
router.post('/', authMiddleware.verifyToken, passController.createPassRequest);

// Route to approve a pass request
router.patch('/:id/approve', authMiddleware.verifyToken, roleMiddleware.isAdmin, passController.approvePassRequest);

// Route to reject a pass request
router.patch('/:id/reject', authMiddleware.verifyToken, roleMiddleware.isAdmin, passController.rejectPassRequest);

// Route to get pass request history for a user
router.get('/history', authMiddleware.verifyToken, passController.getPassHistory);

// Route to get all pass requests (admin only)
router.get('/', authMiddleware.verifyToken, roleMiddleware.isAdmin, passController.getAllPassRequests);

// Route to get a specific pass request by ID
router.get('/:id', authMiddleware.verifyToken, passController.getPassRequestById);

module.exports = router; 

Please confirm if you would like to proceed to the next phase, which is generating the backend structure with routes, controllers, middleware, services, and models.