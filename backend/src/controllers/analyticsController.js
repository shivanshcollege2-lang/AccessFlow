Here are the contents for the file: /AccessFlow/AccessFlow/backend/src/controllers/analyticsController.js

import { PassRequest } from '../models/PassRequest.js';
import { User } from '../models/User.js';

export const getAnalyticsData = async (req, res) => {
    try {
        const totalPassRequests = await PassRequest.count();
        const totalApproved = await PassRequest.count({ where: { status: 'approved' } });
        const totalRejected = await PassRequest.count({ where: { status: 'rejected' } });
        const totalStudents = await User.count({ where: { role: 'student' } });

        const analyticsData = {
            totalPassRequests,
            totalApproved,
            totalRejected,
            totalStudents,
        };

        res.status(200).json(analyticsData);
    } catch (error) {
        console.error('Error fetching analytics data:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const getPassRequestTrends = async (req, res) => {
    try {
        const trends = await PassRequest.findAll({
            attributes: [
                [sequelize.fn('DATE', sequelize.col('createdAt')), 'date'],
                [sequelize.fn('COUNT', sequelize.col('id')), 'count'],
            ],
            group: ['date'],
            order: [['date', 'ASC']],
        });

        res.status(200).json(trends);
    } catch (error) {
        console.error('Error fetching pass request trends:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

Please confirm if you would like to proceed to the next phase, which is generating the backend structure with routes, controllers, middleware, services, and models.