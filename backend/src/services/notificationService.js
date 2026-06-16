Here are the contents for the file: /AccessFlow/AccessFlow/backend/src/services/notificationService.js

import Notification from '../models/Notification';
import { sendEmail } from '../utils/emailService'; // Assuming there's an email service for sending notifications

export const createNotification = async (userId, message) => {
    try {
        const notification = await Notification.create({ userId, message });
        await sendEmail(userId, message); // Send email notification
        return notification;
    } catch (error) {
        throw new Error('Error creating notification: ' + error.message);
    }
};

export const getNotificationsByUserId = async (userId) => {
    try {
        const notifications = await Notification.findAll({ where: { userId } });
        return notifications;
    } catch (error) {
        throw new Error('Error fetching notifications: ' + error.message);
    }
};

export const markNotificationAsRead = async (notificationId) => {
    try {
        const notification = await Notification.findByPk(notificationId);
        if (!notification) {
            throw new Error('Notification not found');
        }
        notification.read = true;
        await notification.save();
        return notification;
    } catch (error) {
        throw new Error('Error marking notification as read: ' + error.message);
    }
};

export const deleteNotification = async (notificationId) => {
    try {
        const notification = await Notification.findByPk(notificationId);
        if (!notification) {
            throw new Error('Notification not found');
        }
        await notification.destroy();
        return { message: 'Notification deleted successfully' };
    } catch (error) {
        throw new Error('Error deleting notification: ' + error.message);
    }
};