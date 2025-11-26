import React from "react";
import { useState } from "react";
import "../style/Defender.css";
import { useData } from "../context/DataContext";
import backBtn from "../assets/images/backBtn.svg";

function DefenderStart({ changeToSection, changeToPage }) {
  const { data } = useData();
  const nextBtn = data.general[1].text;
  const backBtnText = data.general[0].text;
  const title = data.DefenderStart[0].title;
  const semiTitle = data.DefenderStart[0].semiTitle;
  const text1 = data.DefenderStart[0].text1;
  const text2 = data.DefenderStart[0].text2;
  const previousPage = () => {
    changeToSection(1);
  };
  const nextPage = () => {
    changeToPage(1);
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
      <div className="defender-start-textBox">
        <p className="defender-start-title">{title}</p>
        <p className="defender-start-semiTitle">{semiTitle}</p>
        <p className="defender-start-text">{text1}</p>
        <p className="defender-start-text">{text2}</p>
      </div>
      <button className="nextBtn" onClick={nextPage}>
        {nextBtn}
      </button>
    </>
  );
}

export default DefenderStart;
