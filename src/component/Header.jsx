import React from "react";
import Travels from "../assets/Travels.jpg";

const Header = () => {
  return (
    <div className="w-full overflow-hidden">
      <img
        src={Travels}
        alt="Travel Header"
        className="w-full h-auto max-h-[90vh] sm:max-h-[70vh] md:max-h-[60vh] lg:max-h-[80vh] object-cover"
      />
    </div>
  );
};

export default Header;
