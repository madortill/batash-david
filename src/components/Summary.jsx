import React from 'react'
import { useData } from "../context/DataContext";
import { useState} from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "../style/Summary.css";
import backBtn from "../assets/images/backBtn.svg";
import galGalgal from "../assets/images/galGalgal.png";

function Summary({changeToSection}) {
    const { data } = useData();
    const navigate = useNavigate();
  const nextBtn = data.general[1].text;
  const backBtnText = data.general[0].text;
  const title = data.Summary[0].title;
  const text1 = data.Summary[0].text1;
  const text2 = data.Summary[0].text2;
  const text3 = data.Summary[0].text3;
  const text4 = data.Summary[0].text4;
  const text5 = data.Summary[0].text5;
  const [page, setPage] = useState(0);
  const previousPage = () => {
    changeToSection(4, true);
  };
  const nextPage = () => {
    if (page === 0) {
        setPage(1)
    } else {
        navigate("/end");
    }
  };
  return (
    <div>
        <div className="backBtn">
        <img
          src={backBtn}
          alt="backBtn"
          className="backBtnImg"
          onClick={previousPage}
        />
        <p className="backBtnText">{backBtnText}</p>
      </div>
      <p className='title summary-title' >{title}</p>
      <div className='summary-text'>
        <span>{text1}</span>
        <span className='boldText'>{text2}</span>
        <span>{text3}</span>
        <span className='boldText'>{text4}</span>
        <span>{text5}</span>
      </div>
      {page === 1 && <div className="blur-background"></div>}
      { page === 1 &&<div className="galSummary galBubble">
        <img src={data.Summary[0].galSrc} className="galTechnicalBubble galHighlixRedBubble" alt="galBubble" />
        <img className="galTechnicalImg galHighlixRed" src={galGalgal} alt="galGalgal" />
      </div>}
      <button
        className="nextBtn nextBtnSummary"
        onClick={nextPage}
      >
        {nextBtn}
      </button>
    </div>
  )
}

export default Summary
