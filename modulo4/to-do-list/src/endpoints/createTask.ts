import { Request, Response } from "express";
import moment from "moment";
import insertTask from "../data/insertTask";

export default async function createTask(req: Request, res: Response) {
  try {
    if (
      !req.body.title ||
      !req.body.description ||
      !req.body.limitDate ||
      !req.body.creatorUserId
    ) {
      res.status(400).send({
        message:
          '"title", "description", "limitDate", "creatorUserId" são obrigatórios',
      });
    }

    const dateDiff: number =
      moment(req.body.limitDate, "DD/MM/YYYY").unix() - moment().unix();

    if (dateDiff <= 0) {
      res.status(400).send({
        message: '"limitDate" deve ser uma data futura!',
      });
    }
    const id: string = Date.now() + Math.random().toString();

    await insertTask(
      id,
      req.body.title,
      req.body.description,
      moment(req.body.limitDate, "DD/MM/YYYY").format("YYYY-MM-DD"),
      req.body.creatorUserId
    );

    res.status(200).send({
      message: "Tarefa criada com sucesso!",
      id,
    });
  } catch (error: any) {
    res.status(400).send({
      message: error.message || error.sqlMessage,
    });
  }
}
