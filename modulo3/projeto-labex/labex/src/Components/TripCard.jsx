import React from "react"
import styled from "styled-components"

export const CardContainer = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.3);
    padding: 10px 20px;
    border-radius: 4px;
    margin: 10px 0;
    max-width: 500px;
    width: 100%;
`

export const TripCard = () => {
    const {name, description, planet, durationInDays, date} = props.trip

    return(
        <CardContainer>
            <p><b>Nome:</b> {name}</p>
            <p><b>Descrição:</b> {description}</p>
            <p><b>Planeta:</b> {planet}</p>
            <p><b>Duração:</b> {durationInDays}</p>
            <p><b>Data:</b> {date}</p>
        </CardContainer>
    )
}

