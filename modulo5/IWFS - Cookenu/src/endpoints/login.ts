import { Request, Response } from "express"
import { UserDatabase } from "../data/UserDatabase"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/idGenerator"
import { User } from "../types/User"

export async function login (req: Request, res: Response) {
    try {
        const {email, password } = req.body
        if (!email || !password) {
            res.status(422).send("Insira todos os dados solicitados")
           
        }
        
        const userDatabase = new UserDatabase()
        const user = await userDatabase.findUserByEmail(email);

        if (!user) {
            res.status(409).send("Usuário não cadastrado com esse email")
        }

        const hashManager = new HashManager()
        const passwordIsCorrect = await hashManager.compare(password, user.getPassword())

        if (!passwordIsCorrect) {
            res.status(401).send("Email ou senha incorretos")
        }

        
        const authenticator = new Authenticator()
        const access_token = authenticator.generate({id: user.getId()})

        res.status(200).send({message: 'Usuário logado com sucesso', access_token, id: user.getId()})

    } catch (error:any) {
        res.status(400).send(error.message)
        
    }
}