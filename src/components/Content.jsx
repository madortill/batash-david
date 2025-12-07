import React from 'react'
import "../style/Content.css";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import ContentStart from "./ContentStart";
import NavBar from "./NavBar";
import KnowCar from './KnowCar';
import Defender from './Defender';


function Content() {
    const [page, setPage] = useState(0);
    const [navSection, setNavSection] = useState(0);
    const [knowCarLastPage, setKnowCarLastPage] = useState(0);
    const handleChangeSection = (newPage) => {
      if (newPage === 4) {
        setPage(0);
        return;
      }
      setPage(newPage);

      setNavSection(prev => {
        if (newPage > prev) {
          return newPage; 
        }
        return prev; 
      });
  
      };
  return (
    <>
      {page === 0 && <ContentStart changeToSection={handleChangeSection}/>}
      {page === 1 && <KnowCar changeToSection={handleChangeSection}  lastPage={knowCarLastPage}
          setLastPage={setKnowCarLastPage} />}
      {page === 2 && <Defender changeToSection={handleChangeSection} />}
      {page !== 0 && <NavBar navSection={navSection} setNavSection={setNavSection} />}
    </>
  )
}

export default Content
