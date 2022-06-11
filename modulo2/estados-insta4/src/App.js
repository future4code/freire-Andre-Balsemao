import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  
  
`

class App extends React.Component {

  state = {
    post: [
      {
      nomeUsuario: 'Paulinha',
      fotoUsuario:  'https://picsum.photos/50/50',
      fotoPost: 'https://picsum.photos/200/150'
      },
      {
        nomeUsuario: 'Pedrinho',
        fotoUsuario: 'https://picsum.photos/50/60',
        fotoPost: 'https://picsum.photos/200/200'
      },
      {
        nomeUsuario: 'Mari',
        fotoUsuario: 'https://picsum.photos/50/70',
        fotoPost: 'https://picsum.photos/200/250'
      }
    ]
  };

    
  }

  render() {
    
        const listaDePost = this.state.post.map((usuario) => {
          return (
            <Post
            nomeUsuario = {usuario.nomeUsuario}
            fotoUsuario = {usuario.fotoUsuario}
            fotoPopst = {usuario.fotoPost}
            />);


        }
      );

        return (
      <MainContainer>
        <div>
        {listaDePost}
          </div>{listaDePost}
        
      </MainContainer>
      
    );
        
  }


export default App;
