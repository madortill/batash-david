import React from 'react'
import "../style/KnowCar.css";
import { useState } from "react";
import Introduction from './Introduction';

function KnowCar({ changeToSection }) {
    const [page, setPage] = useState(0);
    const handleChangePage = (data) => {
      if (data === 4) {
        setPage(0);
      } else {
        setPage(data);
      }
      
    };
  return (
    <>
      {page == 0 && <Introduction  onSendData={handleChangePage}/>}
    </>
  )
}

export default KnowCar
