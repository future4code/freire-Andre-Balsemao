import express from 'express'
import cors from 'cors'
import { getAllUsers } from './endpoint/getAllUsers'
import { selectUserByNameQuery } from './endpoint/selectUserByName_query'
import { selectUserByNamePath } from './endpoint/selectUserByName_Path'
import { sortUserByEmail } from './endpoint/sortUserByEmail'

const app = express()

app.use(express.json())
app.use(cors())

// app.get("/users", getAllUsers)
// app.get("/users",selectUserByNameQuery)
// app.get("/users/:name", selectUserByNamePath)
app.get("/users", sortUserByEmail)



app.listen(3003, ()=>{
    console.log("Server rodando na porta 3003 [http://localhost:3003]")

})