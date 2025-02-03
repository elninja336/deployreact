import React, { useState, useEffect } from 'react';
import './MyAccount.css';
import { Link } from 'react-router-dom';
import axiosInstance from '../axiosInstance';

const MyAccount = () => {
  const customerId = 2; // Simulating customer ID
  const [accountDetails, setAccountDetails] = useState(null); // To store fetched data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch customer details
  useEffect(() => {
    const fetchAccountDetails = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get(`/customers/${customerId}`);
        setAccountDetails(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching customer details:', err);
        setError('Failed to load account details. Please try again.');
        setLoading(false);
      }
    };

    fetchAccountDetails();
  }, [customerId]);

  if (loading) {
    return <p>Loading account details...</p>;
  }

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  return (
    <div>
      <header className="header">
        <h1>My Account</h1>
      </header>
      {accountDetails && (
        <div className="account-container">
          <div className="account-info">
            <h2>Account Details</h2>
            <p><strong>Customer ID:</strong> {accountDetails.id}</p>
            <p><strong>Name:</strong> {accountDetails.name}</p>
            <p><strong>Email:</strong> {accountDetails.email}</p>
            <p><strong>Phone:</strong> {accountDetails.phone}</p>
            <p><strong>Residence:</strong> {accountDetails.residence}</p>
    
          </div>
          <div className="parking-history">
            <h2>Parking History</h2>
            <ul>
              {accountDetails.parkingHistory && accountDetails.parkingHistory.length > 0 ? (
                accountDetails.parkingHistory.map((entry) => (
                  <li key={entry.id}>
                    {entry.date} - Slot: {entry.slot}, Price: {entry.price}
                  </li>
                ))
              ) : (
                <li>No parking history available.</li>
              )}
            </ul>
          </div>
        </div>
      )}
      <Link to="/profile" className="action-button" id="btn">
        Edit Personal Details
      </Link>
    </div>
  );
};

export default MyAccount;
