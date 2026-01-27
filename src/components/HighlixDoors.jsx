import React, { useState } from "react";
import "../style/Highlix.css";
import { useData } from "../context/DataContext";
import backBtn from "../assets/images/backBtn.svg";
import doorFront from "../assets/images/door-outside.png";
import doorBack from "../assets/images/doorBack.png";
import galGalgal from "../assets/images/galGalgal.png";

function HighlixDoors({ changeToPage, changeToSection }) {
  const { data } = useData();
  const nextBtn = data.general[1].text;
  const backBtnText = data.general[0].text;
  const { title, buttons, galSrc } = data.HighlixDoors[0];
  const [activeButton, setActiveButton] = useState(null);
  const [visitedButtons, setVisitedButtons] = useState([]);
  const [modalStep, setModalStep] = useState(0);
  const [hasSeenSecondStep, setHasSeenSecondStep] = useState(false);

  const canContinue = visitedButtons.length === buttons.length;

  const handleButtonClick = (id) => {
    setActiveButton(id);
    setModalStep(0);
    setHasSeenSecondStep(false); // 👈 איפוס חשוב

    setVisitedButtons((prev) => (prev.includes(id) ? prev : [...prev, id]));
  };

  const previousPage = () => {
    changeToPage(5);
  };

  const nextPage = () => {
    if (canContinue) {
        changeToSection(4);
    }
  };
  const hasMultipleSteps =
    activeButton !== null && buttons[activeButton].steps.length > 1;

  const showCloseButton =
    activeButton !== null && (!hasMultipleSteps || hasSeenSecondStep);
  return (
    <div className="HighlixDoors">
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

      <div className="door-btn-container">
        <img
          src={doorFront}
          alt="doorFront"
          className="door-btn-img"
          onClick={() => handleButtonClick(0)}
        />
        <img
          src={doorBack}
          alt="doorBack"
          className="door-btn-img"
          onClick={() => handleButtonClick(1)}
        />
      </div>

      <div className="galHighlixDoors galBubble">
        <img src={galSrc} className="galTechnicalBubble" alt="galBubble" />
        <img className="galTechnicalImg" src={galGalgal} alt="galGalgal" />
      </div>

      {activeButton !== null && <div className="blur-background"></div>}

      {activeButton !== null && (
        <div className="door-text-box">
          {/* כפתור סגירה – תמיד קיים */}
          {showCloseButton && (
            <button
              className="close-btn"
              onClick={() => {
                setActiveButton(null);
                setModalStep(0);
                setHasSeenSecondStep(false);
              }}
            >
              X
            </button>
          )}

          <h3>{buttons[activeButton].steps[modalStep].title}</h3>

          <div className="door-text-content">
            <p>{buttons[activeButton].steps[modalStep].text}</p>

            {buttons[activeButton].steps[modalStep].img && (
              <div className="door-image-placeholder">
                <img
                  src={buttons[activeButton].steps[modalStep].img}
                  alt={buttons[activeButton].steps[modalStep].title}
                />
              </div>
            )}
          </div>

          {/* ניווט בין שלבים */}
          <div className="door-steps-nav">
            {/* חזור */}
            {modalStep > 0 && (
              <button
                className="next-step-btn door-steps-prev"
                onClick={() => setModalStep((prev) => prev - 1)}
              >
                ▶
              </button>
            )}

            {/* קדימה */}
            {modalStep < buttons[activeButton].steps.length - 1 && (
              <button
                className="next-step-btn door-steps-next"
                onClick={() => {
                  setModalStep((prev) => {
                    const next = prev + 1;
                    if (next > 0) {
                      setHasSeenSecondStep(true);
                    }
                    return next;
                  });
                }}
              >
                ◀
              </button>
            )}
          </div>
        </div>
      )}
      <button
        className={`nextBtn ${canContinue ? "" : "nextBtnDisable"}`}
        onClick={nextPage}
      >
        {nextBtn}
      </button>
    </div>
  );
}

export default HighlixDoors;
