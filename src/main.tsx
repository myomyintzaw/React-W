import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; //**global css */
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
// import App from './App1.tsx'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
