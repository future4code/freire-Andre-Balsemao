import express from "express";
import cors from "cors";
import knex from "knex";
import dotenv from "dotenv";
import createUser from "./endpoints/creatUser";
import getUserById from "./endpoints/getUserById";

dotenv.config();
export const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA,
    multipleStatements: true,
  },
});

const app = express();

app.use(express.json());
app.use(cors());

app.put('/user', createUser);
app.get('/user/:id', getUserById);

app.listen(3003, () => {
  console.log("Server rodando na porta 3003 [http://localhost:3003]");
});
