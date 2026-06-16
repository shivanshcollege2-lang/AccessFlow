Here are the contents for the file: /AccessFlow/AccessFlow/backend/src/controllers/notificationController.js

const Notification = require('../models/Notification');
const notificationService = require('../services/notificationService');

// Create a new notification
exports.createNotification = async (req, res) => {
    try {
        const { userId, message } = req.body;
        const notification = await notificationService.createNotification(userId, message);
        res.status(201).json(notification);
    } catch (error) {
        res.status(500).json({ message: 'Error creating notification', error });
    }
};

// Get all notifications for a user
exports.getUserNotifications = async (req, res) => {
    try {
        const { userId } = req.params;
        const notifications = await notificationService.getUserNotifications(userId);
        res.status(200).json(notifications);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching notifications', error });
    }
};

// Mark a notification as read
exports.markAsRead = async (req, res) => {
    try {
        const { notificationId } = req.params;
        const updatedNotification = await notificationService.markAsRead(notificationId);
        res.status(200).json(updatedNotification);
    } catch (error) {
        res.status(500).json({ message: 'Error marking notification as read', error });
    }
};

// Delete a notification
exports.deleteNotification = async (req, res) => {
    try {
        const { notificationId } = req.params;
        await notificationService.deleteNotification(notificationId);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error deleting notification', error });
    }
};

Please confirm if you would like to proceed to the next phase, which is generating the backend structure with routes, controllers, middleware, services, and models.