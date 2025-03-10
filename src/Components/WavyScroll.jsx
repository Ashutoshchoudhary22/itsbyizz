import React, { useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";

const WavyScrollText = ({ highlight, text }) => {
  const textRef = useRef([]);

  useEffect(() => {
    textRef.current.forEach((el, index) => {
      ScrollReveal().reveal(el, {
        origin: "bottom",
        distance: "30px",
        duration: 800,
        delay: index * 150, // Staggered effect
        easing: "ease-in-out",
        reset: false,
      });
    });
  }, []);

  return (
    <h1 className="text-gray-50 text-5xl font-bold flex flex-wrap gap-2">
      {/* Highlighted Text (with same animation) */}
      {highlight.split(" ").map((word, index) => (
        <span
          key={`highlight-${index}`}
          ref={(el) => (textRef.current[index] = el)}
          className="text-green-400"
        >
          {word}
        </span>
      ))}

      {/* Normal Text with Wavy Effect */}
      {text.split(" ").map((word, index) => (
        <span
          key={`text-${index}`}
          ref={(el) => (textRef.current[highlight.split(" ").length + index] = el)}
          className="text-white"
        >
          {word}
        </span>
      ))}
    </h1>
  );
};

export default WavyScrollText;
