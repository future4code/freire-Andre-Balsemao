import React from "react";

export default class Etapa2 extends React.Component {
  render() {
    
    return (
      <div>
        <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
        <p>5. Qual o curso?</p>
        <input type="text" name="cursoSuperior"/> 
        <p>6. Qual a unidade de ensino?</p>
        <input type="text" name="unidadeDeEnsino"/> 
        
        
      </div>
    );
  }
}
