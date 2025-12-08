import React from "react";
import { useState } from "react";
import "../style/Defender.css";
import { useData } from "../context/DataContext";
import backBtn from "../assets/images/backBtn.svg";
import galGalgal from "../assets/images/galGalgal.png";

function DefenderTransfer({ changeToSection, changeToPage, startPage }) {
  const [page, setPage] = useState(startPage);
  const { data } = useData();
  const nextBtn = data.general[1].text;
  const backBtnText = data.general[0].text;
  const [isFinished, setIsFinished] = useState(false);

  const previousPage = () => {
    changeToPage(0);
  };
  const nextPage = () => {
    if (isFinished) {
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
      <button className="nextBtn" onClick={nextPage}>
        {nextBtn}
      </button>
    </>
  );
}

export default DefenderTransfer;
