import React from "react";

export default class Etapa1 extends React.Component {
  render() {
    
    return (
      <div>
        <h1>ETAPA 1 - DADOS GERAIS</h1>
        <p>1. Qual o seu nome?</p>
        <input type="text" name="nome"/>
        <p>2. Qual a sua idade?</p>
        <input type="number" name="idade"/>
        <p>3. Qual seu email?</p>
        <input type="email" name="email"/>
        <p>4. Qual a sua escolaridade?</p>
        <select>
            <option value="medioCompleto">Ensino Médio Completo</option>
            <option value="superiorIncompleto">Ensino Superior Incompleto</option>
            <option value="superiorCompleto">Ensino Superior Completo</option>
        </select>
        
        



        
      </div>
    );
  }
}


