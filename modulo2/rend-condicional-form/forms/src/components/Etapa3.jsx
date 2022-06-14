import React from "react";

export default class Etapa2 extends React.Component {
  render() {
    return (
      <div>
        <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
        <p>5. Por que você não terminou um curso de graduação?</p>
        <input type="text" name="naoGraduacao" />
        <p>6. Você fez algum curso complementar?</p>
        <select>
          <option value="nenhum">Nenhum</option>
          <option value="cursoTecnico">Curso Técnico</option>
          <option value="cursoIngles">Curso de Inglês</option>
        </select>
        
      </div>
    );
  }
}
