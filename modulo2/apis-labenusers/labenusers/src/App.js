import React from "react";
import Inicial from "./components/Inicial";
import Detalhes from "./components/Detalhes";

export default class App extends React.Component {
  state = {
    pagina: "true",
  };
  trocaTela = () => {
    this.setState({
      pagina: !this.state.pagina,
    });
  };
  render() {
    const pagina = this.state.pagina ? <Inicial /> : <Detalhes />;

    return (
      <div>
        <h1>LABENUSERS</h1>
        <button className="inverteTela" onClick={this.trocaTela}>
          {this.state.pagina ? "Ver Detalhes" : "Voltar Cadastro"}
        </button>
        {pagina}
      </div>

    );
  }
}
