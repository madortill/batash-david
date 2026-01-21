import React, { useState } from "react";
import "../style/Highlix.css";
import { useData } from "../context/DataContext";
import backBtn from "../assets/images/backBtn.svg";
import powerOff from "../assets/images/powerOff-img.png";
import air from "../assets/images/air-conditioner.png";
import voltage from "../assets/images/voltage-img.png";
import galGalgal from "../assets/images/galGalgal.png";

function CarSystem({ changeToPage }) {
  const { data } = useData();

  const nextBtn = data.general[1].text;
  const backBtnText = data.general[0].text;
  const { title, buttons, galSrc } = data.CarSystem[0];

  const [activeButton, setActiveButton] = useState(null);
  const [visitedButtons, setVisitedButtons] = useState([]);

  const canContinue = visitedButtons.length === buttons.length;

  const handleButtonClick = (id) => {
    setActiveButton(id);

    setVisitedButtons((prev) => (prev.includes(id) ? prev : [...prev, id]));
  };

  const previousPage = () => {
    changeToPage(4, true);
  };

  const nextPage = () => {
    if (canContinue) {
      changeToPage(6);
    }
  };

  return (
    <div className="CarSystem">
      {/* חזור */}
      <div className="backBtn">
        <img
          src={backBtn}
          alt="backBtn"
          className="backBtnImg"
          onClick={previousPage}
        />
        <p className="backBtnText">{backBtnText}</p>
      </div>

      <p className="title title-highlixVideo">{title}</p>

      {/* כפתורים */}
      <div className="system-btn-container">
        <div className="system-btn">
          <p>{buttons[0].title}</p>
          <img
            src={powerOff}
            alt="powerOff"
            className="system-btn-img"
            onClick={() => handleButtonClick(0)}
          />
        </div>

        <div className="system-btn">
          <p>{buttons[1].title}</p>
          <img
            src={air}
            alt="air"
            className="system-btn-img"
            onClick={() => handleButtonClick(1)}
          />
        </div>
        <div className="system-btn">
          <p>{buttons[2].title}</p>
          <img
            src={voltage}
            alt="air"
            className="system-btn-img"
            onClick={() => handleButtonClick(2)}
          />
        </div>
      </div>

      {/* בועה */}
      <div className="galCarSystem galBubble">
        <img src={galSrc} className="galTechnicalBubble" alt="galBubble" />
        <img className="galTechnicalImg" src={galGalgal} alt="galGalgal" />
      </div>
      {activeButton !== null && <div className="blur-background"></div>}
      {activeButton !== null && (
        <div className="system-text-box">
          <button className="close-btn" onClick={() => setActiveButton(null)}>
            X
          </button>

          <h3>{buttons[activeButton].title2}</h3>

          <div className="system-text-content">
            <p>{buttons[activeButton].text}</p>
            <img
              src={buttons[activeButton].img}
              alt={buttons[activeButton].title2}
            />
            {/* Placeholder לתמונה */}
            {/* <div className="system-image-placeholder">תמונה</div> */}
          </div>
        </div>
      )}

      {/* הבא */}
      <button
        className={`nextBtn ${canContinue ? "" : "nextBtnDisable"}`}
        onClick={nextPage}
      >
        {nextBtn}
      </button>
    </div>
  );
}

export default CarSystem;
