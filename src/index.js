import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

const theme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#fff",
        light: "#f6f6f6",
        dark: "#f6f6f6",
        contrastText: "#000"
      }
    }
  })

root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline/>
    <App/>
  </ThemeProvider>
);