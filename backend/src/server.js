const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const cors = require('cors');

// Load environment variables
dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
const db = require('./config/db');
db.connect();

// Import routes
const authRoutes = require('./routes/authRoutes');
const passRoutes = require('./routes/passRoutes');
const userRoutes = require('./routes/userRoutes');
const analyticsRoutes = require('./routes/analyticsRoutes');
const notificationRoutes = require('./routes/notificationRoutes');
const auditRoutes = require('./routes/auditRoutes');

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/passes', passRoutes);
app.use('/api/users', userRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/audits', auditRoutes);

// Error handling middleware
const errorMiddleware = require('./middlewares/errorMiddleware');
app.use(errorMiddleware);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});