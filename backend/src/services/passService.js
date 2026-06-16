// backend/src/services/passService.js

const db = require('../config/db');
const PassRequest = require('../models/PassRequest');
const AuditLog = require('../models/AuditLog');
const { generateQRCode } = require('../utils/qrGenerator');

const createPassRequest = async (userId, passDetails) => {
    const newPassRequest = new PassRequest({
        userId,
        ...passDetails,
        status: 'Pending',
    });

    await newPassRequest.save();
    return newPassRequest;
};

const approvePassRequest = async (requestId) => {
    const passRequest = await PassRequest.findById(requestId);
    if (!passRequest) throw new Error('Pass request not found');

    passRequest.status = 'Approved';
    passRequest.approvedAt = new Date();
    await passRequest.save();

    const qrCode = generateQRCode(passRequest._id);
    return { passRequest, qrCode };
};

const rejectPassRequest = async (requestId) => {
    const passRequest = await PassRequest.findById(requestId);
    if (!passRequest) throw new Error('Pass request not found');

    passRequest.status = 'Rejected';
    await passRequest.save();
    return passRequest;
};

const getPassHistory = async (userId) => {
    return await PassRequest.find({ userId }).sort({ createdAt: -1 });
};

const logAuditAction = async (action, userId) => {
    const auditLog = new AuditLog({
        action,
        userId,
        timestamp: new Date(),
    });
    await auditLog.save();
};

module.exports = {
    createPassRequest,
    approvePassRequest,
    rejectPassRequest,
    getPassHistory,
    logAuditAction,
};