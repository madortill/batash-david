import React from "react";
import { useState } from "react";
import "../style/Defender.css";
import { useData } from "../context/DataContext";
import backBtn from "../assets/images/backBtn.svg";
import galGalgal from "../assets/images/galGalgal.png";

function DefenderVideo({ changeToSection, changeToPage, startPage }) {
  const [page, setPage] = useState(startPage);
  const { data } = useData();
  const nextBtn = data.general[1].text;
  const backBtnText = data.general[0].text;
  const defenderVideoTitle = data.DefenderVideo[0].title;
  const defenderVideoSrc = data.DefenderVideo[0].video;
  const defenderTitle1 = data.DefenderVideo[1].title1;
  const defenderText1 = data.DefenderVideo[1].text1;
  const defenderTitle2 = data.DefenderVideo[1].title2;
  const defenderText2 = data.DefenderVideo[1].text2;
  const previousPage = () => {
    if (page === 0) {
      changeToPage(0);
    } else {
      setPage(0);
    }
  };
  const nextPage = () => {
    if (page === 0) {
      setPage(1);
    } else {
      changeToPage(2);
    }
  };
  return (
    <>
      <div className="backBtn">
        <img
          src={backBtn}
          alt="backBtn"
          className="backBtnImg"
          onClick={previousPage}
        />
        <p className="backBtnText">{backBtnText}</p>
      </div>
      <p className="defenderVideoTitle">{defenderVideoTitle}</p>
      {page === 0 && <video className="defenderVideoSrc" src={defenderVideoSrc} alt="defenderVideo" controls autoPlay muted></video>}
      {page === 1 && <div className="defender-video-text-container">
        <p className="defender-video-text-title">{defenderTitle1}</p>
        <p className="defender-video-text">{defenderText1}</p>
        <p className="defender-video-text-title">{defenderTitle2}</p>
        <p className="defender-video-text">{defenderText2}</p>
        </div>}
        { page === 1 &&<div className="galDefenderVideo galBubble">
        <img src={data.DefenderVideo[1].galSrc} className="galTechnicalBubble" alt="galTechnicalBubble" />
        <img className="galTechnicalImg" src={galGalgal} alt="galGalgal" />
      </div>}
      <button className="nextBtn" onClick={nextPage}>
        {nextBtn}
      </button>
    </>
  );
}

export default DefenderVideo;
