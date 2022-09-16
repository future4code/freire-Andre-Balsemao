import { Request, Response } from "express";
import connection from "../data/connection";
import selectAllUsers from "../data/selectAllUsers";

export const selectUserByNameQuery = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const name = req.query.name;

    const users = await selectAllUsers();

    const result = await connection("aula48_exercicio").where(
      "name",
      "like",
      `%${name}%`
    );

    if (!users.length) {
      res.statusCode = 404;
      throw new Error("No users  found");
    }

    res.status(200).send(result);
  } catch (error: any) {
    res.send(error.message || "Usuário não localizado");
  }
};
