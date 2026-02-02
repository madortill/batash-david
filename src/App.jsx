import { Routes, Route, useLocation } from "react-router-dom";

import "./style/App.css";
import Start from "./components/Start";
import Content from "./components/Content";
import End from "./components/End";

import til from "./assets/images/til.svg";
import bahad6 from "./assets/images/bahad6.png";
import narration from "./assets/images/narration.svg";
import narrationNon from "./assets/images/narrationNon.svg";

function App() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
      <div className="symbols">
        <img src={bahad6} alt="bahad6" className="bahad6" />
        <img src={til} alt="til" className="til" />
      </div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/content" element={<Content />} />
        <Route path="/end" element={<End />} />
      </Routes>
    </>
  );
}

export default App;