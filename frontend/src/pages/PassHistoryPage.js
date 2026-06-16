Here are the contents for the file /AccessFlow/AccessFlow/frontend/src/pages/PassHistoryPage.js:

import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import api from '../services/api';
import './PassHistoryPage.css';

const PassHistoryPage = () => {
    const { user } = useContext(AuthContext);
    const [passHistory, setPassHistory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPassHistory = async () => {
            try {
                const response = await api.get(`/passes/history/${user.id}`);
                setPassHistory(response.data);
            } catch (err) {
                setError('Failed to fetch pass history');
            } finally {
                setLoading(false);
            }
        };

        fetchPassHistory();
    }, [user.id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="pass-history">
            <h1>Pass History</h1>
            <table>
                <thead>
                    <tr>
                        <th>Pass ID</th>
                        <th>Status</th>
                        <th>Created At</th>
                        <th>Updated At</th>
                    </tr>
                </thead>
                <tbody>
                    {passHistory.map((pass) => (
                        <tr key={pass.id}>
                            <td>{pass.id}</td>
                            <td>{pass.status}</td>
                            <td>{new Date(pass.createdAt).toLocaleString()}</td>
                            <td>{new Date(pass.updatedAt).toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PassHistoryPage;

Please confirm if you would like to proceed to the next phase, which is generating the backend structure with routes, controllers, middleware, services, and models.