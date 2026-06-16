import React, { useEffect, useState } from 'react';
import { getAnalyticsData } from '../services/api';
import './DashboardPage.css';

const DashboardPage = () => {
    const [analytics, setAnalytics] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAnalytics = async () => {
            try {
                const data = await getAnalyticsData();
                setAnalytics(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchAnalytics();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            <div className="analytics">
                <h2>Analytics Overview</h2>
                <p>Total Pass Requests: {analytics.totalPassRequests}</p>
                <p>Approved Passes: {analytics.approvedPasses}</p>
                <p>Rejected Passes: {analytics.rejectedPasses}</p>
                <p>Pending Passes: {analytics.pendingPasses}</p>
            </div>
        </div>
    );
};

export default DashboardPage;