import React from "react";
import "../style/Start.css";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useData } from "../context/DataContext";

import backBtn from "../assets/images/backBtn.svg";
import galGalgal from "../assets/images/galGalgal.png";
import narration from "../assets/images/narration.svg";
import narrationNon from "../assets/images/narrationNon.svg";

function InfoPage({ onSendData }) {
  const { data, switchJSON } = useData();

  const infoTitle = data.infoPage[0].text;
  const infoText = data.infoPage[1].text;
  const languageBtn = data.infoPage[2].text;
  const backBtnInfo = data.infoPage[3].text;
  const nextBtnInfo = data.infoPage[4].text;
  const nextBtnDisableInfo = data.infoPage[5].text;
  const narrationText = data.infoPage[6].text;
  const narrationNonText = data.infoPage[7].text;
  const narrationExplain = data.infoPage[8].text;
  const backBtnText = data.general[0].text;
  const nextBtn = data.general[1].text;

  const previousPage = () => {
    onSendData(0);
  };

  const nextPage = () => {
    onSendData(2);
  }

  return (
    <div className="InfoPage">
      <div className="backBtn">
        <img
          src={backBtn}
          alt="backBtn"
          className="backBtnImg"
          onClick={previousPage}
        />
        <p className="backBtnText">{backBtnText}</p>
      </div>
      <div className="info-container">
        <p className="info-title">{infoTitle}</p>
        <p className="info-text">
          {infoText.split("\n").map((line, idx) => (
            <span key={idx} style={{ display: "block", marginBottom: "1rem" }}>
              {line}
              <br />
            </span>
          ))}
        </p>
        <button className="languageBtn">{languageBtn}</button>
        <img src={galGalgal} alt="galGalgal" className="galGalgalInfo" />
        <div className="infoBtnContainer">
          <div className="infoBtnExplain">
            <img
              src={backBtn}
              alt="backBtn"
              className="backBtnInfo"
              onClick={previousPage}
            />
            <p className="backBtnInfoText">{backBtnInfo}</p>
          </div>
          <div className="infoBtnExplain">
            <button className="nextBtn nextBtnInfo">{nextBtn}</button>
            <p className="backBtnInfoText">{nextBtnInfo}</p>
          </div>
          <div className="infoBtnExplain">
            <button className="nextBtn nextBtnDisable nextBtnInfo">
              {nextBtn}
            </button>
            <p className="backBtnInfoText">
              {nextBtnDisableInfo.split("\n").map((line, idx) => (
                <span key={idx}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          </div>
        </div>
          <div className="narrationContainer">
            <button className="narrationBtnInfo" onClick={nextPage}>
              <img src={narration} alt="narration" />
              {narrationText}
            </button>
            <button className="narrationBtnInfo" onClick={nextPage}>
              <img src={narrationNon} alt="narrationNon" />
              {narrationNonText}
            </button>
          </div>
          <p className="narrationExplain">{narrationExplain}</p>
      </div>
    </div>
  );
}

export default InfoPage;
