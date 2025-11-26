import React from 'react'
import "../style/KnowCar.css";
import { useState } from "react";
import { useData } from "../context/DataContext";
import FlipCard from "./FlipCard";

import backBtn from "../assets/images/backBtn.svg";
import toyotaLogo from "../assets/images/toyotaLogo.svg";
import defenderLogo from "../assets/images/defenderLogo.svg";



function Introduction({onSendData}) {
    const [page, setPage] = useState(0);
    const[isDisabled, changeNextBtn] = useState(true);
    const [flippedCount, setFlippedCount] = useState(0);
    const { data } = useData();
    const introText = data.Introduction[0].text;
    const introNote = data.Introduction[0].note;
    const introText2 = data.Introduction[2].text;
    const nextBtn = data.general[1].text;
    const backBtnText = data.general[0].text;
    
    const previousPage = () => {
      setPage(0);
    };

    const cards = [
      {
        img: toyotaLogo,
        frontText: data.Introduction[1].card1Title,
        backText: data.Introduction[1].card1Text
      },
      {
        img: defenderLogo,
        frontText: data.Introduction[1].card2Title,
        backText: data.Introduction[1].card2Text
      }
    ]

    const handleCardFlipped = () => {
      setFlippedCount(prev => {
        const newCount = prev + 1;
        if (newCount >= cards.length) {
          changeNextBtn(false); // משנה את הכפתור ל־enabled
        }
        return newCount;
      });
    };

    const nextPage = () => {
      if (!isDisabled) {
        if (page === 0) {
          setPage(1);
        } else {
          onSendData(1);
        }
      }
    }
  return (
    <>
    {page === 1 && <div className="backBtn">
        <img
          src={backBtn}
          alt="backBtn"
          className="backBtnImg"
          onClick={previousPage}
        />
        <p className="backBtnText">{backBtnText}</p>
      </div>}
      <div className='intoduction-container'>
        {page === 0 && <div className='intro-first'>
            <p className='intro-text'>{introText}</p>
            <div className='cards-container'>
            {cards.map((card, i) => (
              <FlipCard
                key={i}
                img={card.img}
                backText={card.backText}
                frontText={card.frontText}
                onAllFlipped={handleCardFlipped}
              />
            ))}
          </div>
            <p className='intro-note'>{introNote}</p>
            </div>}
            { page === 1 && <div className='intro-second'>
              <p className='intro-text-sec'>{introText2}</p>
            </div>
            }
      </div>
      <button className={`nextBtn ${isDisabled ? "nextBtnDisable" : ""}`} onClick={nextPage}>{nextBtn}</button>
    </>
  )
}

export default Introduction
