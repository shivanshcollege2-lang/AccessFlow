const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notificationController');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

// Route to create a notification
router.post('/', authMiddleware.verifyToken, roleMiddleware.isAdmin, notificationController.createNotification);

// Route to get all notifications
router.get('/', authMiddleware.verifyToken, notificationController.getAllNotifications);

// Route to get a specific notification by ID
router.get('/:id', authMiddleware.verifyToken, notificationController.getNotificationById);

// Route to update a notification
router.put('/:id', authMiddleware.verifyToken, roleMiddleware.isAdmin, notificationController.updateNotification);

// Route to delete a notification
router.delete('/:id', authMiddleware.verifyToken, roleMiddleware.isAdmin, notificationController.deleteNotification);

module.exports = router;