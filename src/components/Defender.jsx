import React from "react";
import { useState } from "react";
import "../style/Defender.css";
import DefenderStart from "./DefenderStart";
import DefenderVideo from "./DefenderVideo";

function Defender({ changeToSection }) {
  const [page, setPage] = useState(0);
  const [videoStartPage, setVideoStartPage] = useState(0);
  const handleChangePage = (data) => {
    if (data === 4) {
      setPage(0);
    } else {
      setPage(data);
    }
  };

  const handleChangeSection = (section) => {
    if (changeToSection) changeToSection(section);
  };

  return (
    <>
      {page == 0 && (
        <DefenderStart
          changeToPage={handleChangePage}
          changeToSection={handleChangeSection}
        />
      )}
      {page == 1 && (
        <DefenderVideo
          startPage={videoStartPage}
          changeToPage={handleChangePage}
          changeToSection={handleChangeSection}
        />
      )}
    </>
  );
}

export default Defender;
