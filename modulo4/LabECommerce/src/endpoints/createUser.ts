import {Request, Response} from "express"
import connection from "../connection"
import { userInsert, users } from "../type"


export default async function createUser (req:Request, res: Response) {

   try {
    const id = Date.now()
    const {name, email, password}:users = req.body

    if (!name || !email || !password) {
      throw new Error("Os campos devem ser preenchidos na totalidade");
    }

    const userInsert: userInsert ={
      id: id,
      name,
      email,
      password
    }

    console.log(userInsert)

   //  await connection('labecommerce_users')
   //  .insert({id, name, email, password})

   //  res.status(201).send("Usuário criado com sucesso")

   } catch (error:any) {
    res.status(500).send({message: error.message})
    
   }
}