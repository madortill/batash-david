import React from 'react'
import { useState } from "react";
import "../style/Defender.css";
import { useData } from "../context/DataContext";
import backBtn from "../assets/images/backBtn.svg";
import road from "../assets/images/road-black.svg";

function EtcControl({changeToPage}) {
    const { data } = useData();
    const nextBtn = data.general[1].text;
    const backBtnText = data.general[0].text;
    const title = data.EtcControl[0].title;
    const ice1 = data.EtcControl[0].ice2;
    const ice2 = data.EtcControl[0].ice1;
    const ice3 = data.EtcControl[0].ice3;
    const ice4 = data.EtcControl[0].ice4;
    const previousPage = () => {
        changeToPage(7, 1);
      };
      const nextPage = () => {
          changeToPage(9);
      };
  return (
    <div className='EtcControl'>
       <div className="backBtn">
        <img
          src={backBtn}
          alt="backBtn"
          className="backBtnImg"
          onClick={previousPage}
        />
        <p className="backBtnText">{backBtnText}</p>
      </div>
      <img src={road} alt="road" className='EtcControl-road'/>
      <p className="EtcControlTitle title">{title}</p>
      <div className='ice-container'>
        <img className='little-ice' src={ice2} alt="ice2" />
        <img className='big-ice' src={ice1} alt="ice1" />
        <img className='big-ice' src={ice3} alt="ice3" />
        <img className='little-ice left-corner-ice' src={ice4} alt="ice4" />
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

export default EtcControl
