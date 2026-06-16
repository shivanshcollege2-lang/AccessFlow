Here are the contents for the file /AccessFlow/AccessFlow/backend/src/routes/analyticsRoutes.js:

const express = require('express');
const router = express.Router();
const analyticsController = require('../controllers/analyticsController');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

// Route to get analytics data
router.get('/data', authMiddleware.verifyToken, roleMiddleware.isAdmin, analyticsController.getAnalyticsData);

// Route to get user activity analytics
router.get('/user-activity', authMiddleware.verifyToken, roleMiddleware.isAdmin, analyticsController.getUserActivityAnalytics);

module.exports = router; 

Please confirm if you would like to proceed to the next phase, which is generating the backend structure with routes, controllers, middleware, services, and models.