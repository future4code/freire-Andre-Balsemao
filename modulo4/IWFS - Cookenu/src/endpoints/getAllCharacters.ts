import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";


export async function getAllCharacters(req:Request, res: Response) {
 try {
    const token = req.headers.authorization as string

    if (!token) {
        res.status(422).send("Authorization não informado no headers")
    }

    const authenticator = new Authenticator()
    const tokenData = authenticator.getTokenData(token)

    if (tokenData.role !== "ADMIN") {
        res.status(401).send("Você não tem autorização para acessar essa página")
        
    }

    const userDatabase = new UserDatabase
    const users = await userDatabase.getAllUser()
    res.status(200).send(users)

 } catch (error:any) {
    res.status(400).send(error.message)
 }   
}