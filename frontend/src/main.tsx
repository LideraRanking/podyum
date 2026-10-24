import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App.tsx";
import "./index.css"

// ATENÇÃO SEUS BETAS, USAR ESSE PROVIDER SOMENTE QUANDO FORMOS CRIAR O TEMA WHITE, POR ENQUANTO VAMOS DEIXAR FIXO NO DARK
// import { ThemeProvider } from "@/components/theme-provider.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);