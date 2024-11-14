import React, { useState } from 'react';

const BookingForm = ({ rooms, bookings, setBookings, setRooms }) => {
  const [guestName, setGuestName] = useState('');
  const [roomId, setRoomId] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');

  const bookRoom = () => {
    const room = rooms.find((room) => room.id === parseInt(roomId));
    if (room && room.isAvailable) {
      const newBooking = { guestName, roomId, checkInDate, checkOutDate };
      setBookings([...bookings, newBooking]);
      setRooms(
        rooms.map((r) =>
          r.id === parseInt(roomId) ? { ...r, isAvailable: false } : r
        )
      );
      setGuestName('');
      setRoomId('');
      setCheckInDate('');
      setCheckOutDate('');
    } else {
      alert('Room is not available.');
    }
  };

  return (
    <div style={styles.container}>
      <h3>Booking Form</h3>
      <input
        type="text"
        placeholder="Guest Name"
        value={guestName}
        onChange={(e) => setGuestName(e.target.value)}
        style={styles.input}
      />
      <input
        type="number"
        placeholder="Room ID"
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)}
        style={styles.input}
      />
      <input
        type="date"
        value={checkInDate}
        onChange={(e) => setCheckInDate(e.target.value)}
        style={styles.input}
      />
      <input
        type="date"
        value={checkOutDate}
        onChange={(e) => setCheckOutDate(e.target.value)}
        style={styles.input}
      />
      <button onClick={bookRoom} style={styles.button}>Book Room</button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
  },
  input: {
    margin: '10px',
    padding: '8px',
    width: '250px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default BookingForm;