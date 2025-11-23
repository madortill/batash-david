import React from "react";
import "../style/Start.css";
import backBtn from "../assets/images/backBtn.svg";
import davidCard from "../assets/images/david-card.png";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function StartPage() {
  const [showAbout, setShowAbout] = useState(false);
  const [infoSymbol, setInfoSymbol] = useState("i");
  const navigate = useNavigate();
  const toggleAbout = () => {
    setShowAbout((prev) => !prev);
    setInfoSymbol((prev) => (prev === "i" ? "x" : "i"));
  };
  return (
    <>
      <div className="backBtn">
        <img src={backBtn} alt="backBtn" className="backBtnImg" />
        <p className="backBtnText">חזרה לבחירת הרכב</p>
      </div>
      <div onClick={toggleAbout} className="aboutBtnContainer">
        <button className="about-btn">
          {infoSymbol}
        </button>
        <p>אודות</p>
      </div>
      <div className={`div-about ${showAbout ? "fade-in" : "fade-out"}`}>
        {showAbout && (
          <>
            <h3 className="list-text-about">מפתחת ראשית:</h3>
            <p className="list-text-about">רב"ט גילי נחום</p>
            <h3 className="list-text-about">גרפיקה:</h3>
            <p className="list-text-about">רב"ט גילי נחום</p>
            <h3 className="list-text-about">מומחי תוכן:</h3>
            <p className="list-text-about">רס"ל עדן מאיר</p>
            <p className="list-text-about">רנ"ג יוסי </p>
            <h3 className="list-text-about">רמ"ד טי"ל:</h3>
            <p className="list-text-about">רס"מ עדן בן חמו</p>
            <h3 className="list-text-about">גרסה:</h3>
            <p className="list-text-about">דצמבר 2025</p>
          </>
        )}
      </div>
      <div className="start-main-content">
        <p className="start-main-content-text">ג'יפ דוד</p>
        <img src={davidCard} alt="davidCard" className="davidCard"/>
      </div>
    </>
  );
}

export default StartPage;
