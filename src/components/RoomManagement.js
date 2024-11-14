import React, { useState } from 'react';

const RoomManagement = ({ rooms, setRooms }) => {
  const [roomNumber, setRoomNumber] = useState('');
  const [roomType, setRoomType] = useState('');

  const addRoom = () => {
    const newRoom = {
      id: rooms.length + 1,
      roomNumber,
      roomType,
      isAvailable: true,
    };
    setRooms([...rooms, newRoom]);
    setRoomNumber('');
    setRoomType('');
  };

  return (
    <div style={styles.container}>
      <h3>Manage Rooms</h3>
      <input
        type="text"
        placeholder="Room Number"
        value={roomNumber}
        onChange={(e) => setRoomNumber(e.target.value)}
        style={styles.input}
      />
      <input
        type="text"
        placeholder="Room Type"
        value={roomType}
        onChange={(e) => setRoomType(e.target.value)}
        style={styles.input}
      />
      <button onClick={addRoom} style={styles.button}>Add Room</button>

      <h4>Rooms List</h4>
      <ul>
        {rooms.map((room) => (
          <li key={room.id}>
            Room {room.roomNumber} - {room.roomType} - {room.isAvailable ? 'Available' : 'Booked'}
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

export default RoomManagement;