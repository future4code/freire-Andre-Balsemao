import { Request, Response } from "express";
import insertAdressDb from "../data/insertAdressDb";
import { getFullAdress } from "../services/getFullAdress";

export const insertAdress = async (req: Request, res: Response) => {
  try {
    const cep = req.params.cep;
    const numero = req.params.numero;

    const address = await getFullAdress(cep, numero);

    if (!address || undefined) {
      throw new Error("CEP inválido");
    }

    await insertAdressDb(address);
    res.status(200).send("Endereço criado com sucesso");

  } catch (error: any) {
    res.status(500).send(error.message);
  }
};
