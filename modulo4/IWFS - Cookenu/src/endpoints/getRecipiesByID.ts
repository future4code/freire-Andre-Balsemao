import {Request, Response} from 'express';
import { Authenticator } from '../services/Authenticator';
import { RecipiesDatabase } from '../data/RecipiesDatabase';

export async function getRecipiesById (req: Request, res: Response) {
    try {
        const token = req.headers.authorization as string;
        const user_Id = req.params.id;

        const authenticator = new Authenticator();
        const authenticationData = authenticator.getTokenData(token);

        const recipiesDatabase = new RecipiesDatabase();
        const recipie = await recipiesDatabase.getRecipiesById(user_Id);

        res.status(200).send({
            id: recipie.getId(),
            title: recipie.getTitle(),
            description: recipie.getDescription(),
            date: recipie.getDate()

        });
        
    }catch (error: any) {
        res.status(400).send(error.message)
    }
}