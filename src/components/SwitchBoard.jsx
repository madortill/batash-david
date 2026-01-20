import React, { useState } from "react";
import "../style/Highlix.css";
import { useData } from "../context/DataContext";
import backBtn from "../assets/images/backBtn.svg";
import galGalgal from "../assets/images/galGalgal.png";

function SwitchBoard({ changeToPage }) {
  const { data } = useData();

  const nextBtn = data.general[1].text;
  const backBtnText = data.general[0].text;

  const boardData = data.SwitchBoard[0];
  const { title, switches, texts, galSrc } = boardData;

  const TOTAL_SWITCHES = switches.length;

  // switches שנלחצו לפחות פעם אחת
  const [visitedSwitches, setVisitedSwitches] = useState([]);
  // switch שנלחץ עכשיו (לטקסט)
  const [activeSwitch, setActiveSwitch] = useState(null);

  const allPressed = visitedSwitches.length === TOTAL_SWITCHES;

  const handleSwitchPressed = (index) => {
    // תמיד פותח את הטקסט המתאים
    setActiveSwitch(index);

    // מוסיף לרשימה אם עוד לא היה
    setVisitedSwitches((prev) => {
      if (prev.includes(index)) return prev;
      return [...prev, index];
    });
  };

  const previousPage = () => {
    changeToPage(2);
  };

  const nextPage = () => {
    if (allPressed) {
      changeToPage(4);
    }
  };

  return (
    <div className="SwitchBoard">
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

      {/* Switches */}
      <div className="switches-container">
        {switches.map((src, index) => (
          <div key={index} className="switch-wrapper">
            <img
              key={index}
              src={src}
              alt={`switch-${index + 1}`}
              className="switch-img"
              onClick={() => handleSwitchPressed(index)}
            />
            {/* Text box */}
            {activeSwitch === index && data.SwitchBoard[0].switchesText?.[index] && (
              <div className="switch-text-box">
                <div className="switch-number">{6- activeSwitch}</div>

                <div className="switch-text-content">
                  <p className="switch-title">
                    {data.SwitchBoard[0].switchesText[activeSwitch].title}
                  </p>

                  <p className="switch-text">
                    {data.SwitchBoard[0].switchesText[activeSwitch].text}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="galSwitchBoard galBubble">
        <img src={galSrc} className="galTechnicalBubble" alt="galBubble" />
        <img className="galTechnicalImg" src={galGalgal} alt="galGalgal" />
      </div>

      <button
        className={`nextBtn ${allPressed ? "" : "nextBtnDisable"}`}
        onClick={nextPage}
      >
        {nextBtn}
      </button>
    </div>
  );
}

export default SwitchBoard;
