import axios from "axios";
import { useEffect, useState } from "react";
import { url, headers } from "../Constants/url";

export const useDeleteTrip = () => {
    const [deletetedTrip, setDeletetedTrip] = useState([])

    const deleteTrip = (id) =>{

    axios.del(`${url}/trips/${id}`, {
        headers }
            )
    .then((res) => {
        alert("Viagem deletada com sucesso!")
        setDeletetedTrip(res.response.data.trip)
    })
    .catch((err) => alert(err.response.data.message))
}

useEffect(() => {
    deleteTrip();
  }, []);

  return deletetedTrip;
}