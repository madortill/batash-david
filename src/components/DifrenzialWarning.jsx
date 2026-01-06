import React from 'react'
import { useState } from "react";
import "../style/Defender.css";
import { useData } from "../context/DataContext";
import backBtn from "../assets/images/backBtn.svg";

function DifrenzialWarning({changeToPage, startPage}) {
    const [page, setPage] = useState(startPage);
    const { data } = useData();
  const nextBtn = data.general[1].text;
  const backBtnText = data.general[0].text;
  const previousPage = () => {
    if (page === 0) {
        changeToPage(4);
      } else {
        setPage(0);
      }
  };
  const nextPage = () => {
    if (page === 0) {
        setPage(1);
      } else {
        changeToPage(6);
      }
  };
  return (
    <div className='DifrenzialWarning'>
      <div className="backBtn">
        <img
          src={backBtn}
          alt="backBtn"
          className="backBtnImg"
          onClick={previousPage}
        />
        <p className="backBtnText">{backBtnText}</p>
      </div>
      <button className="nextBtn" onClick={nextPage}>
        {nextBtn}
      </button>
    </div>
  )
}

export default DifrenzialWarning
