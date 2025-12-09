import React from "react";
import { useState } from "react";
import "../style/Defender.css";
import DefenderStart from "./DefenderStart";
import DefenderVideo from "./DefenderVideo";
import DefenderTransfer from "./DefenderTransfer";

function Defender({ changeToSection }) {
  const [page, setPage] = useState(0);
  const [startPage, setStartPage] = useState(0);
  const pagesMap = {
    0: 0, 
    1: 1,
    2: 0 
  };
  const handleChangePage = (targetPage, returnToLast = false) => {
    setPage(targetPage);
    if (returnToLast) {
      setStartPage(pagesMap[targetPage]);
    } else {
      setStartPage(0);
    }
  };

  const handleChangeSection = (section) => {
    if (changeToSection) changeToSection(section);
  };

  return (
    <div className="Defender">
      {page == 0 && (
        <DefenderStart
          changeToPage={handleChangePage}
          changeToSection={handleChangeSection}
        />
      )}
      {page == 1 && (
        <DefenderVideo
          startPage={startPage}
          changeToPage={handleChangePage}
          changeToSection={handleChangeSection}
        />
      )}
      {page == 2 && (
        <DefenderTransfer
          changeToPage={handleChangePage}
          changeToSection={handleChangeSection}
        />
      )}
    </div>
  );
}

export default Defender;
