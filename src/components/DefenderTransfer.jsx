import React from "react";
import { useState } from "react";
import "../style/Defender.css";
import { useData } from "../context/DataContext";
import backBtn from "../assets/images/backBtn.svg";
import galGalgal from "../assets/images/galGalgal.png";
import DefenderTransferSvg from "./DefenderTransferSvg";

function DefenderTransfer({ changeToSection, changeToPage, startPage }) {
  const [page, setPage] = useState(0);
  const { data } = useData();
  const nextBtn = data.general[1].text;
  const backBtnText = data.general[0].text;
  const defenderTitle = data.DefenderTransfer[0].title;
  const defenderRoadTitle = data.DefenderTransfer[0].roadTitle;
  const defenderRoadText = data.DefenderTransfer[0].roadText;
  const defenderFieldTitle = data.DefenderTransfer[0].fieldTitle;
  const defenderFieldText = data.DefenderTransfer[0].fieldText;
  const [isFinished, setIsFinished] = useState(false);
  const galImg = {
    0: data.DefenderTransfer[0].gal1,
    1: data.DefenderTransfer[0].gal1,
    2: data.DefenderTransfer[0].gal2,
    3: data.DefenderTransfer[0].gal2,
    4: data.DefenderTransfer[0].gal3
  };
  const galBubble = galImg[page] || galImg[0];
  const previousPage = () => {
    changeToPage(1, true);
  };
  const nextPage = () => {
    if (page === 4) {
      changeToPage(3);
    }
  };
  return (
    <div className="DefenderTransfer">
      <div className="backBtn">
        <img
          src={backBtn}
          alt="backBtn"
          className="backBtnImg"
          onClick={previousPage}
        />
        <p className="backBtnText">{backBtnText}</p>
      </div>
      <p className="defenderVideoTitle">{defenderTitle}</p>
      <div className="defenderTransferContent">
        <div className="defenderTransferStateContainer">
          <div className="defenderTransferState">
            <p className="defender-transfer-state-title">{defenderRoadTitle}</p>
            <p>{defenderRoadText}</p>
          </div>
          <div className="defenderTransferState">
            <p className="defender-transfer-state-title">
              {defenderFieldTitle}
            </p>
            <p>{defenderFieldText}</p>
          </div>
        </div>
        <DefenderTransferSvg page={page}  setPage={setPage}
        />
      </div>
      <div className="galDefenderTansfer galBubble">
        <img
          src={galBubble}
          className="galTechnicalBubble"
          alt="galBubble"
        />
        <img className="galTechnicalImg" src={galGalgal} alt="galGalgal" />
      </div>
      <button
        className={`nextBtn ${page === 4 ? "" : "nextBtnDisable"}`}
        onClick={nextPage}
      >
        {nextBtn}
      </button>
      {(page === 1 || page === 3) &&<div className="blur-background"></div>}
      {page === 1 && <div className="defender-wheel-container">
        <img className="defender-wheel" src={data.DefenderTransfer[0].wheel1} alt="wheel1" />
        <p className="xbtn xbtn-defender-wheel" onClick={() => setPage(2)}>X</p>
      </div>}
      {page === 3 && <div className="defender-wheel-container">
        <img className="defender-wheel" src={data.DefenderTransfer[0].wheel2} alt="wheel1" />
        <p className="xbtn xbtn-defender-wheel" onClick={() => setPage(4)}>X</p>
      </div>}
    </div>
  );
}

export default DefenderTransfer;
