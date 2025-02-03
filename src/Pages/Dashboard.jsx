import React, { useState, useEffect } from 'react';
import axiosInstance from '../axiosInstance'; 
import './Dashboard.css'; 
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [availableSlots, setAvailableSlots] = useState(0);
  const [occupiedSlots, setOccupiedSlots] = useState(0);
  const [reservedSlots, setReservedSlots] = useState(0);
  const [occupancyRate, setOccupancyRate] = useState(0);
  const [loading, setLoading] = useState(true); // Loading state

  // Fetching data from the backend API when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetching parking data
        const response = await axiosInstance.get('/parklots');
        const { available, occupied, reserved, occupancyRate } = response.data;

        // Setting the state with the fetched data
        setAvailableSlots(available);
        setOccupiedSlots(occupied);
        setReservedSlots(reserved);
        setOccupancyRate(occupancyRate);
        setLoading(false); // Setting loading to false after data is fetched
      } catch (error) {
        console.error("There was an error fetching the data:", error);
        setLoading(false); // Set loading to false even if there's an error
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading message while fetching data
  }

  return (
    <div>
      <header className="header">
        <h1>Welcome to Admin Dashboard</h1>
      </header>
      <nav className="nav">
      <Link to="/dashboard" >
            Dashboard
      </Link>
      <Link to="/manage-reservations" >
      Manage Reservations
      </Link>
      <Link to="/manage-slots" >
      Manage Slots
      </Link>
      <Link to="/manage-customers" >
      Manage Customers
      </Link>
      <Link to="/manage-payments" >
      Manage Payments
      </Link>
      <Link to="/reports" >
      Reports
      </Link>
      <Link to="/logout" lassName="logout-link">
      Logout
      </Link>
        {/* <a href="/dashboard">Dashboard</a>
        <a href="/manage-reservations">Manage Reservations</a>
        <a href="/manage-slots">Manage Slots</a>
        <a href="manage-customers">Manage Customers</a>
        <a href="/manage-payments">Manage Payments</a>
        <a href="/reports">Reports</a>
        <a href="/logout" className="logout-link">Logout</a> */}
      </nav>
      <div className="container">
        <h2>Welcome, Admin</h2>
        <p>Here's an overview of the parking system.</p>
        <div className="grid">
          <div className="card">
            <h2>{availableSlots}</h2>
            <p>Available Slots</p>
          </div>
          <div className="card">
            <h2>{occupiedSlots}</h2>
            <p>Occupied Slots</p>
          </div>
          <div className="card">
            <h2>{reservedSlots}</h2>
            <p>Reserved Slots</p>
          </div>
          <div className="card">
            <h2>{occupancyRate}%</h2>
            <p>Occupancy Rate</p>
          </div>
        </div>
      </div>
      <footer className="footer">
        &copy; 2025 ParkZone. All rights reserved.
      </footer>
    </div>
  );
};

export default Dashboard;
