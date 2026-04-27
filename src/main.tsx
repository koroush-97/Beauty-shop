import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./globalStyle/globalStyle.css";
import { DarkModeProvider } from "./context/theme/DarkModeProvider.tsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/Router.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DarkModeProvider>
      <RouterProvider router={router} />
    </DarkModeProvider>
  </StrictMode>,
);
