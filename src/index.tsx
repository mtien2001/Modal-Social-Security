import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ModalProvider } from "styled-react-modal";

const root = ReactDOM.createRoot(document.getElementById(
  "root"
) as HTMLElement);
root.render(
  <React.StrictMode>
    <ModalProvider>
      <App />
    </ModalProvider>
  </React.StrictMode>
);

reportWebVitals();
