import React, { useState } from 'react';
import ApiService from '../../service/ApiService'; // Assuming your service is in a file called ApiService.js

const FindBookingPage = () => {
    const [confirmationCode, setConfirmationCode] = useState(''); // State variable for confirmation code
    const [bookingDetails, setBookingDetails] = useState(null); // State variable for booking details
    const [error, setError] = useState(null); // Track any errors

    const handleSearch = async () => {
        if (!confirmationCode.trim()) {
            setError("Please Enter a booking confirmation code");
            setTimeout(() => setError(''), 5000);
            return;
        }
        try {
            // Call API to get booking details
            const response = await ApiService.getBookingByConfirmationCode(confirmationCode);
            setBookingDetails(response.booking);
            console.log(response.booking);
            setError(null); // Clear error if successful
        } catch (error) {
            setError(error.response?.data?.message || error.message);
            setTimeout(() => setError(''), 5000);
        }
    };

    return (
        <div className="max-w-full md:max-w-2xl mx-auto my-5 p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-center text-3xl font-bold mb-6 text-teal-600">Find Booking</h2>
            <div className="flex flex-col md:flex-col items-center bg-gray-100 p-4 rounded-lg">
                <input
                    required
                    type="text"
                    placeholder="Enter your booking confirmation code"
                    value={confirmationCode}
                    onChange={(e) => setConfirmationCode(e.target.value)}
                    className="p-3 text-lg border border-gray-300 rounded-lg mb-3 md:mb-0 md:mr-3 w-full focus:ring-2 focus:ring-teal-500 focus:outline-none transition duration-300"
                />
                <button 
                    onClick={handleSearch} 
                    className="p-3 text-lg bg-teal-600 text-white rounded-lg cursor-pointer hover:bg-teal-600 transition duration-300 w-1/2 mt-2 transform hover:-translate-y-1"
                >
                    Find
                </button>
            </div>
            {error && <p className="text-red-600 mt-3 text-center">{error}</p>}
            {bookingDetails && (
                <div className="mt-6 border border-gray-300 rounded-lg p-5 bg-gray-50">
                    <h3 className="text-2xl font-bold mb-3 text-gray-700">Booking Details</h3>
                    <p>Confirmation Code: {bookingDetails.bookingConfirmationCode}</p>
                    <p>Check-in Date: {bookingDetails.checkInDate}</p>
                    <p>Check-out Date: {bookingDetails.checkOutDate}</p>
                    <p>Num Of Adults: {bookingDetails.numOfAdults}</p>
                    <p>Num Of Children: {bookingDetails.numOfChildren}</p>

                    <br />
                    <hr className="my-3"/>
                    <h3 className="text-2xl font-bold mb-3 text-gray-700">Booker Details</h3>
                    <div>
                        <p>Name: {bookingDetails.user.name}</p>
                        <p>Email: {bookingDetails.user.email}</p>
                        <p>Phone Number: {bookingDetails.user.phoneNumber}</p>
                    </div>

                    <br />
                    <hr className="my-3"/>
                    <h3 className="text-2xl font-bold mb-3 text-gray-700">Room Details</h3>
                    <div>
                        <p>Room Type: {bookingDetails.room.roomType}</p>
                        <img src={bookingDetails.room.roomPhotoUrl} alt="Room" className="w-full rounded-lg mt-3 shadow-lg transform hover:scale-105 transition duration-300" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default FindBookingPage;
