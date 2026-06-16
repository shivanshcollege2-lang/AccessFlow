Here are the contents for the file /AccessFlow/AccessFlow/backend/src/utils/qrGenerator.js:

const QRCode = require('qrcode');

const generateQRCode = async (data) => {
    try {
        const qrCodeDataUrl = await QRCode.toDataURL(data);
        return qrCodeDataUrl;
    } catch (error) {
        throw new Error('Error generating QR code: ' + error.message);
    }
};

const verifyQRCode = async (dataUrl) => {
    // Logic to verify the QR code can be implemented here
    // This could involve decoding the QR code and checking against the database
    return true; // Placeholder for actual verification logic
};

module.exports = {
    generateQRCode,
    verifyQRCode,
}; 

Please confirm if you would like to proceed to the next phase, which is generating the backend structure with routes, controllers, middleware, services, and models.