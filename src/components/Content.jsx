import React from "react";
import "../style/Content.css";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import ContentStart from "./ContentStart";
import NavBar from "./NavBar";
import KnowCar from "./KnowCar";
import Defender from "./Defender";
import Highlix from "./Highlix";

function Content() {
  const [section, setSection] = useState(0);
  const [sectionStartPages, setSectionStartPages] = useState({});
  const [navSection, setNavSection] = useState(0);
  const SECTION_RETURN_PAGE_MAP = {
    1: 1, // KnowCar – עמוד אחרון
    2: 11, // Defender – עמוד סיום
    3: 6, // Highlix – לדוגמה
  };
  const handleChangeSection = (targetSection, returnToLast = false) => {
    // חזרה לתפריט הראשי
    if (targetSection === 4) {
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
      {section !== 0 && (
        <NavBar navSection={navSection} setNavSection={setNavSection} />
      )}
    </div>
  );
}

export default Content;
