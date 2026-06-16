Here are the contents for the file /AccessFlow/AccessFlow/backend/src/routes/auditRoutes.js:

const express = require('express');
const router = express.Router();
const auditController = require('../controllers/auditController');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

// Route to get all audit logs
router.get('/', authMiddleware.verifyToken, roleMiddleware.isAdmin, auditController.getAllAuditLogs);

// Route to get a specific audit log by ID
router.get('/:id', authMiddleware.verifyToken, roleMiddleware.isAdmin, auditController.getAuditLogById);

// Route to create a new audit log entry
router.post('/', authMiddleware.verifyToken, roleMiddleware.isAdmin, auditController.createAuditLog);

module.exports = router; 

Please confirm if you would like to proceed to the next phase, which is generating the backend structure with routes, controllers, middleware, services, and models.