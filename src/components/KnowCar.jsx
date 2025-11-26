import React from 'react'
import "../style/KnowCar.css";
import { useState } from "react";
import Introduction from './Introduction';
import TechnicalData from './TechnicalData';

function KnowCar({ changeToSection }) {
    const [page, setPage] = useState(0);
    const [startPage, setStartPage] = useState(0);
    const handleChangePage = (data) => {
      setStartPage(1);
      setPage(data);
      
    };
  return (
    <>
      {page == 0 && <Introduction startPage={startPage}  onSendData={handleChangePage}/>}
      {page == 1 && <TechnicalData  changeToSection={changeToSection} setPage={setPage}/>}
    </>
  )
}

export default KnowCar
