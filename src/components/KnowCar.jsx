import React from 'react'
import "../style/KnowCar.css";
import { useState, useEffect } from "react";
import Introduction from './Introduction';
import TechnicalData from './TechnicalData';

function KnowCar({ changeToSection, lastPage, setLastPage }) {
  const [page, setPage] = useState(lastPage);
  const [startPage, setStartPage] = useState(0);
    const handleChangePage = (data) => {
      setStartPage(1);
      setPage(data);
      setLastPage(data);
    };
    useEffect(() => {
      setPage(lastPage);
    }, [lastPage]);
  return (
    <div className='KnowCar'>
      {page == 0 && <Introduction startPage={startPage}  onSendData={handleChangePage}/>}
      {page == 1 && <TechnicalData  changeToSection={changeToSection} setPage={setPage}/>}
    </div>
  )
}

export default KnowCar
