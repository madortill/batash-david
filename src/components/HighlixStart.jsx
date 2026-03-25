import React from 'react'
import { useData } from "../context/DataContext";
import { useState } from "react";
import "../style/Highlix.css";
import backBtn from "../assets/images/backBtn.svg";
import highlixImg from "../assets/images/highlixImg.png";

function HighlixStart({changeToSection, changeToPage}) {
    const { data } = useData();
  const nextBtn = data.general[1].text;
  const backBtnText = data.general[0].text;
  const title = data.HighlixStart[0].title;
  const previousPage = () => {
    changeToSection(2, true);
  };
  const nextPage = () => {
    changeToPage(1);
  };
  return (
    <div className='HighlixStart'>
       <div className="backBtn">
        <img
          src={backBtn}
          alt="backBtn"
          className="backBtnImg"
          onClick={previousPage}
        />
        <p className="backBtnText">{backBtnText}</p>
      </div>
      <p className='title title-highlix'>{title}</p>
      <img src={highlixImg} alt="highlixImg" className='highlixStartImg' />
      <button
        className="nextBtn"
        onClick={nextPage}
      >
        {nextBtn}
      </button>
    </div>
  )
}

export default HighlixStart
