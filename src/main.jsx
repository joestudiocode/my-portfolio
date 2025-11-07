import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./home/Home.jsx";
// import Navbar from "./nav/Navbar.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <Home />
  </StrictMode>
);
