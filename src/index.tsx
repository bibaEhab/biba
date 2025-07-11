import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HomePage from "./app/page";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <HomePage />
  </StrictMode>,
);