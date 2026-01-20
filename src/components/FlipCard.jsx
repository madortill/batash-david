import React, { useState, useEffect } from "react";
import "../style/FlipCard.css"; // put your css here

function FlipCard({
  img,
  frontText,
  backText,
  onFlip,
  className = "",
}) {
  const [reported, setReported] = useState(false);

  const handleHover = () => {
    if (reported) return;
    setReported(true);
    onFlip?.();
  };

  return (
    <div className={`flip-card ${className}`}>
      <div className="flip-card-inner">
        <div
          className="flip-card-front"
          onMouseEnter={handleHover}
          onClick={handleHover}   // בשביל מובייל
        >
          {img && <img src={img} alt="" className="imgFront" />}
          <p className="textFront">{frontText}</p>
        </div>

        <div className="flip-card-back">
          <p className="textBack">{backText}</p>
        </div>
      </div>
    </div>
  );
}


export default FlipCard;
