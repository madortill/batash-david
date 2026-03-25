import React from 'react'
import { useState } from "react";
import "../style/Defender.css";
import { useData } from "../context/DataContext";
import backBtn from "../assets/images/backBtn.svg";
import galGalgal from "../assets/images/galGalgal.png";
import driverSeat from "../assets/images/driverSeat.svg";
import battery from "../assets/images/battery-img.svg";
import batteryImg1 from "../assets/images/battery1.jpg";
import batteryImg2 from "../assets/images/battery2.jpg";

function BatteryPlace({changeToPage}) {
    const [page, setPage] = useState(0);
    const { data } = useData();
    const nextBtn = data.general[1].text;
    const backBtnText = data.general[0].text;
    const text = data.BatteryPlace[1].text;
    const previousPage = () => {
        changeToPage(9);
      };
      const nextPage = () => {
        changeToPage(11);
      };
      const galImg = {
        0: data.BatteryPlace[0].bubble,
        1: data.BatteryPlace[0].bubble1
      };
      const galBubble = galImg[page] || galImg[0];
  return (
    <div className='BatteryPlace'>
      <div className="backBtn">
        <img
          src={backBtn}
          alt="backBtn"
          className="backBtnImg"
          onClick={previousPage}
        />
        <p className="backBtnText">{backBtnText}</p>
      </div>
      <div className={`battery-content ${page === 0 ? "" : "battery-content2"}`}>
      {page !== 2 && <img src={driverSeat} alt="driverSeat" className={`driverSeat-battery ${page === 0 ? "animation" : ""}`} onClick={() => setPage(1)} />}
      {page == 1 && <img src={battery} alt="battery" className="battery-img animation" onClick={() => setPage(2)} />}
      </div>
      {page !== 2 &&<div
        className={`galBatteryPlace galBubble`}
      >
        <img src={galBubble} className="galTechnicalBubble" alt="galBubble" />
        <img className="galTechnicalImg" src={galGalgal} alt="galGalgal" />
      </div>}
      {page == 2 && <div className='batteyExplain'>
        <p>{text}</p>
        <img src={batteryImg1} className='batteryImg' alt="battery-img" />
        <img src={batteryImg2} className='batteryImg' alt="batteryImg" />
        </div>}
      <button
        className={`nextBtn ${page === 2 ? "" : "nextBtnDisable"}`}
        onClick={nextPage}
      >
        {nextBtn}
      </button>
    </div>
  )
}

export default BatteryPlace
