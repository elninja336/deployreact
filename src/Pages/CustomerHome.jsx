import React, { useState, useEffect } from 'react';
import './CustomerHome.css';

const CustomerHome = () => {
  const [availableParking, setAvailableParking] = useState([]);
  const [currentBookings, setCurrentBookings] = useState([]);
  const [userProfile, setUserProfile] = useState({});

  // Fetch data from the backend (mocked for now)
  useEffect(() => {
    // Fetch available parking
    // axios.get('/api/available-parking')
    //   .then(response => setAvailableParking(response.data))
    //   .catch(error => console.error(error));

    // Fetch current bookings
    // axios.get('/api/current-bookings')
    //   .then(response => setCurrentBookings(response.data))
    //   .catch(error => console.error(error));

    // Fetch user profile
    // axios.get('/api/user-profile')
    //   .then(response => setUserProfile(response.data))
    //   .catch(error => console.error(error));

    // Mock Data for now
    setAvailableParking([
      { id: 1, name: 'Parking Lot A', location: 'City Center', price: '$5/hr' },
      { id: 2, name: 'Parking Lot B', location: 'Downtown', price: '$4/hr' },
    ]);

    setCurrentBookings([
      { id: 1, lotName: 'Parking Lot A', date: '2025-01-16', time: '3 hours' },
    ]);

    setUserProfile({
      name: 'Harith Rashid Omar',
      email: 'harith@gmail.com',
      phone: '0777888999',
    });
  }, []);

  return (
    <div className="customer-home-container">
      {/* Header Section */}
      <header className="customer-home-header">
        <h1>Welcome, {userProfile.name}!</h1>
        <p>Your email: {userProfile.email}</p>
        <p>Your phone: {userProfile.phone}</p>
      </header>

      {/* Main Content Sections */}
      <main>
        {/* Available Parking Section */}
        <section className="available-parking-section">
          <h2>Available Parking Lots</h2>
          <div className="parking-lots">
            {availableParking.map((lot) => (
              <div key={lot.id} className="parking-lot-card">
                <h3>{lot.name}</h3>
                <p>{lot.location}</p>
                <p>{lot.price}</p>
                <button className="book-now-button">Book Now</button>
              </div>
            ))}
          </div>
        </section>

        {/* Current Bookings Section */}
        <section className="current-bookings-section">
          <h2>Your Current Bookings</h2>
          {currentBookings.length > 0 ? (
            <div className="current-bookings-list">
              {currentBookings.map((booking) => (
                <div key={booking.id} className="booking-card">
                  <h3>{booking.lotName}</h3>
                  <p>Date: {booking.date}</p>
                  <p>Time: {booking.time}</p>
                  <button className="view-booking-button">View Booking</button>
                </div>
              ))}
            </div>
          ) : (
            <p>No active bookings found. Book a parking lot today!</p>
          )}
        </section>

        {/* Profile Overview Section */}
        <section className="profile-overview-section">
          <h2>Profile Overview</h2>
          <div className="profile-info">
            <p>Name: {userProfile.name}</p>
            <p>Email: {userProfile.email}</p>
            <p>Phone: {userProfile.phone}</p>
            <button className="edit-profile-button">Edit Profile</button>
          </div>
        </section>

        {/* Notifications Section (Optional) */}
        <section className="notifications-section">
          <h2>Notifications</h2>
          <ul>
            <li>Your booking at Parking Lot A is confirmed!</li>
            <li>Reminder: Your parking at Downtown expires in 2 hours.</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default CustomerHome;



// Responsive data


// import React, { useState, useEffect } from 'react';
// import axiosInstance from '../axiosInstance'; // Import Axios instance
// import './CustomerHome.css';

// const CustomerHome = () => {
//   const [availableParking, setAvailableParking] = useState([]);
//   const [currentBookings, setCurrentBookings] = useState([]);
//   const [userProfile, setUserProfile] = useState({});
//   const [loading, setLoading] = useState(true); // Loading state

//   // Fetch data from the backend when the component mounts
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Fetch available parking lots
//         const parkingResponse = await axiosInstance.get('/api/available-parking/');
//         setAvailableParking(parkingResponse.data);

//         // Fetch current bookings
//         const bookingsResponse = await axiosInstance.get('/api/current-bookings/');
//         setCurrentBookings(bookingsResponse.data);

//         // Fetch user profile
//         const profileResponse = await axiosInstance.get('/api/user-profile/');
//         setUserProfile(profileResponse.data);

//         setLoading(false); // Set loading to false after data is fetched
//       } catch (error) {
//         console.error("There was an error fetching the data:", error);
//         setLoading(false); // Set loading to false even if there's an error
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>; // Show loading message while fetching data
//   }

//   return (
//     <div className="customer-home-container">
//       {/* Header Section */}
//       <header className="customer-home-header">
//         <h1>Welcome, {userProfile.name}!</h1>
//         <p>Your email: {userProfile.email}</p>
//         <p>Your phone: {userProfile.phone}</p>
//       </header>

//       {/* Main Content Sections */}
//       <main>
//         {/* Available Parking Section */}
//         <section className="available-parking-section">
//           <h2>Available Parking Lots</h2>
//           <div className="parking-lots">
//             {availableParking.map((lot) => (
//               <div key={lot.id} className="parking-lot-card">
//                 <h3>{lot.name}</h3>
//                 <p>{lot.location}</p>
//                 <p>{lot.price}</p>
//                 <button className="book-now-button">Book Now</button>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Current Bookings Section */}
//         <section className="current-bookings-section">
//           <h2>Your Current Bookings</h2>
//           {currentBookings.length > 0 ? (
//             <div className="current-bookings-list">
//               {currentBookings.map((booking) => (
//                 <div key={booking.id} className="booking-card">
//                   <h3>{booking.lotName}</h3>
//                   <p>Date: {booking.date}</p>
//                   <p>Time: {booking.time}</p>
//                   <button className="view-booking-button">View Booking</button>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p>No active bookings found. Book a parking lot today!</p>
//           )}
//         </section>

//         {/* Profile Overview Section */}
//         <section className="profile-overview-section">
//           <h2>Profile Overview</h2>
//           <div className="profile-info">
//             <p>Name: {userProfile.name}</p>
//             <p>Email: {userProfile.email}</p>
//             <p>Phone: {userProfile.phone}</p>
//             <button className="edit-profile-button">Edit Profile</button>
//           </div>
//         </section>

//         {/* Notifications Section (Optional) */}
//         <section className="notifications-section">
//           <h2>Notifications</h2>
//           <ul>
//             <li>Your booking at Parking Lot A is confirmed!</li>
//             <li>Reminder: Your parking at Downtown expires in 2 hours.</li>
//           </ul>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default CustomerHome;

