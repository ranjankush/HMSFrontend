import React, { useState } from 'react';
import ApiService from '../../service/ApiService'; // Assuming ApiService is in the same directory

const BookingForm = () => {
  const [roomId, setRoomId] = useState('');
  const [userId, setUserId] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [confirmationCode, setConfirmationCode] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleBooking = async (e) => {
    e.preventDefault();
    setLoading(true);

    const bookingData = {
      checkInDate,
      checkOutDate,
    };

    try {
      const response = await ApiService.bookRoom(roomId, userId, bookingData);

      if (response.statusCode === 200) {
        setConfirmationCode(response.bookingConfirmationCode);
        setMessage('Booking successfully created!');
      } else {
        setMessage(`Error: ${response.message}`);
      }
    } catch (error) {
      setMessage('Error creating booking. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Book Your Stay</h2>
      <form onSubmit={handleBooking}>
        <div>
          <label>Room ID:</label>
          <input
            type="text"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            required
          />
        </div>
        <div>
          <label>User ID:</label>
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Check-in Date:</label>
          <input
            type="date"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Check-out Date:</label>
          <input
            type="date"
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Booking...' : 'Confirm Booking'}
        </button>
      </form>

      {message && <div>{message}</div>}
      {confirmationCode && (
        <div>
          <h3>Your Confirmation Code:</h3>
          <p>{confirmationCode}</p>
        </div>
      )}
    </div>
  );
};

export default BookingForm;
