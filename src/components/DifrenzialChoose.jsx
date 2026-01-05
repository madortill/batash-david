import React from "react";
import { useState } from "react";
import "../style/Defender.css";
import { useData } from "../context/DataContext";
import backBtn from "../assets/images/backBtn.svg";
import warningSign from "../assets/images/warning-sign.svg";

function DifrenzialChoose({ onNext, onBack, screenData, screenId }) {
  const [page, setPage] = useState(0);
  const { data } = useData();
  const nextBtn = data.general[1].text;
  const backBtnText = data.general[0].text;
  const title = data.DifrenzialChoose[0].title;
  const { warningImg, content } = screenData;
  const bubble = data.DifrenzialChoose[0].bubble;
  const nextPage = () => {
    if (page === 2) {
      onNext();
    }
  };
  const previousPage = () => {
    onBack();
  };
  return (
    <div className="DifrenzialChoose">
      <div className="backBtn">
        <img
          src={backBtn}
          alt="backBtn"
          className="backBtnImg"
          onClick={previousPage}
        />
        <p className="backBtnText">{backBtnText}</p>
      </div>
      <p className="difrenzialChooseTitle">{title}</p>
      <div className={`roadBackground ${screenId === 0 ? "road-page-0" : ""}`}>
        {content.map((block, i) => (
          <p key={i}>
            {block.parts.map((part, j) => {
              const isLast = j === block.parts.length - 1;

              const content =
                part.type === "bold" ? (
                  <strong>{part.value}</strong>
                ) : part.type === "highlight" ? (
                  <span className="highlightText">{part.value}</span>
                ) : (
                  <span>{part.value}</span>
                );

              return (
                <React.Fragment key={j}>
                  {content}
                  {!isLast && " "}
                </React.Fragment>
              );
            })}
          </p>
        ))}
        <img
          src={warningSign}
          alt="warningSign"
          className="difrenzialChooseWarningSign"
          onClick={() => setPage(1)}
        />
        <img src={bubble} alt="bubble" className="difrenzialChooseBubble" />
      </div>
      <button
        className={`nextBtn ${page === 2 ? "" : "nextBtnDisable"}`}
        onClick={nextPage}
      >
        {nextBtn}
      </button>
      {(page === 1 || page === 3) && <div className="blur-background"></div>}
      {page === 1 && (
        <div className="warning1-container">
          <img className="warning1" src={warningImg} alt="warning1" />
          <p className="xbtn xbtn-difrenzialChoose" onClick={() => setPage(2)}>
            X
          </p>
        </div>
      )}
    </div>
  );
}

export default DifrenzialChoose;
