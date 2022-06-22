import React from "react";
import axios from "axios";

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
          console.log(response.data);
          this.setState({ usuariosCadastrados: response.data});
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    };
    //------------------------------------------------------------------------------
    deletaUsuario = (event) => {
      if (window.confirm('Deseja realmente apagar?')
      === true){

      const id = event.target.value;
      axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
        {
          headers: {
            Authorization: "andre-balsemao-freire",
          }
        }
      )
      .then(()=>{
        this.pegaUsuarios()
        })
      .catch((erro) => {
        console.log(erro.response.data);
        alert('Usuário não deletado')
      })
      }  
    };

    render()
     {

      const lista = this.state.usuariosCadastrados.map((usuario) => {
        return (
          <div key={usuario.id}>{usuario.name}
          <button 
          value = {usuario.id}
          onClick = {this.deletaUsuario}
          > Deletar
          </button>
          </div>
          
        );
      })
      return (
        <div>
          <h2>Detalhes</h2>
          <section>
            <ul>{lista}</ul>  
          </section>
        </div>
      );
    }
  }