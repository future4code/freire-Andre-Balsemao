import React from "react";
import { useNavigate } from 'react-router-dom'
import { goBack } from "../Routes/Coordinator";
import { HeaderComponent } from "../Components/headerComponent";


export const ApplicationFormPage = () =>{
    const navigate = useNavigate()

    return (

        <><HeaderComponent></HeaderComponent><div>
            Application Form Page
        </div><div>
                <button>Reserve a sua viagem</button>
                <button onClick={() => goBack(navigate)}>Voltar</button>

            </div></>
    )
}