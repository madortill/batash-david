import React from 'react'
import { useState } from "react";
import "../style/Defender.css";
import { useData } from "../context/DataContext";
import backBtn from "../assets/images/backBtn.svg";

function ChangeGear({changeToPage}) {
    const { data } = useData();
  const nextBtn = data.general[1].text;
  const backBtnText = data.general[0].text;
  const title = data.ChangeGear[0].title;
  const tableData = data.ChangeGear[0].tableData;
  const previousPage = () => {
    changeToPage(5, true);
  };
  const nextPage = () => {
      changeToPage(7);
  };
  return (
    <div className='changeGear'>
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
      <table className="hover-table hover-table-Gear">
        <tbody>
          {tableData.map((row, rowIdx) => (
            <tr key={rowIdx}>
              {row.map((cellText, colIdx) => (
                <td
                  key={colIdx}
                  className={`
                    ${rowIdx === 0 ? "first-row" : ""}
                    ${rowIdx === 0 || colIdx === 0 ? "bold-cell" : ""}
                  `}
                >
                  {cellText}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button
        className="nextBtn"
        onClick={nextPage}
      >
        {nextBtn}
      </button>
    </div>
  )
}

export default ChangeGear
