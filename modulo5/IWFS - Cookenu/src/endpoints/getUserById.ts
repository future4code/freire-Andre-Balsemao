import {Request, Response} from 'express';
import { Authenticator } from '../services/Authenticator';
import { UserDatabase } from '../data/UserDatabase';

export async function getUserById (req: Request, res: Response) {
    try {
        const token = req.headers.authorization as string;

        const userId = req.params.id;

        const authenticator = new Authenticator();
        const authenticationData = authenticator.getTokenData(token);

        const userDatabase = new UserDatabase();
        const user = await userDatabase.getUserById(userId);

        res.status(200).send({
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
        });
        
    }catch (error: any) {
        res.status(400).send(error.message)
    }
}