import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import RoomResult from "./RoomResult";
import RoomSearch from "./RoomSearch";

const HomePage = () => {
  const [roomSearchResults, setRoomSearchResults] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSearchResult = (results) => {
    setRoomSearchResults(results);
  };

  // Redirect to the rooms page
  const handleBookNow = () => {
    navigate("/rooms");
  };

  const services = [
    {
      title: "Air Conditioning",
      image: "/assets/images/ac.png",
      description: "Stay cool and comfortable throughout your stay with our individually controlled in-room air conditioning.",
    },
    {
      title: "Mini Bar",
      image: "/assets/images/mini-bar.png",
      description: "Enjoy a convenient selection of beverages and snacks stocked in your room's mini bar with no additional cost.",
    },
    {
      title: "Parking",
      image: "/assets/images/parking.png",
      description: "We offer on-site parking for your convenience. Please inquire about valet parking options if available.",
    },
    {
      title: "WiFi",
      image: "/assets/images/wifi.png",
      description: "Stay connected throughout your stay with complimentary high-speed Wi-Fi access available in all guest rooms and public areas.",
    },
    {
      title: "24/7 Room Service",
      image: "/assets/images/room-service.png",
      description: "Enjoy delicious meals and snacks delivered to your room at any time of the day or night.",
    },
    {
      title: "Fitness Center",
      image: "/assets/images/fitness.png",
      description: "Stay active during your stay with our fully equipped fitness center, open 24/7 for your convenience.",
    },
    {
      title: "Swimming Pool",
      image: "/assets/images/pool.png",
      description: "Relax and unwind by our sparkling outdoor swimming pool, perfect for a refreshing dip.",
    },
    {
      title: "Spa & Wellness",
      image: "/assets/images/spa.png",
      description: "Pamper yourself with our luxurious spa treatments designed to rejuvenate your mind and body.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header / Banner Section */}
      <header className="relative h-screen">
        <img src="/assets/images/hotel.webp" alt="Phegon Hotel" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-white"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
            Welcome to <span className="text-yellow-400">Phegon Hotel</span>
          </h1>
          <h3 className="text-xl md:text-2xl mb-8 text-center">Step into a haven of comfort and care</h3>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleBookNow} // Redirect to rooms page
            className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-yellow-300 transition duration-300"
          >
            Book Now
          </motion.button>
        </motion.div>
      </header>

      {/* Search Section */}
      <section className="py-10 px-4 md:px-4 lg:px-12 bg-transparent">
        <RoomSearch handleSearchResult={handleSearchResult} />
        <RoomResult roomSearchResults={roomSearchResults} />
        <div className="text-center mt-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleBookNow} // Redirect to rooms page
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
          >
            View All Rooms
          </motion.button>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16 px-4 md:px-8 lg:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Services at <span className="text-yellow-400">Phegon Hotel</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 flex items-center p-4"
            >
              <img src={service.image} alt={service.title} className="w-12 h-12 mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-100">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What Our Guests Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "John Doe",
              review: "Absolutely loved my stay at Phegon Hotel! The staff was incredibly friendly, and the rooms were spotless.",
              image: "/assets/images/user1.jpg",
            },
            {
              name: "Jane Smith",
              review: "The spa treatments were heavenly, and the pool was the perfect place to relax after a long day.",
              image: "/assets/images/user2.jpg",
            },
            {
              name: "Michael Johnson",
              review: "The mini bar was a nice touch, and the Wi-Fi was super fast. Will definitely stay here again!",
              image: "/assets/images/user3.jpg",
            },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300"
            >
              <div className="flex items-center mb-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                <h3 className="text-xl font-semibold">{testimonial.name}</h3>
              </div>
              <p className="text-gray-600">{testimonial.review}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-yellow-400">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Book Your Stay?</h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleBookNow} // Redirect to rooms page
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
          >
            Book Now
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;