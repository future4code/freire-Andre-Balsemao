import React, { useState } from "react";
import styled from "styled-components";
import InitialCard from "./components/InitialCard";
import { MatchList } from "./components/MatchList";

const Main = styled.main`
  display: flex;
  margin: auto;
  justify-content: center;
  font-family: font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
  Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background: linear-gradient(140deg, #0c2062a0, #f30ae385 90%);
  width: 99vw;
  height: 100vh;
`;

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
  const switchTela = (arg) => {
    setTela(arg);
  };
  return (
    <Main>
      <TrocaTela />
    </Main>
  );
}

export default App;
