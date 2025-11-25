import React from 'react'
import { useState } from "react";
import { useData } from "../context/DataContext";
import "../style/Navbar.css";

import TiresNavbar from "./TiresNavbar";

function NavBar() {
  return (
    <>
    <div className='navbar-wrapper'>
      <TiresNavbar contentStart={false}/>
    </div>
    </>
  )
}

export default NavBar
