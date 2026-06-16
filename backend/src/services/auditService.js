// backend/src/services/auditService.js

const db = require('../config/db');
const AuditLog = require('../models/AuditLog');

// Function to log an action
const logAction = async (userId, actionType, details) => {
    try {
        const auditLog = new AuditLog({
            userId,
            actionType,
            details,
            timestamp: new Date()
        });
        await auditLog.save();
    } catch (error) {
        console.error('Error logging action:', error);
        throw new Error('Could not log action');
    }
};

// Function to retrieve audit logs
const getAuditLogs = async (filters = {}) => {
    try {
        const logs = await AuditLog.find(filters).sort({ timestamp: -1 });
        return logs;
    } catch (error) {
        console.error('Error retrieving audit logs:', error);
        throw new Error('Could not retrieve audit logs');
    }
};

module.exports = {
    logAction,
    getAuditLogs
};