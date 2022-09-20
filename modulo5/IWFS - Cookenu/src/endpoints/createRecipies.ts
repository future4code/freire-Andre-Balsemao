import { Request, Response } from "express";
import { RecipiesDatabase } from "../data/RecipiesDatabase";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/idGenerator";
import { Recipies } from "../types/Recipies";
import { User } from "../types/User";

export async function createRecipie(req: Request, res: Response) {
  try {
    const token = req.headers.authorization as string
    const { title, description } = req.body;

    if ( !title || !description) {
      throw new Error("Insira todos os dados solicitados");
    }

    const recipiesDatabase = new RecipiesDatabase();
    const idGenerator = new IdGenerator();
    const user_id = new Authenticator().getTokenData(token)
    const id = idGenerator.generate();
    const date = new Date();
    const userDatabase = new UserDatabase();
        
    const newRecipie = new Recipies(id, title, description, date, user_id.id);
    await recipiesDatabase.createRecipie(newRecipie);

    const authenticator = new Authenticator();
    const access_token = authenticator.generate({ id });

    res
      .status(200)
      .send({ message: "Receita criada com sucesso", access_token, id });
  } catch (error: any) {
    res.status(400).send(error.message);
  }
}
