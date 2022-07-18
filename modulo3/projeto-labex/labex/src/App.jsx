import React from "react";
import { Router } from "./Routes/Router";
import { HomePage } from "./Style/StyledHome";
import { FooterComponent } from "./Components/FooterComponent"


function App() {
  return (
    <HomePage>
      <div>
        <Router />
      </div>
      <FooterComponent></FooterComponent>
    </HomePage>
  );
}

export default App;
