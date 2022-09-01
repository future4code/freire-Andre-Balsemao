import { Address } from "../types/typeAddress";
import { connection } from "./connection";

export default async function insertAdressDb(adress: Address) {

  const{logradouro, cep, bairro, cidade, estado, complemento, numero} = adress
  const id_user = Date.now().toString()
  
  await connection("tarefa_servicos_backend_adress").insert({
    id_user,
    cep,
    logradouro,
    bairro, 
    cidade, 
    estado, 
    complemento, 
    numero
  })

}
