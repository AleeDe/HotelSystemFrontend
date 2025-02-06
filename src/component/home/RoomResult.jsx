import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import ApiService from '../../service/ApiService';

const RoomResult = ({ roomSearchResults }) => {

    const navigate = useNavigate(); // Initialize useNavigate hook
    const isAdmin = ApiService.isAdmin();
    return (
        <section className="block flex-wrap m-2.5">
            {roomSearchResults && roomSearchResults.length > 0 && (
                <div className="room-list">
                    {roomSearchResults.map(room => (
                        <div key={room.stringId} className="w-[calc(95%-20px)] h-[20vh] my-1.5 mx-auto border border-gray-300 rounded-lg overflow-hidden flex">
                            <img className='w-[20%] h-[20vh]' src={room.roomPhotoUrl} alt={room.roomType} />
                            <div className="flex-1 p-4 ml-2.5">
                                <h3 className="text-teal-600">{room.roomType}</h3>
                                <p>Price: ${room.roomPrice} / night</p>
                                <p>Description: {room.roomDescription}</p>
                            </div>
                            <div className='self-center'>
                                {isAdmin ? (
                                    <button
                                        className="bg-teal-600 text-white border-none rounded px-4 py-2 cursor-pointer font-semibold mr-2.5 hover:bg-teal-700 transition"
                                        onClick={() => navigate(`/admin/edit-room/${room.stringId}`)} // Navigate to edit room with room ID
                                    >
                                        Edit Room
                                    </button>
                                ) : (
                                    <button
                                        className="bg-teal-600 text-white border-none rounded px-4 py-2 cursor-pointer font-semibold mr-2.5 hover:bg-teal-700 transition"
                                        onClick={() => navigate(`/rooms/${room.stringId}`)} // Navigate to view/book room with room ID
                                    >
                                        View/Book Now
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}

export default RoomResult;
