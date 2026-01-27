import React from "react";
import "../style/Content.css";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import ContentStart from "./ContentStart";
import NavBar from "./NavBar";
import KnowCar from "./KnowCar";
import Defender from "./Defender";
import Highlix from "./Highlix";
import Accident from "./Accident";
import Summary from "./Summary";
import End from "./End";

function Content() {
  const [section, setSection] = useState(0);
  const [sectionStartPages, setSectionStartPages] = useState({});
  const [navSection, setNavSection] = useState(0);
  const SECTION_RETURN_PAGE_MAP = {
    1: 1, // KnowCar – עמוד אחרון
    2: 11, // Defender – עמוד סיום
    3: 6, // Highlix – לדוגמה
    4: 1
  };
  const handleChangeSection = (targetSection, returnToLast = false) => {
    // חזרה לתפריט הראשי
    if (targetSection === 6) {
      setSection(0);
      return;
    }

    setSection(targetSection);

    setSectionStartPages((prev) => ({
      ...prev,
      [targetSection]: returnToLast
        ? SECTION_RETURN_PAGE_MAP[targetSection] ?? 0
        : 0,
    }));

    setNavSection((prev) => (targetSection > prev ? targetSection : prev));
  };
  return (
    <div className="Content">
      {section === 0 && <ContentStart changeToSection={handleChangeSection} />}
      {section === 1 && (
        <KnowCar
          changeToSection={handleChangeSection}
          startingPage={sectionStartPages[1] ?? 0}
        />
      )}
      {section === 2 && <Defender changeToSection={handleChangeSection} startingPage={sectionStartPages[2] ?? 0} />}
      {section === 3 && <Highlix changeToSection={handleChangeSection} startingPage={sectionStartPages[3] ?? 0} />}
      {section === 4 && <Accident changeToSection={handleChangeSection} startingPage={sectionStartPages[4] ?? 0} />}
      {section === 5 &&  <Summary changeToSection={handleChangeSection} />}
      {section !== 0 && (
        <NavBar navSection={navSection} setNavSection={setNavSection} />
      )}
    </div>
  );
}

export default Content;
