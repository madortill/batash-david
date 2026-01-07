import React from "react";
import { useState } from "react";
import { useData } from "../context/DataContext";
import "../style/Defender.css";
import DefenderStart from "./DefenderStart";
import DefenderVideo from "./DefenderVideo";
import DefenderTransfer from "./DefenderTransfer";
import DifrenzialChoose from "./DifrenzialChoose";
import ChangeGear from "./ChangeGear";
import DifrenzialWarning from "./DifrenzialWarning";
import EmergencyStart from "./EmergencyStart";

function Defender({ changeToSection }) {
  const [page, setPage] = useState(7);
  const [startPage, setStartPage] = useState(0);
  const { data } = useData();
  const pagesMap = {
    0: 0,
    1: 1,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 1
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
      {page == 3 && (
        <DifrenzialChoose
          onNext={() => handleChangePage(4)}
          screenId={0}
          screenData={data.DifrenzialChoose[0].screens[0]}
          onBack={() => handleChangePage(2, true)}
        />
      )}
      {page == 4 && (
        <DifrenzialChoose
          onNext={() => handleChangePage(5)}
          onBack={() => handleChangePage(3, true)}
          screenId={1}
          screenData={data.DifrenzialChoose[0].screens[1]}
        />
      )}
      {page == 5 && (<DifrenzialWarning changeToPage={handleChangePage} startPage={startPage}/>)}
      {page == 6 && (<ChangeGear changeToPage={handleChangePage}/>)}
      {page == 7 && (<EmergencyStart changeToPage={handleChangePage} startPage={startPage}/>)}
    </div>
  );
}

export default Defender;
