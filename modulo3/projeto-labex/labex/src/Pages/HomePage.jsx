import React from "react";
import { useNavigate } from "react-router-dom";
import { goToListTripPage, goToLoginPage } from "../Routes/Coordinator";


export const HomePage = () =>{
    const navigate = useNavigate()

    return(

        <><div>
            <h3>Home Page</h3>
        </div><div>
                <button onClick={()=>goToListTripPage(navigate)}> AstroTurista </button>
                <button onClick={()=>goToLoginPage(navigate)}> Colaboradores </button>
            </div></>
    )
}