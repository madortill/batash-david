import { StrictMode } from "react";
import { DataProvider } from "./context/DataContext.jsx";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { HashRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DataProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </DataProvider>
  </StrictMode>
);
