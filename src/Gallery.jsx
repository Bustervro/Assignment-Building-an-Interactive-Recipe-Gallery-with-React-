import { useState } from "react";
import "./Gallery.css";

export const images = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1565958011703-44f9829ba187",
    description: "Strawberry cake recipe",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    description: "Fresh salad recipe",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
    description: "Homemade pizza recipe",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    description: "Burger recipe",
  },
];

function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentImage = images[currentIndex];

  function handleNext() {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  }

  function handlePrevious() {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  }

  return (
    <div className="gallery">
      <h1>Interactive Recipe Gallery</h1>

      <img src={currentImage.url} alt={currentImage.description} />

      <h2>{currentImage.description}</h2>
      <p>
        Image {currentIndex + 1} of {images.length}
      </p>

      <div className="buttons">
        <button onClick={handlePrevious} disabled={currentIndex === 0}>
          Previous
        </button>

        <button onClick={handleNext} disabled={currentIndex === images.length - 1}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Gallery;
