import React from "react";
import { useState } from "react";
import "../style/Defender.css";
import { useData } from "../context/DataContext";
import backBtn from "../assets/images/backBtn.svg";
import DifrenzialLockSvg from "./DifrenzialLockSvg";
import galGalgal from "../assets/images/galGalgal.png";
import warningSign from "../assets/images/warning-sign.svg";

function DifrenzialWarning({ changeToPage }) {
  const [page, setPage] = useState(0);
  const [isPressed, setPressed] = useState(false);
  const { data } = useData();
  const nextBtn = data.general[1].text;
  const backBtnText = data.general[0].text;
  const text1 = data.DifrenzialWarning[0].text1;
  const text2 = data.DifrenzialWarning[0].text2;
  const text3 = data.DifrenzialWarning[0].text3;
  const bubble = data.DifrenzialWarning[0].bubble;
  const galBubble = data.DifrenzialWarning[0].galBubble;
  const warningImg = data.DifrenzialWarning[0].warningImg;
  const previousPage = () => {
    changeToPage(4);
  };
  const nextPage = () => {
    if (page === 0) {
      setPage(1);
    } else {
      changeToPage(6);
    }
  };
  const nextStep = () => {
    if (page === 0) {
      setPage(1);
    }
  };
  return (
    <div className="DifrenzialWarning">
      <div className="backBtn">
        <img
          src={backBtn}
          alt="backBtn"
          className="backBtnImg"
          onClick={previousPage}
        />
        <p className="backBtnText">{backBtnText}</p>
      </div>
      <div className="DifrenzialLockSvg-wrapper">
        <DifrenzialLockSvg
          isPressed={isPressed}
          setPressed={setPressed}
          nextStep={nextStep}
        />
      </div>
      {page == 0 && (
        <div className={`galDifrenzialWarning galBubble`}>
          <img src={galBubble} className="galTechnicalBubble" alt="galBubble" />
          <img className="galTechnicalImg" src={galGalgal} alt="galGalgal" />
        </div>
      )}
      {page == 2 && <div className="difrenzialWarningSign-container">
        <img src={bubble} alt="bubble" className="difrenzialWarningBubble" />
        <img
          src={warningSign}
          alt="warningSign"
          className="difrenzialWarningSign"
          onClick={() => setPage(3)}
        />
      </div>}
      <button
        className={`nextBtn ${page === 4 ? "" : "nextBtnDisable"}`}
        onClick={nextPage}
      >
        {nextBtn}
      </button>
      {(page === 1 || page === 3) && <div className="blur-background"></div>}
      {page === 1 && (
        <div className="DifrenzialLightExplain">
          <p
            className="xbtn xbtn-DifrenzialLightExplain"
            onClick={() => setPage(2)}
          >
            X
          </p>
          <p>{text1}</p>
          <span className="boldText">{text2}</span>
          <span>{text3}</span>
        </div>
      )}
      {page === 3 && (
        <div className="warning1-container">
          <img className="warning1" src={warningImg} alt="warning1" />
          <p className="xbtn xbtn-difrenzialChoose" onClick={() => setPage(4)}>
            X
          </p>
        </div>
      )}
    </div>
  );
}

export default DifrenzialWarning;
