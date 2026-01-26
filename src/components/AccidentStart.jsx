import React from "react";
import { useData } from "../context/DataContext";
import { useState } from "react";
import "../style/Accident.css";
import backBtn from "../assets/images/backBtn.svg";
import crashImg from "../assets/images/david-crash.svg";

function AccidentStart({ changeToSection, changeToPage }) {
  const { data } = useData();
  const nextBtn = data.general[1].text;
  const backBtnText = data.general[0].text;
  const title = data.AccidentStart[0].title;
  const previousPage = () => {
    changeToSection(3, true);
  };
  const nextPage = () => {
    changeToPage(1);
  };
  return (
    <div className="AccidentStart">
      <div className="backBtn">
        <img
          src={backBtn}
          alt="backBtn"
          className="backBtnImg"
          onClick={previousPage}
        />
        <p className="backBtnText">{backBtnText}</p>
      </div>
      <p className="title title-AccidentStart">{title}</p>
      <img className="crashImg" src={crashImg} alt="crashImg" />
      <button className="nextBtn" onClick={nextPage}>
        {nextBtn}
      </button>
    </div>
  );
}

export default AccidentStart;
