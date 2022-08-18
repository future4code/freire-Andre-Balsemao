import express,{ Request,Response} from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

//Iniciando o servidor
app.listen(3003, ()=>{
    console.log("Server rodando na porta 3003 [http://localhost:3003]")

})