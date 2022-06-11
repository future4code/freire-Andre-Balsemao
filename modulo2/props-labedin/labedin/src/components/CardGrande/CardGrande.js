import React from 'react';
import styled from 'styled-components'


const ColorCard = styled.div`

    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;

`
const Imagem = styled.img`

    width: 70px;
    margin-right: 10px;
    border-radius: 50%;

`
const Margem = styled.h4`
    margin-bottom: 15px;
`


const Coluna = styled.div`

    display: flex;
    flex-direction: column;
    justify-items: flex-start;

`
function CardGrande(props) {
    return (
        <ColorCard className="bigcard-container">
            <Imagem src={props.imagem} alt='Ver Mais' />
            <Coluna>
                <Margem>{props.nome}</Margem>
                <p>{props.descricao}</p>
            </Coluna>
        </ColorCard>
    )
}

export default CardGrande;