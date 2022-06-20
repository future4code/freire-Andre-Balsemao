import React from 'react';
import styled from 'styled-components'

const Forma = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 50px;
    width: 200px;
    padding: 15px 30px;
    margin: 10px auto;

`

const ImagemBotao = styled.img`

    width: 30px;
    margin-right: 10px;

`


function ImagemButton(props) {
    return (
        <Forma className="image-button-container">
            <ImagemBotao src={props.imagem} alt='Ver mais' />
            <p>{props.texto}</p>
        </Forma>

    )
}

export default ImagemButton;