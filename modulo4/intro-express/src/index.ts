import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello from Express");
});


type User = {
  id: number;
  name: string;
  phone: number;
  email: string;
  website: string;
};

const users: User[] = [
  {
    id: 1,
    name: "André",
    phone: 5199999999,
    email: "andre@gmail.com",
    website: "www.andre.com",
  },

  {
    id: 2,
    name: "Jariane",
    phone: 5199999888,
    email: "jari@gmail.com",
    website: "www.jari.com",
  },
];

type User2 = {
  userId: number,
  id: number,
  title: string,
  body: string
  
}

const usersPosts: User2 [] {
  {
  userId: 1,
  id: 111111111111111,
  title: "lorem",
  body: "lorem"
  }

}


app.get('/users', (req, res) => {
    res.send(users)
   })


//Iniciando o servidor
app.listen(3003, () => {
  console.log("Server rodando na porta 3003 [http://localhost:3003]");
});
