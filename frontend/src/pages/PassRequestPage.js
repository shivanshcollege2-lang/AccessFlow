import React, { useState, useEffect } from 'react';
import { createPassRequest } from '../services/api';
import './PassRequestPage.css';

const PassRequestPage = () => {
    const [requestDetails, setRequestDetails] = useState({
        reason: '',
        startDate: '',
        endDate: '',
    });
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRequestDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await createPassRequest(requestDetails);
            if (response.status === 200) {
                setSuccessMessage('Pass request created successfully!');
                setRequestDetails({ reason: '', startDate: '', endDate: '' });
            }
        } catch (error) {
            setErrorMessage('Failed to create pass request. Please try again.');
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setSuccessMessage('');
            setErrorMessage('');
        }, 5000);
        return () => clearTimeout(timer);
    }, [successMessage, errorMessage]);

    return (
        <div className="pass-request-page">
            <h1>Create Pass Request</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="reason">Reason:</label>
                    <input
                        type="text"
                        id="reason"
                        name="reason"
                        value={requestDetails.reason}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="startDate">Start Date:</label>
                    <input
                        type="date"
                        id="startDate"
                        name="startDate"
                        value={requestDetails.startDate}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="endDate">End Date:</label>
                    <input
                        type="date"
                        id="endDate"
                        name="endDate"
                        value={requestDetails.endDate}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Submit Request</button>
            </form>
            {successMessage && <p className="success-message">{successMessage}</p>}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
    );
};

export default PassRequestPage;