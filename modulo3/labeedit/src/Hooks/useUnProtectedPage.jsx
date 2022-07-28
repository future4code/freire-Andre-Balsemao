import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToFeed } from "../Routes/Coordinator";



const useUnProtectedPage = () =>{
    const navigate = useNavigate ()
    useEffect(()=>{
        const token = localStorage.getItem('token')
        if(token) {
            goToFeed(navigate)
        }
    }, [navigate])
}

export default useUnProtectedPage