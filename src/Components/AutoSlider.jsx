import React from "react";
import Marquee from "react-fast-marquee";

const images = [
  "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
  "https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0",
  "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
  "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
  "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
];

const AutoSlider = () => {
  return (
    <div className="w-full py-6">
      <Marquee speed={50} pauseOnHover={true} gradient={false}>
        {images.map((src, index) => (
          <div key={index} className="min-w-[300px] md:min-w-[400px] rounded-lg shadow-lg mx-2">
            <img src={src} alt={`Slide ${index}`} className="w-full h-72 object-cover rounded-lg" />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default AutoSlider;
