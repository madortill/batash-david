import React from 'react'
import "../style/KnowCar.css";
import { useState } from "react";

function Introduction() {
    const [page, setPage] = useState(0);
  return (
    <>
      <div className='intoduction-container'>
        {page === 0 && <div className='intro-first'>
            <p className='intro-text'></p>
            <p className='intro-note'></p>
            </div>}
      </div>
    </>
  )
}

export default Introduction
