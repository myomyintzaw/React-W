import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; //**global css */
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import AppProvider from "./components/context/AppProvider.tsx";

// import { NameProvider } from "./components/context/NameContext.tsx";
// import { ThemeProvider } from "./components/context/ThemeContext.tsx";

// import App from './App1.tsx'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AppProvider>
      <App />
      </AppProvider>
    </BrowserRouter>
  </StrictMode>
);
