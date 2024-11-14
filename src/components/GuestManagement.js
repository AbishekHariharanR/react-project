import React from 'react';

const GuestManagement = ({ rooms, setRooms }) => {
  const checkOut = (roomId) => {
    setRooms(
      rooms.map((room) =>
        room.id === roomId ? { ...room, isAvailable: true } : room
      )
    );
  };

  return (
    <div style={styles.container}>
      <h3>Guest Management</h3>
      <h4>Currently Booked Rooms</h4>
      <ul style={styles.list}>
        {rooms
          .filter((room) => !room.isAvailable)
          .map((room) => (
            <li key={room.id} style={styles.listItem}>
              Room {room.roomNumber} - {room.roomType}{' '}
              <button onClick={() => checkOut(room.id)} style={styles.button}>
                Check-out
              </button>
            </li>
          ))}
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
    marginBottom: '15px',
  },
  button: {
    padding: '5px 15px',
    backgroundColor: '#FF6347',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default GuestManagement;