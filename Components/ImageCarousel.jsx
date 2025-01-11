import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

const ImageCarousel = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Check if the screen width is large (min-width: 1024px)
  const isLargeScreen = useMediaQuery({ minWidth: 1021 });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer); // Cleanup the timer on unmount
  }, [images.length, interval]);

  return (
    <div style={{ textAlign: "center" }}>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        style={{
          maxWidth: "500px",
          maxHeight: "500px",
          width: "100%",
          height: "auto",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          ...(isLargeScreen && {
            minWidth: "450px",
            minHeight: "450px",
          }),
        }}
      />
      <div
        style={{ marginTop: "10px", display: "flex", justifyContent: "center" }}
      >
        {images.map((_, index) => (
          <div
            key={index}
            style={{
              height: "12px",
              width: "12px",
              margin: "0 5px",
              backgroundColor: currentIndex === index ? "black" : "gray",
              borderRadius: "50%",
              cursor: "pointer",
            }}
            onClick={() => setCurrentIndex(index)} // Allows clicking to navigate
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
