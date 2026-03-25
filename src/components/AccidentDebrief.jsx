import React from "react";
import { useData } from "../context/DataContext";
import { useState, useEffect } from "react";
import "../style/Accident.css";
import backBtn from "../assets/images/backBtn.svg";
import galGalgal from "../assets/images/galGalgal.png";
import AccidentSvg from "./AccidentSvg";

function AccidentDebrief({ changeToSection, changeToPage }) {
  const TARGETS = ["bomb", "rocks", "mud", "flip"];
  const [clickedItems, setClickedItems] = useState([]);
  const allClicked = clickedItems.length === TARGETS.length;

  const handleItemClick = (id) => {
    if (!clickedItems.includes(id)) {
      setClickedItems((prev) => [...prev, id]);
    }

    setActiveTarget(id);
    setModalStep(0);
    setHasReachedLastStep(false);
  };

  useEffect(() => {
    clickedItems.forEach((id) => {
      const el = document.querySelector(`g[data-id="${id}"]`);
      if (el) el.classList.add("disabled");
    });
  }, [clickedItems]);

  const { data } = useData();
  const nextBtn = data.general[1].text;
  const backBtnText = data.general[0].text;
  const galSrc = data.AccidentDebrief[0].galSrc;

  const [activeTarget, setActiveTarget] = useState(null);
  const [modalStep, setModalStep] = useState(0);
  const [hasReachedLastStep, setHasReachedLastStep] = useState(false);

  const steps =
    activeTarget !== null
      ? data.AccidentDebrief[0].popups[activeTarget].steps
      : [];

  const currentStep = steps[modalStep] || {};

  const hasMultipleSteps = steps.length > 1;
  const isLastStep = modalStep === steps.length - 1;

  const showCloseButton =
    activeTarget !== null && (!hasMultipleSteps || hasReachedLastStep);

  const previousPage = () => {
    changeToPage(0);
  };

  const nextPage = () => {
    changeToSection(5);
  };

  return (
    <div className="AccidentDebrief">
      <div className="backBtn">
        <img
          src={backBtn}
          alt="backBtn"
          className="backBtnImg"
          onClick={previousPage}
        />
        <p className="backBtnText">{backBtnText}</p>
      </div>

      <div className="AccidentSvg-wrapper">
        <AccidentSvg
          onClick={(e) => {
            const group = e.target.closest("g[data-id]");
            if (!group) return;

            const id = group.dataset.id;
            handleItemClick(id);
          }}
          className="accident-svg"
        />
      </div>

      <div className="galAccidentDebrief galBubble">
        <img src={galSrc} className="galTechnicalBubble" alt="galBubble" />
        <img className="galTechnicalImg" src={galGalgal} alt="galGalgal" />
      </div>

      <button
        className={`nextBtn ${allClicked ? "" : "nextBtnDisable"}`}
        onClick={allClicked ? nextPage : undefined}
      >
        {nextBtn}
      </button>

      {activeTarget !== null && (
        <>
          <div className="blur-background" />

          <div className="accident-modal">
            {showCloseButton && (
              <button
                className="close-btn"
                onClick={() => {
                  setActiveTarget(null);
                  setModalStep(0);
                  setHasReachedLastStep(false);
                }}
              >
                X
              </button>
            )}

            <h3>{currentStep.title}</h3>

            <div className="modal-content">
              {currentStep.text && <p>{currentStep.text}</p>}


              {currentStep.images && currentStep.images.length > 0 && (
                <div className={`modal-images images-${currentStep.images.length}`}>
                  {currentStep.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${currentStep.title || "popup"} ${index + 1}`}
                      className="modal-image"
                    />
                  ))}
                </div>
              )}
            </div>

            <div className="modal-nav">
              {modalStep > 0 && (
                <button onClick={() => setModalStep((s) => s - 1)}>▶</button>
              )}

              {modalStep < steps.length - 1 && (
                <button
                  onClick={() => {
                    setModalStep((s) => {
                      const next = s + 1;
                      if (next === steps.length - 1) {
                        setHasReachedLastStep(true);
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
        </>
      )}
    </div>
  );
}

export default AccidentDebrief;