import styled from "styled-components";



export const LoteryContainer = styled.div `

display: flex;
flex-direction: column;
align-items: center;
overflow-x: hidden;
align-content: flex-start;
background: #EFEFEF;
height: 100vh;
width: 100vw;
@media (min-width: 912px) {
    flex-direction: row;
    overflow: hidden;
}
`
export const HeaderContainer = styled.div `
display: flex; 
flex-direction: column;
align-items: center;
color: #FFF;
`

export const Select = styled.select `
font-size: 16px;
width: 220px;
height: 50px;
border-radius: 4px;
background: #FFF;
font-weight: 500;
line-height: 18px;
padding: 12px;
border: none;
position: absolute;
top: 40px;
padding-left: 18px;
@media (min-width: 912px) {
    position: absolute;
    top: 90px;
    left: 80px;
    width: 250px;
    height: 45px;
    z-index: 10;
  }
`

export const ImgContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center; //talvez
align-items: center;
display: flex;
position: absolute;
top:140px;
@media (min-width: 912px) {
  flex-direction: row;
  top: 46%;
  left: 5%;
}
`

export const Logo = styled.img `
width: 100px;
`

export const NameLotery = styled.p`
font-weight: 700;
font-size: 36px;
line-height: 37px;
color: #FFF;
@media (min-width: 420px) {
    margin: 15px;

}
`

export const NumbersContainer = styled.div `
display: flex;
justify-content: center;
flex-wrap: wrap;
`

export const Numbers = styled.div `
display: flex;
justify-content: center;
align-items: center;
background: #FFF;
color: #333;
font-weight: 700;
width: 50px;
height: 48px;
padding: 10px;
border-radius: 60%;
margin: 5px 20px;
`

export const TextLegal = styled.p`
font-size: 14px;
text-align: center;
line-height: 16px;
margin: 4px;
padding: 4px;
margin: 4px;
@media (min-width: 912px) {
    position: absolute;
    bottom: 100px;
    left: 50%;
}
`

export const ContestNumber = styled.div`
position: absolute;
font-size: 20px;
top: 79%;
left: 6%;
width: 60%;
text-align: left;
@media (max-width: 912px){
display: none;
}
`

export const ContestNumberResponsive = styled.div `
font-size: 20px;
font-weight: 500;
color: #FFF;
position: absolute;
top: 370px;
@media (min-width: 912px) {
  display: none;
}
`