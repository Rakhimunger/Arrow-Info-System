import React from "react";

// 📦 Import images
import Testimonals5 from "../assets/Testimonals5.jpg";
import Bus1 from "../assets/Bus1.jpg";
import Testimonals3 from "../assets/Testimonals3.jpg";
import Car2 from "../assets/Car2.jpg";
import Car4 from "../assets/Car4.jpg";
import Bus5 from "../assets/Bus5.jpg";

const imageData = [
  { src: Testimonals5, alt: "Travels", title: "Travel Ride" },
  { src: Bus1, alt: "Bus1", title: "Luxury Bus" },
  { src: Testimonals3, alt: "Car1", title: "Sedan Car" },
  { src: Car2, alt: "Car2", title: "Classic Car" },
  { src: Car4, alt: "Car4", title: "Vintage Ride" },
  { src: Bus5, alt: "Bus5", title: "Sleeper Coach" },
];

const Transpost = () => {
  return (
    <div className="p-4 sm:p-6 md:p-10 font-sans bg-gradient-to-br from-gray-50 to-gray-200 min-h-screen">
      <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-gray-800 mb-8 sm:mb-10">
        🚗 Our Transport Collection
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center">
        {imageData.map((item, index) => (
          <div
            key={index}
            className="group w-full max-w-sm bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-2xl hover:ring-2 hover:ring-blue-400"
          >
            <div className="overflow-hidden h-48 sm:h-52 md:h-56">
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4 sm:p-5">
              <h3 className="text-lg sm:text-xl font-bold text-gray-700 mb-1">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-500 mb-3">
                Experience unmatched comfort and luxury with our top-class
                transport services.
              </p>
              <button className="bg-blue-600 text-white text-sm sm:text-base px-4 py-2 rounded-xl hover:bg-blue-700 transition-colors duration-200">
                Explore Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transpost;
