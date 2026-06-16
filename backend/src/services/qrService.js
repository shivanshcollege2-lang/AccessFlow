const QRCode = require('qrcode');
const { PassRequest } = require('../models/PassRequest');

// Function to generate a QR code for an approved pass
const generateQRCode = async (passId) => {
    try {
        const pass = await PassRequest.findByPk(passId);
        if (!pass || pass.status !== 'approved') {
            throw new Error('Pass not found or not approved');
        }
        const qrData = JSON.stringify({ passId: pass.id, userId: pass.userId });
        const qrCode = await QRCode.toDataURL(qrData);
        return qrCode;
    } catch (error) {
        throw new Error(`Error generating QR code: ${error.message}`);
    }
};

// Function to verify a QR code
const verifyQRCode = async (qrData) => {
    try {
        const { passId } = JSON.parse(qrData);
        const pass = await PassRequest.findByPk(passId);
        if (!pass || pass.status !== 'approved') {
            return { valid: false, message: 'Invalid or unapproved pass' };
        }
        return { valid: true, pass };
    } catch (error) {
        return { valid: false, message: `Error verifying QR code: ${error.message}` };
    }
};

module.exports = {
    generateQRCode,
    verifyQRCode,
};