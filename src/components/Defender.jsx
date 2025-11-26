import React from 'react'
import { useState } from "react";
import "../style/Defender.css";
import DefenderStart from './DefenderStart';

function Defender({ changeToSection }) {
    const [page, setPage] = useState(0);
    const [startPage, setStartPage] = useState(0);
    const handleChangePage = (data) => {
      setStartPage(1);
      if (data === 4) {
        setPage(0);
      } else {
        setPage(data);
      }
    };

    const handleChangeSection = (section) => {
        if (changeToSection) changeToSection(section); // קורא לסבא
      };
    
  return (
    <>
      <DefenderStart changeToPage={handleChangePage} changeToSection={handleChangeSection}/>
    </>
  )
}

export default Defender
