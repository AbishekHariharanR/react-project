import React from 'react';

const Dashboard = ({ rooms, bookings }) => {
  const availableRooms = rooms.filter(room => room.isAvailable);
  const bookedRooms = rooms.filter(room => !room.isAvailable);

  return (
    <div style={styles.container}>
      <h2>Hotel Management Dashboard</h2>
      <h3>Available Rooms: {availableRooms.length}</h3>
      <h3>Booked Rooms: {bookedRooms.length}</h3>
      
      <h3>Bookings</h3>
      <ul style={styles.list}>
        {bookings.length > 0 ? (
          bookings.map((booking, index) => (
            <li key={index} style={styles.listItem}>
              {booking.guestName} - Room {booking.roomId} (Check-in: {booking.checkInDate} | Check-out: {booking.checkOutDate})
            </li>
          ))
        ) : (
          <li>No current bookings.</li>
        )}
      </ul>
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
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  listItem: {
    marginBottom: '10px',
  },
};

export default Dashboard;