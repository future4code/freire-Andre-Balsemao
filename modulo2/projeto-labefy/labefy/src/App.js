import React from "react";
import styled from "styled-components";
import TelaCriaPlaylist from "./components/TelaCriaPlaylist";
import TelaConsultaPlaylist  from "./components/TelaConsultaPlaylist";

const Background = styled.div`
  background-color: orange;
  width: 100vw;
  height: 100vh;
  display: flex;
`;

export default class App extends React.Component {
  state = {
    telaAtual: "true",
  }

trocaTela = () => {
  this.setState({
    pagina: !this.state.pagina,
  });
};
render() {
  const pagina = this.state.pagina ? <TelaConsultaPlaylist /> : <TelaCriaPlaylist/>;

  return (
    <Background>
    <div> 
      <h1>LABEFY</h1>
      <button className="inverteTela" onClick={this.trocaTela}>
        {this.state.pagina ? "Home" : "Ver Playlists"}
      </button>
      {pagina}
    </div>
    </Background>
  );
}
}