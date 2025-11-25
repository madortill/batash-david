import React from 'react'
import "../style/Content.css";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import ContentStart from "./ContentStart";
import NavBar from "./NavBar";
import KnowCar from './KnowCar';


function Content() {
    const [page, setPage] = useState(0);
    const handleChangeSection = (data) => {
        if (data === 4) {
          setPage(0);
        } else {
          setPage(data);
        }
      };
  return (
    <>
      {page === 0 && <ContentStart changeToSection={handleChangeSection}/>}
      {page === 1 && <KnowCar changeToSection={handleChangeSection}/>}
      {page !== 0 && <NavBar/>}
    </>
  )
}

export default Content
