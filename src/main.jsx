import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import BentoSpend from "./BentoSpend.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BentoSpend />
  </StrictMode>,
);
