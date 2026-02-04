import React from "react";
import { useData } from "../context/DataContext";
import { useState } from "react";
import galGalgal from "../assets/images/galGalgal.png";
import road from "../assets/images/end-road.svg";
import "../style/End.css";

function End() {
  const { data } = useData();
  const btnText = data.End[0].btnText;
  const warning = data.End[0].warning;
  return (
    <div className="end">
      <img className="end-warning" src={warning} alt="warning" />
      <img className="end-road" src={road} alt="road" />
      <div className="galEnd galBubble">
        <img
          src={data.End[0].galSrc}
          className="galTechnicalBubble galHighlixRedBubble"
          alt="galBubble"
        />
        <img
          className="galTechnicalImg galEndImg"
          src={galGalgal}
          alt="galGalgal"
        />
      </div>
      <button
        className="nextBtn nextBtnEnd"
        onClick={() => {
          console.log("hi");
          window.location.href = "https://madortill.github.io/batash-package/";
        }}
      >
        {btnText}
      </button>
    </div>
  );
}

export default End;
