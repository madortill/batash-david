import React from 'react'
import { useState } from "react";
import "../style/Highlix.css";
import { useData } from "../context/DataContext";
import backBtn from "../assets/images/backBtn.svg";
import galGalgal from "../assets/images/galGalgal.png";

function HighlixVideo({startPage, changeToPage}) {
    const [page, setPage] = useState(startPage);
    const [isVideoEnded, setIsVideoEnded] = useState(false);
  const { data } = useData();
  const nextBtn = data.general[1].text;
  const backBtnText = data.general[0].text;
  const titleMain = data.HighlixVideo[0].title;
  const VideoSrc = data.HighlixVideo[0].video;
  const titleText = data.HighlixVideo[1].title;
  const text = data.HighlixVideo[1].text;
  const previousPage = () => {
    if (page === 0) {
      changeToPage(0);
    } else {
      setPage(page - 1);
    }
  };
  const nextPage = () => {
    if (isVideoEnded) {  
        if (page === 2) {
            changeToPage(2);
        } else {
            setPage(page + 1);
        }
    }
  };
  return (
    <div className='HighlixVideo'>
      <div className="backBtn">
        <img
          src={backBtn}
          alt="backBtn"
          className="backBtnImg"
          onClick={previousPage}
        />
        <p className="backBtnText">{backBtnText}</p>
      </div>
      <p className="title title-highlixVideo">{page === 1 ? titleText : titleMain}</p>
      {page === 0 && <video className="defenderVideoSrc" src={VideoSrc}  onEnded={() => setIsVideoEnded(true)}  alt="highlixVideo"  controls autoPlay muted ></video>}
      {page === 1 && <div className="highlix-video-text-container">
        <p>{text}</p>
        </div>}
        { page === 1 &&<div className="galDefenderVideo galBubble">
        <img src={data.HighlixVideo[1].galSrc} className="galTechnicalBubble" alt="galBubble" />
        <img className="galTechnicalImg" src={galGalgal} alt="galGalgal" />
      </div>}
        { page === 2 &&<div className="galhighlixVideo galBubble">
        <img src={data.HighlixVideo[2].galSrc} className="galTechnicalBubble galHighlixRedBubble" alt="galBubble" />
        <img className="galTechnicalImg galHighlixRed" src={galGalgal} alt="galGalgal" />
      </div>}
      
      <button className={`nextBtn ${isVideoEnded ? "" : "nextBtnDisable"}`} onClick={nextPage}>
        {nextBtn}
      </button>
    </div>
  )
}

export default HighlixVideo
