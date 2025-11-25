import React from 'react'
import "../style/KnowCar.css";
import { useState } from "react";
import Introduction from './Introduction';

function KnowCar({ changeToSection }) {
    const [page, setPage] = useState(0);
  return (
    <>
      {page == 0 && <Introduction/>}
    </>
  )
}

export default KnowCar
