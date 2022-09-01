import axios from "axios";
import { Request, Response } from "express";
import { Address } from "../types/typeAddress";

export const getFullAdress = async (cep:string, numero: string): Promise<Address | undefined> =>{
    try {
        
        
        const result = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        console.log(result.data)

        const address: Address = {
            cep : result.data.cep,
            logradouro : result.data.logradouro,
            bairro : result.data.bairro,
            cidade : result.data.localidade,
            estado : result.data.uf,
            complemento: result.data.complemento,
            numero : numero
        }

            return address
        
    } catch (error:any) {
        return undefined
    }
}

