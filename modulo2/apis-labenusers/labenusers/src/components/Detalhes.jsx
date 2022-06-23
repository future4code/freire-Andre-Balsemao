import React from "react";
import axios from "axios";
import styled from "styled-components";

const CardUsuario = styled.div`
  border: 2px solid blue;
  padding: 10px;
  margin: 10px;
  width: 50vw;
  justify-content: space-between;
  display: flex;
`;

export default class Detalhes extends React.Component {
  state = {
    usuariosCadastrados: [],
  };

  componentDidMount = () => {
    this.pegaUsuarios();
  };

  pegaUsuarios = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "andre-balsemao-freire",
          },
        }
      )
      .then((response) => {
        this.setState({ usuariosCadastrados: response.data });
     
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
  //------------------------------------------------------------------------------
  deletaUsuario = (event) => {
    if (window.confirm("Deseja realmente apagar?") === true) {
      const id = event.target.value;
      axios
        .delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
          {
            headers: {
              Authorization: "andre-balsemao-freire",
            },
          }
        )
        .then(() => {
          this.pegaUsuarios();
        })
        .catch((erro) => {
          console.log(erro.response.data);
          alert("Usuário não deletado");
        });
    }
  };

  render() {
    const lista = this.state.usuariosCadastrados.map((usuario) => {
      return (
        <CardUsuario key={usuario.id}>
          {usuario.name}
          <button value={usuario.id} onClick={this.deletaUsuario}>
            {" "}
            X
          </button>
        </CardUsuario>
      );
    });
    return (
      <div>
        <h2>Detalhes dos Usuários</h2>
        {lista}
      </div>
    );
  }
}
