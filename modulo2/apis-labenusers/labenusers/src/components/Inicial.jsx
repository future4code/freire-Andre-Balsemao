// import React from "react";
// import axios from "axios";

// export default class Inicial extends React.Component {
//   state = {
//     usuariosCadastrados: [],
//     inputNome: "",
//     inputEmail: "",
//   };

//   onChangeInputNome = (event) => {
//     this.setState({ inputNome: event.target.value });
//   };

//   onChangeInputEmail = (event) => {
//     this.setState({ inputEmail: event.target.value });
//   };

//   criaListaDeUsuarios = () => {
//     const body = {
//       nome: this.state.inputNome,
//       email: this.state.inputEmail,
//     };

//     // axios
//     // .post(
//     //   'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
//     //   body,
//     //   {
//     //     headers: {
//     //       Authorization: 'andre-balsemao-freire',
//     //       },
//     //   }
//     // );

//     // .then(()=>{
//     //   this.setState({ inputNome: ''});






//     // })



//     const request = axios.post(
//       "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
//       body,
//       {
//         headers: {
//           Authorization: "andre-balsemao-freire",
//         },
//       }
//     );
//     console.log(request)

//     request
//       .then(() => {
//         this.setState({ inputNome: ""});
//         this.setState({ inputEmail: ""});
//         alert("Usuario Criado");     
        
//       })
//       .catch((erro) => {
//         console.log(erro.data);
//         alert("Não foi possivel criar o usuario!");
//       });
//   };

//   render() {
//     return (
//       <div className="App">
//         <h1>Tela Inicial:</h1>

//         <input
//           className="nomeDoUsuario"
//           type="text"
//           placeholder="Nome"
//           value={this.state.inputNome}
//           onChange={this.onChangeInputNome}
//         />

//         <input
//           className="emailDoUsuario"
//           type="email"
//           placeholder="E-mail"
//           value={this.state.inputEmail}
//           onChange={this.onChangeInputEmail}
//         />

//         <button className="addUsuario" onClick={this.criaListaDeUsuarios}>
//           Adicionar Usuário
//         </button>
//       </div>
//     );
//   }
// }

import React from "react";
import styled from "styled-components";
import axios from "axios";

const Cadastro = styled.div`
 
`;
const Inputs = styled.input`
 
`;

class Inicial extends React.Component {
  state = {
    nome: "",
    email: "",
  };

  //-------------------------------------------------------
  onChangeNome = (event) => {
    this.setState({ nome: event.target.value });
  };
  onChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  //--------------------CRIAR UM NOVO USUARIO---------
  CriarUsuario = () => {
    const body = {
      name: this.state.nome,
      email: this.state.email,
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
          headers: {
            Authorization: "andre-balsemao-freire",
          },
        }
      )
      .then(() => {
        alert("sucesso");
        this.setState({ nome: "" });
        this.setState({ email: "" });
      })
      .catch((erro) => {
        console.log(erro.data);
        alert("Não foi possível realizar o cadastro. Por favor, verifique todos os campos e tente novamente");
      });
  };
  render() {
    return (
      <div>
        <Cadastro>
          <h2>Cadastro</h2>
          <Inputs
            placeholder={"Nome"}
            value={this.state.nome}
            onChange={this.onChangeNome}
          />
          <Inputs
            placeholder={"email"}
            value={this.state.email}
            onChange={this.onChangeEmail}
            
          />
          <button onClick={this.CriarUsuario}>Cadastro</button>
        </Cadastro>
      </div>
    );
  }
}

export default Inicial;