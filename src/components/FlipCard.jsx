import React, { useState, useEffect } from "react";
import "../style/FlipCard.css"; // put your css here

function FlipCard({ img, backText, frontText, onAllFlipped }) {
  const [onStart, setOnStart] = useState("start");
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    if (!hovered) {
      setHovered(true);
      if (onAllFlipped) onAllFlipped(); // optional callback
    }
  };

  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front" onMouseOver={handleHover}>
          <img src={img} alt="front" className="imgFront" />
          <p className="textFront">{frontText}</p>
        </div>
        <div className="flip-card-back" style={{ "--dynamic-color": "red" }}>
          <p className="textBack">{backText}</p>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
