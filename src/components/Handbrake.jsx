import React, { useState } from "react";
import "../style/Highlix.css";
import { useData } from "../context/DataContext";
import backBtn from "../assets/images/backBtn.svg";
import FlipCard from "./FlipCard";

function Handbrake({ changeToPage, startPage }) {
  const [page, setPage] = useState(startPage);
  const { data } = useData();
  const nextBtn = data.general[1].text;
  const backBtnText = data.general[0].text;
  const title = data.Handbrake[0].title;
  const text = data.Handbrake[0].text;
  const cards = data.Handbrake[0].cards;
  const [flippedCards, setFlippedCards] = useState([]);
  const allFlipped = flippedCards.length === cards.length;
  const handleCardFlipped = (index) => {
    setFlippedCards((prev) => {
      if (prev.includes(index)) return prev; // כבר נספר
      return [...prev, index];
    });
  };
  const previousPage = () => {
    if (page === 0) {
      changeToPage(3);
    } else {
      setPage(page - 1);
    }
  };
  const nextPage = () => {
    if (page === 1 && allFlipped) {
      changeToPage(5);
    } else {
      setPage(page + 1);
    }
  };
  return (
    <div className="Handbrake">
      <div className="backBtn">
        <img
          src={backBtn}
          alt="backBtn"
          className="backBtnImg"
          onClick={previousPage}
        />
        <p className="backBtnText">{backBtnText}</p>
      </div>
      <p className="title title-handBrake">{title}</p>
      {page == 0 && <p className="handbrake-text">{text}</p>}
      {page == 1 && (
        <div className="cards-grid">
          {cards.map((card, index) => (
            <FlipCard
              key={index}
              frontText={card.front}
              backText={card.back}
              className="flip-card--large"
              flipOn="click"
              onFlip={() => handleCardFlipped(index)}
            />
          ))}
        </div>
      )}
      <button
        className={`nextBtn ${(page === 0 || allFlipped)  ? "" : "nextBtnDisable"}`}
        onClick={nextPage}
      >
        {nextBtn}
      </button>
    </div>
  );
}

export default Handbrake;
