import { Request, Response } from "express";
import updateUser from "../data/updateUser";

export default async function editUser(req: Request, res: Response) {
  try {
    if (
      req.body.name === "" ||
      req.body.nickname === "" ||
      req.body.email === ""
    ) {
      res.status(400).send({
        message: "Nenhum dos campos pode estar vazio!",
      });
    }
    if (!req.body.name && !req.body.nickname && !req.body.email) {
      res.status(400).send({
        message: "Escolha um valor para alterar!",
      });
    }

    await updateUser(req.params.id, req.body.name, req.body.nickname, req.body.email);
    res.status(400).send({
      message: "Usuário atualizado com sucesso!",
    });
  } catch (error: any) {
    res.status(400).send({
      message: error.message || error.sqlMessage,
    });
  }
}
