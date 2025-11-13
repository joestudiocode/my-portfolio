import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./styles/main.scss"
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Navbar from "./component/Navbar";
// import Navbar from "./nav/Navbar.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <Navbar/>
      <App/>
    </BrowserRouter>
  </StrictMode>
);
