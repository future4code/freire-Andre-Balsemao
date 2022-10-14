import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { BASE_URL } from "../Constants/base_url";
import { colors } from "../Constants/colors"
import logo from "../assets/logo.png";
import { HeaderContainer, ImgContainer, Logo, LoteryContainer, NameLotery, ContestNumber, ContestNumberResponsive, Numbers, NumbersContainer, Select, TextLegal } from "./styled";
import { SideInfos } from "../components/sideInfos";
import { SideInfosResponsive } from "../components/sideInfosResponsive"; 


export const Home = () => {
  const [lottery, setLottery] = useState([]);
  const [input, setInput] = useState('MEGA-SENA');
  const [contest, setContest] = useState({ concursoId: 0});
  const [drawnNumbers, setDrawnNumbers] = useState([]);
  const [date, setDate] = useState('10');
  
  const pickLottery = () => {
     axios.get(`${BASE_URL}/loterias`, {
  }).then((response) => {setLottery(response.data);
  }).catch((error) => {
    console.log(error.message)
  }); 
  }
  useEffect(pickLottery, []);   

  const contestsLotteries = () => {
      axios.get(`${BASE_URL}/loterias-concursos`, {
   }).then((response) => {
    setContest(response.data[colors[input].index]);
   }).catch((error) => {
       console.log(error.message)
   }); 
   }

   useEffect(contestsLotteries, [input]); 


   const contests = () => {
      axios.get(`${BASE_URL}/concursos/${contest.concursoId}`, {
   }
   ).then((response) => {
      setDrawnNumbers(response.data.numeros);
      setDate(newDate(response.data.data))       
   }).catch((error) => {
       console.log(error.message)
   }); 
   }

   useEffect(contests, [contest, input]);    
   
  const newDate = (date) => {
      const dateFormated = date.replace(/(\d*)-(\d*)-(\d*).*/, '$3/$2/$1')
      return dateFormated
  }

  return (
      <LoteryContainer>
          <SideInfosResponsive color={colors[input].cor}/> 
          <HeaderContainer>
              <Select value={input} onChange={(e) => setInput(e.target.value)}> 
                  {lottery?.map((lottery) => {
                  return <option key={lottery.id} value={lottery.nome.toUpperCase()}>{lottery.nome.toUpperCase()}</option>
                  })}  
              </Select>
              <ContestNumber>
                  <p>Concurso</p>
                  <strong>{contest.concursoId} - {date}</strong>
              </ContestNumber>
              <ImgContainer>
                  <Logo src={logo} alt="logo de trevo de quatro folhas"/>
                  <NameLotery>{input}</NameLotery>
              </ImgContainer>
              <ContestNumberResponsive>{`CONCURSO Nº ${contest.concursoId}`}</ContestNumberResponsive>
          </HeaderContainer>
          <SideInfos color={colors[input].cor}/> 
          <div>
              <NumbersContainer>
                 {drawnNumbers?.map((numeros) => {
                  return <Numbers>{numeros}</Numbers>
                   })}  
              </NumbersContainer>   
              <TextLegal>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</TextLegal> 
          </div>
      </LoteryContainer>
  )
}

export default Home;
