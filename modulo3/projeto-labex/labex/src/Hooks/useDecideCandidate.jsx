import axios from "axios";
import { url, headers } from "../Constants/url";



export const decideCandidate = (tripId, candidateId, decision, getTripDetails) => {
    const body = {
        approve: decision
    }

    axios.put(`${url}/trips/${tripId}/candidates/${candidateId}/decide`, body, {
        headers
    })
    .then(() => {
        alert("Decisão registrada com sucesso!")
        getTripDetails()
    })
    .catch((err) => alert(err.response.data.message))
}

