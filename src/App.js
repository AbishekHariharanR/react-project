import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import RoomManagement from './components/RoomManagement';
import BookingForm from './components/BookingForm';
import GuestManagement from './components/GuestManagement';
import Login from './components/Login';
import SignUp from './components/SignUp';



const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [bookings, setBookings] = useState([]);
  const [rooms, setRooms] = useState([
    { id: 1, roomNumber: '101', roomType: 'Single', isAvailable: true },
    { id: 2, roomNumber: '102', roomType: 'Double', isAvailable: true },
    { id: 3, roomNumber: '103', roomType: 'Suite', isAvailable: true },
  ]);

  return (
    <Router>
      <div className="App">
        <h1>Hotel Management System</h1>

        {/* Navigation Links */}
        {isAuthenticated ? (
          <nav>
            <Link to="/dashboard">Dashboard</Link> | 
            <Link to="/room-management">Room Management</Link> | 
            <Link to="/guest-management">Guest Management</Link> | 
            <Link to="/booking-form">Booking Form</Link>
          </nav>
        ) : (
          <nav>
            <Link to="/login">Login</Link> | 
            <Link to="/signup">Sign Up</Link>
          </nav>
        )}

        {/* Routes Setup */}
        <Routes>
          <Route path="/login" element={<Login setAuthenticated={setIsAuthenticated} />} />
          <Route path="/signup" element={<SignUp setAuthenticated={setIsAuthenticated} />} />
          
          {/* Protected Routes for authenticated users */}
          <Route path="/dashboard" element={<Dashboard rooms={rooms} bookings={bookings} />} />
          <Route path="/room-management" element={<RoomManagement rooms={rooms} setRooms={setRooms} />} />
          <Route path="/booking-form" element={<BookingForm rooms={rooms} bookings={bookings} setBookings={setBookings} setRooms={setRooms} />} />
          <Route path="/guest-management" element={<GuestManagement rooms={rooms} setRooms={setRooms} />} />

          {/* Redirect to login if no valid route */}
          <Route path="/" element={<Login setAuthenticated={setIsAuthenticated} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;