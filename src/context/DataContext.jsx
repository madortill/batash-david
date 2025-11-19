import React, { createContext, useContext, useState } from "react";
import text from "../data/text.json"; // כאן יהיו כל השפות

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [currentJSON, setCurrentJSON] = useState("he"); // ברירת מחדל: עברית

  const switchJSON = (key) => setCurrentJSON(key); // לדוגמה "en" או "he"

  return (
    <DataContext.Provider value={{ data: text[currentJSON], switchJSON }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext); // hook נוח לשימוש