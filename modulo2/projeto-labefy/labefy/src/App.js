import React from "react";
import Playlist from "./pages/Playlists";
import Inicial from "./pages/Inicial";




export default class App extends React.Component {

state = {
  entrar: false
};

mostrar = () => {
  this.setState({ entrar: true });
};

voltar = () => {
  this.setState({ entrar: false });
};

render() {
  let pagina;
  if (this.state.entrar) {
    pagina = <Playlist onClickLogout={this.voltar} />;
  } else {
    pagina = <Inicial onClickLogin={this.mostrar} />;
  }
  return <div>{pagina}</div>;
}
}


