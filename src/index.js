import React from "react";
import ReactDOM from "react-dom/client";

import { CssVarsProvider } from "@mui/joy/styles";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { theme } from "./config";
import { GameContextProvider } from "./contexts/gameContext";
import { PlayerContextProvider } from "./contexts/playerContext";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CssVarsProvider theme={theme}>
    <BrowserRouter>
      <PlayerContextProvider>
        <GameContextProvider>
          <App />
        </GameContextProvider>
      </PlayerContextProvider>
    </BrowserRouter>
  </CssVarsProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
