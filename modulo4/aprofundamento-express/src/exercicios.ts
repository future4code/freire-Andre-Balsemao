import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/ping", (req, res) => {
  res.send("Pong! 🏓");
});

// Acesse a API do JSONPlaceholder e observe os endpoints que buscam afazeres (”to dos”). Crie uma variável de tipo para representar cada afazer.

type Afazeres = {
  userId: string;
  id: number;
  title: string;
  completed: boolean | string;
};

// Crie um array de afazeres para servir como base de dados da nossa API e utilize a tipagem desenvolvida no exercício anterior.

const tarefasParaRealizar: Afazeres[] = [
  {
    userId: "1",
    id: 1,
    title: "Limpar a cozinha",
    completed: true,
  },
  {
    userId: "2",
    id: 1,
    title: "Lavar a roupa",
    completed: false,
  },
  {
    userId: "3",
    id: 1,
    title: "Recolher o lixo",
    completed: true,
  },
  {
    userId: "4",
    id: 1,
    title: "Fazer compras",
    completed: false,
  },
];
// Exercício 4
// Construa um endpoint que retorne todos os afazeres do exercício anterior de acordo com um único status, ou seja, retorne ou afazeres concluídos ou somente os que ainda estão em andamento.

app.get("/toDoListStatus", (req, res) => {
  const toDo = req.query.completed;

  const tarefas = tarefasParaRealizar.filter((tarefa) => {
    return tarefa.completed.toString() === toDo;
  });

  res.send({ tarefas });
});
// Exercício 5
// Construa um endpoint de criação de afazer. A resposta deve retornar o array de afazeres atualizado.

app.post("/creatToDo", (req, res) => {
  const newToDO: Afazeres = {
    userId: req.body.userId,
    id: req.body.id,
    title: req.body.title,
    completed: req.body.completed,
  };
  tarefasParaRealizar.push(newToDO);
  res.send(tarefasParaRealizar);
});

// Exercício 6
    
// Construa um endpoint de edição do status de um afazer, ou seja, de completo para incompleto e vice-versa.



app.listen(3003, () => {
  console.log("Server rodando na porta 3003 [http://localhost:3003]");
});
