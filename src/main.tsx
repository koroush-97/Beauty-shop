import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./globalStyle/globalStyle.css";
import { DarkModeProvider } from "./context/theme/DarkModeProvider.tsx";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  </StrictMode>,
);
