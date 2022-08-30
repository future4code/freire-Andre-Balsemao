import { Request, Response } from "express";
import connection from "../data/connection";
import selectAllUsers from "../data/selectAllUsers";

export const selectUserByNamePath = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const name = req.params.name;

    const users = await selectAllUsers();

    const result = await connection("aula48_exercicio")
    .where("name","like",`%${name}%`);

    if (result.length < 1) {
      throw new Error("Usuário não localizado");
    }

    res.status(200).send(result);
   

    res.status(200).send(result);
  } catch (error: any) {
    res.send(error.message || "Usuário não localizado");
  }
  
};
