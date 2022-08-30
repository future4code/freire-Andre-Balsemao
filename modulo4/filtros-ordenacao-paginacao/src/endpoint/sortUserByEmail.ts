import { Request, Response } from "express";
import connection from "../data/connection";
import selectAllUsers from "../data/selectAllUsers";

export const sortUserByEmail = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    
    const email = req.query.email;
    let order = req.query.order;

    const users = await selectAllUsers();

    if (order !== "asc" && order !== "desc") {
      order = "asc";
    }

  
    const result = await connection("aula48_exercicio")
    .where("email","like",`%${email}%`)
    .orderBy(order)

    if (result.length < 1) {
      throw new Error("Usuário não localizado");
    }

    res.status(200).send(result);
   

    
  } catch (error: any) {
    res.send(error.message || "Usuário não localizado");
  }
  
};
