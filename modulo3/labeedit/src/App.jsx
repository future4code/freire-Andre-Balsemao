import React from "react"
import theme from "./Constants/theme";
import {Router} from "./Routes/Router";
import { ThemeProvider } from "@mui/material";
import GlobalState from "./Global/GlobalState";


const App = () => {
  return (
    <ThemeProvider theme={theme}>
     <GlobalState> 
     <Router/>
     </GlobalState>
    </ThemeProvider>
  );
}

export default App


