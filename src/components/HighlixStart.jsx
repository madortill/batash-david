import React from 'react'
import { useData } from "../context/DataContext";
import { useState } from "react";
import "../style/Highlix.css";
import backBtn from "../assets/images/backBtn.svg";
import highlix1 from "../assets/images/highlix1.jpeg";
import highlix2 from "../assets/images/highlix2.jpeg";
import highlix3 from "../assets/images/highlix3.jpeg";
import highlix4 from "../assets/images/highlix.jpeg";

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
      <div className='highlixStartImgContainer'>

      <img src={highlix1} alt="highlixImg" className='highlixStartImg' />
      <img src={highlix3} alt="highlixImg" className='highlixStartImg' />
      <img src={highlix2} alt="highlixImg" className='highlixStartImg' />
      <img src={highlix4} alt="highlixImg" className='highlixStartImg' />
      </div>
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
