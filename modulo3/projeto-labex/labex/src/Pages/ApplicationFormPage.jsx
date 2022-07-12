import React from "react";
import { useNavigate } from 'react-router-dom'
import { goBack } from "../Routes/Coordinator";



export const ApplicationFormPage = () =>{
    const navigate = useNavigate()

    return (

        <><div>
            Application Form Page
        </div><div>
                <button>Reserve a sua viagem</button>
                <button onClick={() => goBack(navigate)}>Voltar</button>

            </div></>
    )
}