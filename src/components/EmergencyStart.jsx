import React from "react";
import { useState } from "react";
import "../style/Defender.css";
import { useData } from "../context/DataContext";
import backBtn from "../assets/images/backBtn.svg";
import galGalgal from "../assets/images/galGalgal.png";
import emergency1 from "../assets/images/emergency1.svg";
import emergency2 from "../assets/images/emergency2.svg";
import emergency3 from "../assets/images/emergency3.svg";
import emergencyKey from "../assets/images/emergencyKey.svg";
import ignitionOff from "../assets/images/ignitionOff.svg";
import ignitionOn from "../assets/images/ignitionOn.svg";

function EmergencyStart({ changeToPage, startPage }) {
  const [page, setPage] = useState(startPage);
  const { data } = useData();
  const nextBtn = data.general[1].text;
  const backBtnText = data.general[0].text;
  const title = data.EmergencyStart[0].title;
  const text1 = data.EmergencyStart[0].text1;
  const text2 = data.EmergencyStart[0].text2;
  const text3 = data.EmergencyStart[0].text3;
  const text4 = data.EmergencyStart[0].text4;
  const text5 = data.EmergencyStart[0].text5;
  const text6 = data.EmergencyStart[0].text6;
  const startCar = data.EmergencyStart[0].startCar;
  const galImg = {
    0: data.EmergencyStart[0].gal1,
    1: data.EmergencyStart[0].gal2,
    2: data.EmergencyStart[0].gal3,
    3: data.EmergencyStart[0].gal4,
    4: data.EmergencyStart[0].gal5,
  };
  const galBubble = galImg[page] || galImg[0];
  const previousPage = () => {
    if (page === 0) {
      changeToPage(6);
    } else {
      setPage(0);
    }
  };
  const nextPage = () => {
    if (page === 0) {
      setPage(1);
    } else if (page === 4 ){
      changeToPage(8);
    }
  };
  const [isIgnited, setIgnited] = useState(false);
  const [isTurned, setTurned] = useState(false);
  const nextStep = () => {
    if (isIgnited || isTurned) {
        setTimeout(() => {
            setPage(4);
        }, 1000);
    }
  };

  return (
    <div className="EmergencyStart">
      <div className="backBtn">
        <img
          src={backBtn}
          alt="backBtn"
          className="backBtnImg"
          onClick={previousPage}
        />
        <p className="backBtnText">{backBtnText}</p>
      </div>
      {page === 0 && <p className="difrenzialChooseTitle">{title}</p>}
      {page === 0 && (
        <div className="EmergencyStartText">
          <span>{text1}</span>
          <span className="boldText">{text2}</span>
          <span>{text3}</span>
          <div className="EmergencyStartText-inner">
            <span className="boldText">{text4}</span>
            <span>{text5}</span>
            <span className="underlineText">{text6}</span>
          </div>
        </div>
      )}
      {(page === 1 || page === 4) && (
        <img
          src={emergency1}
          alt="emergency1"
          className="emergency-start-img"
        />
      )}
      {(page === 1 || page === 4) && (
        <img
          src={emergencyKey}
          alt="emergencyKey"
          className={`emergencyKey ${page === 1 ? "emergency-animation" : ""}`}
          onClick={() => setPage(2)}
        />
      )}
      {(page === 2 || page === 3 ) && (
        <div className="emergency-start-ignition">
          {" "}
          <img
            src={isTurned ? ignitionOn : ignitionOff}
            alt="ignition"
            className={`emergency-start-ignition-img ${
              !isTurned ? "emergency-animation" : ""
            }`}
            onClick={() => {
              setTurned(true);
              nextStep();
            }}
          />{" "}
          <p className="emergency-start-text">{startCar}</p>{" "}
        </div>
      )}
      {page === 2 && (
        <img
          src={isIgnited ? emergency3 : emergency2}
          alt="emergency2"
          className={`emergency-start-img2 ${
            !isIgnited ? "emergency-animation" : ""
          }`}
          onClick={() => {
            setIgnited(true);
            nextStep();
          }}
        />
      )}
      {page === 3 && (
        <img
          src={emergency2}
          alt="emergency2"
          className="emergency-start-img2 emergency-animation"
          onClick={() => setPage(4)}
        />
      )}
      <div
        className={`galEmergencyStart galBubble ${
          (page === 2|| page == 3) ? "galEmergencyStart-page2" : ""
        }`}
      >
        <img src={galBubble} className="galTechnicalBubble" alt="galBubble" />
        <img className="galTechnicalImg" src={galGalgal} alt="galGalgal" />
      </div>
      <button
        className={`nextBtn ${
          page === 0 || page === 4 ? "" : "nextBtnDisable"
        }`}
        onClick={nextPage}
      >
        {nextBtn}
      </button>
    </div>
  );
}

export default EmergencyStart;
