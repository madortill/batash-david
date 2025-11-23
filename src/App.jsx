import { useState } from 'react'
import './style/App.css'
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Start from "./components/Start"

import til from "./assets/images/til.svg";
import bahad6 from "./assets/images/bahad6.png";

function App() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
      <div className="symbols">
        <img src={bahad6} alt="bahd6" className="bahad6" />
        <img src={til} alt="til" className="til" />
      </div>
      <Routes>
        <Route path="/" element={<Start />} />  
      </Routes>
    </>
  )
}

export default App
