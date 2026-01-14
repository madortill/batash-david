import React from 'react'
import { useState } from "react";
import "../style/Highlix.css";
import { useData } from "../context/DataContext";
import backBtn from "../assets/images/backBtn.svg";

function FrontSeren({ changeToPage}) {
    const [didPress, setDidPress] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const { data } = useData();
  const nextBtn = data.general[1].text;
  const backBtnText = data.general[0].text;
  const tableData = data.FrontSeren[1].tableData;
  const title = data.FrontSeren[0].title;
  const text = data.FrontSeren[0].text;
  const previousPage = () => {
      changeToPage(1, true);
  };
  const nextPage = () => {
    if (didPress) {  
            changeToPage(3);
    }
  };
  return (
    <div className='frontSeren'>
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
      <div className='highlix-video-text-container'>
        <p>{text}</p>
        <button
          className="frontSeren-info-btn"
          onClick={() => {
            setIsOpen((prev) => !prev);
            setDidPress(true);
          }}
        >
          i
        </button>
      </div>
      {isOpen && (
        <div className='serenPopup'>
            <p className='xbtn xbtn-seren' onClick={() => {
            setIsOpen((prev) => !prev);
          }}>X</p>
          <table className="hover-table hover-table-highlix">
          <tbody>
            {tableData.map((row, rowIdx) => (
              <tr key={rowIdx}>
                {row.map((cellText, colIdx) => (
                  <td
                    key={colIdx}
                    className={`
                      ${rowIdx === 0 ? "first-row" : ""}
                      ${rowIdx === 0 ? "bold-cell" : ""}
                    `}
                  >
                    {cellText}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        )}
      <button className={`nextBtn ${didPress ? "" : "nextBtnDisable"}`} onClick={nextPage}>
        {nextBtn}
      </button>
    </div>
  )
}

export default FrontSeren
