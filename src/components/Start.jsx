import React from 'react'
import "../style/Start.css";
import { useState } from "react";
import StartPage from "./StartPage";
import InfoPage from "./InfoPage";

function Start() {
  const [page, setPage] = useState(0);

  const handleChangePage = (data) => {
    setPage(data);
  };

  return (
    <>
      {page === 0 && <StartPage onSendData={handleChangePage}/>}
      {page === 1 && <InfoPage onSendData={handleChangePage}/>}
    </>
  )
}

export default Start
