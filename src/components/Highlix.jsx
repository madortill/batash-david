import React from 'react'
import { useState } from "react";
import { useData } from "../context/DataContext";
import "../style/Highlix.css";
import HighlixStart from "./HighlixStart";
import HighlixVideo from './HighlixVideo';

function Highlix({ changeToSection, startingPage }) {
    const [page, setPage] = useState(0);
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

  const handleChangeSection = (section, returnToLast = false) => {
    if (changeToSection) changeToSection(section, returnToLast);
  };
  return (
    <div className='Highlix'>
     {page == 0 && <HighlixStart changeToPage={handleChangePage} changeToSection={handleChangeSection} />}
     {page == 1 && <HighlixVideo changeToPage={handleChangePage} startPage={startPage} />}
    </div>
  )
}

export default Highlix
