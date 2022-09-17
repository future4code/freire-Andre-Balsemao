import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/idGenerator";
import { User } from "../types/User";

export async function signup(req: Request, res: Response) {
  try {
    const { name, email, password } = req.body;

    if (password.length < 6) {
        throw new Error ("A senha deve ter no mínimo 6 caracteres!");
      }

    if (!name || !email || !password) {
      res.status(422).send("Insira todos os dados solicitados");
    }

    const userDatabase = new UserDatabase();
    const idGenerator = new IdGenerator();
    const id = idGenerator.generate();
    const hashManager = new HashManager();
    const hashPassword = await hashManager.hash(password);
    const newUser = new User(id, name, email, hashPassword);
    await userDatabase.createUser(newUser);

    const authenticator = new Authenticator();
    const access_token = authenticator.generate({ id });

    res
      .status(200)
      .send({ message: "Usuário criado com sucesso", access_token, id });
  } catch (error: any) {
    res.status(400).send(error.message);
  }
}
