import React from "react";
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import Final from "./components/Final";
import "./App.css";

export default class App extends React.Component {
  state = {
    etapa: 1,
  };
  rederizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />;
      case 2:
        return <Etapa2 />;
      case 3:
        return <Etapa3 />;
      case 4:
        return <Final />;
       break;
       default:
    }
  };
  irParaProximaEtapa = () => {
    this.setState({
      etapa: this.state.etapa + 1,
    });
  };

  render() {
    return (
      <div className="App">
        {this.rederizaEtapa()}
        {this.state.etapa <4 ? <button onClick={this.irParaProximaEtapa}>Próxima Etapa</button>
        : ""}
      </div>
    );
  }
}
