import React from "react";
import theme from "./Constants/theme";
import { Router } from "./Routes/Router";
import { ThemeProvider } from "@mui/material";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
};

export default App;
