import React from 'react'
import { useState } from "react";
import { useData } from "../context/DataContext";
import "../style/Accident.css";
import AccidentStart from './AccidentStart';
import AccidentDebrief from './AccidentDebrief';

function Accident({ changeToSection, startingPage }) {
    const [page, setPage] = useState(0);
    const { data } = useData();
    const handleChangePage = (targetPage) => {
        setPage(targetPage);
      };
    
      const handleChangeSection = (section, returnToLast = false) => {
        if (changeToSection) changeToSection(section, returnToLast);
      };
  return (
    <div className='Accident'>
     {page == 0 && <AccidentStart changeToPage={handleChangePage} changeToSection={handleChangeSection}/>}
    {page == 1 && <AccidentDebrief changeToPage={handleChangePage} changeToSection={handleChangeSection}/>}
    </div>
  )
}

export default Accident
