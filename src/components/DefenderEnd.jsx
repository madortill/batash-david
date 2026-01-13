import React from "react";
import { useData } from "../context/DataContext";
import { useState } from "react";
import "../style/Defender.css";
import backBtn from "../assets/images/backBtn.svg";
import carFront from "../assets/images/carFront-img.svg";

function DefenderEnd({changeToSection, changeToPage}) {
  const [pressedInfo, setPressedInfo] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { data } = useData();
  const nextBtn = data.general[1].text;
  const backBtnText = data.general[0].text;
  const title = data.DefenderEnd[0].title;
  const text = data.DefenderEnd[0].text;
  const popUp = data.DefenderEnd[0].popUp;
  const previousPage = () => {
    changeToPage(10);
  };
  const nextPage = () => {
    if (pressedInfo) {
        changeToSection(3);
    }
  };
  return (
    <div className="DefenderEnd">
      <div className="backBtn">
        <img
          src={backBtn}
          alt="backBtn"
          className="backBtnImg"
          onClick={previousPage}
        />
        <p className="backBtnText">{backBtnText}</p>
      </div>
      <div className="defenderEnd-content">
        <p className="boldText">{title}</p>
        <p>{text}</p>
        <button
          className="defenderEnd-info-btn"
          onClick={() => {
            setIsOpen((prev) => !prev);
            setPressedInfo(true);
          }}
        >
          {isOpen ? "✕" : "i"}
        </button>
        {isOpen && (
          <div className="defenderEnd-info-box">
            <p>{popUp}</p>
          </div>
        )}
        <img className="defenderEnd-car" src={carFront} alt="carFront" />
      </div>
      <button
        className={`nextBtn ${pressedInfo ? "" : "nextBtnDisable"}`}
        onClick={nextPage}
      >
        {nextBtn}
      </button>
    </div>
  );
}

export default DefenderEnd;
