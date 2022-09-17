import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";


export async function getAllCharacters(req:Request, res: Response) {
 try {
    const token = req.headers.authorization as string

    if (!token) {
        throw new Error("Authorization não informado no headers")
    }

    const authenticator = new Authenticator()
    const userDatabase = new UserDatabase
    const users = await userDatabase.getAllUser()
    res.status(200).send(users)

 } catch (error:any) {
    res.status(400).send(error.message)
 }   
}