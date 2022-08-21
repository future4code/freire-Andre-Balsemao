import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

type Transacoes = {
  valor: number;
  data: Date;
  descrição: string;
};

type Conta = {
  nome: string;
  CPF: string;
  dataDeNascimento: Date;
  saldo: number;
  extrato: Transacoes[];
};

const contas: Conta[] = [];

app.post("/users/creat", (req, res) => {
  try {

    const { nome, CPF, dataDeNascimento } = req.body;
    
    contas.push({
      nome,
      CPF,
      dataDeNascimento,
      saldo: 0,
      extrato: [],
    });
    res.status(201).send("Conta criada com sucesso!")
  } catch (error) {
    res.status(400).send(error)

  }
});

app.get('/users/all',(req, res)=>{
    try {
        if (!contas.length) {
            res.statusCode = 404
            throw new Error("Nenhuma conta encontrada");
        }
        res.status(200).send(contas)
    } catch (error) {
        res.send(error)
        
    }
})

app.listen(3003, () => {
  console.log("Servidor rodando na porta 3003 [http://localhost:3003]");
});
