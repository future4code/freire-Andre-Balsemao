import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import Foto from './img/image.jpg'


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem={Foto}
          nome="André Balsemão"
          descricao="Oi, eu sou o André Balsemão. Sou aluno da Labenu. Adoro competir de Kart e estudar programação na Labenu."
        />

        <ImagemButton
          imagem="https://cdn-icons-png.flaticon.com/512/222/222328.png"
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://uploads-ssl.webflow.com/5e790d30d198385b09366d8f/625028e87950e1fe639924ba_fire.svg"
          nome="Labenu"
          descricao="Aluno do curso Web Full Stack Integral da Labenu, desde maio de 2022, com previsão de conclusão para novembro de 2022."
        />

        <CardGrande
          imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQadbEXpqj4PE0yBwW2T6WBcYytl3amDwH8fQ&usqp=CAU"
          nome="Piloto"
          descricao="Piloto amador de Kart desde março de 2019, tendo como principais resultados 4ºLugar na categoria pesados nas 500 milhas de Kart Lendas do Automobilismo de 2019, Campeão da 12hs de Kart KMKZY categoria leves de 2020 e Campeão das 500 Milhas de Kart CKA K1 de 2021."
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
