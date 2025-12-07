import React from "react";
import { useState } from "react";
import "../style/Defender.css";
import { useData } from "../context/DataContext";
import backBtn from "../assets/images/backBtn.svg";

function DefenderVideo({ changeToSection, changeToPage, startPage }) {
  const [page, setPage] = useState(startPage);
  const { data } = useData();
  const nextBtn = data.general[1].text;
  const backBtnText = data.general[0].text;
  const defenderVideoTitle = data.DefenderVideo[0].title;
  const defenderVideoSrc = data.DefenderVideo[0].video;
  console.log(startPage);
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
      changeToPage(1);
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
      {page === 0 && <video src={defenderVideoSrc} alt="defenderVideo" controls autoPlay muted></video>}
      <button className="nextBtn" onClick={nextPage}>
        {nextBtn}
      </button>
    </>
  );
}

export default DefenderVideo;
