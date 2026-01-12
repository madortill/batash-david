import React from "react";
import { useState } from "react";
import "../style/Defender.css";
import { useData } from "../context/DataContext";
import backBtn from "../assets/images/backBtn.svg";
import galGalgal from "../assets/images/galGalgal.png";
import warningSign from "../assets/images/warning-sign.svg";
import lockImg from "../assets/images/lock-img.svg";
import lockImg1 from "../assets/images/lock-img1.svg";

function InnerLock({changeToPage}) {
    const [page, setPage] = useState(0);
  const { data } = useData();
  const nextBtn = data.general[1].text;
  const backBtnText = data.general[0].text;
  const title = data.InnerLock[0].title;
  const text = data.InnerLock[0].text;
  const bubble = data.InnerLock[0].bubble;
  const bubbleRed = data.InnerLock[0].bubbleRed;
  const previousPage = () => {
    changeToPage(8);
  };
  const nextPage = () => {
    changeToPage(10);
  };
  return (
    <div className="InnerLock">
      <div className="backBtn">
        <img
          src={backBtn}
          alt="backBtn"
          className="backBtnImg"
          onClick={previousPage}
        />
        <p className="backBtnText">{backBtnText}</p>
      </div>
      <p className="innerLockTitle title">{title}</p>
      <div className="lock-container">
      <img src={lockImg} alt="lockImg" className="innerLock-img" />
      <img src={lockImg1} alt="lockImg1" className="innerLock-img" />
      </div>
      <p className="innerLock-text">{text}</p>
      {page == 0 && <div className="innerLockWarningSign-container">
        <img src={bubble} alt="bubble" className="difrenzialWarningBubble" />
        <img
          src={warningSign}
          alt="warningSign"
          className="difrenzialWarningSign"
          onClick={() => setPage(1)}
        />
      </div>}
      {page === 1 && <div className="blur-background"></div>}
      {page == 1 && (
        <div className={`galInnerLock galBubble`}>
          <img src={bubbleRed} className="galTechnicalBubble" alt="galBubble" />
          <img className="galTechnicalImg" src={galGalgal} alt="galGalgal" />
        </div>
      )}
     <button
        className={`nextBtn innerLock-nextBtn ${page === 1 ? "" : "nextBtnDisable"}`}
        onClick={nextPage}
      >
        {nextBtn}
      </button>
    </div>
  );
}

export default InnerLock;
