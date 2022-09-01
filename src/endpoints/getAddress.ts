import axios from "axios"
import { Request, Response } from "express"
import { Address } from "../types/typeAddress"


export const getAddress = async (req: Request, res: Response) => {
    try {
        const cep = req.params.cep
        const numero = req.params.numero

        const result = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        console.log(result.data)

        const address: Address = {
            
            cep: result.data.cep,
            logradouro : result.data.logradouro,
            bairro : result.data.bairro,
            cidade : result.data.localidade,
            estado : result.data.uf,
            complemento : result.data.complemento,
            numero : numero
        }

            res.status(200).send(address)
        
    } catch (error:any) {
        res.status(500).send(error.message)
    }
}
