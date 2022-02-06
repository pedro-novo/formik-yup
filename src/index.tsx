import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App";

import { ThemeProvider } from "@mui/material/styles";
import { theme } from "styles/theme.styles";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
