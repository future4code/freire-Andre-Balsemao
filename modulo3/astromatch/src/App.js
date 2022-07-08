import React, { useState, useEffect } from "react";
import axios from "axios";
import InitialCard from "./components/InitialCard";
import { MatchList } from "./components/MatchList";

function App() {
  const [tela, setTela] = useState("Inicio");

  const TrocaTela = () => {
    switch (tela) {
      case "Inicio":
        return <InitialCard switchTela={switchTela} />;
      default:
        return <MatchList switchTela={switchTela} />;
    }
  };
  const switchTela = (arg) =>{
    setTela(arg)

  }
  return (
    <div className="App">
      <TrocaTela />
    </div>
  );
}

export default App;
