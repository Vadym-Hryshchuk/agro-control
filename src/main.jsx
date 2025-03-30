import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import "modern-normalize";

import App from "./components/App";
import { GlobalStyles } from "./GlobalStyle";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
