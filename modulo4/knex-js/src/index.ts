import express from 'express'
import cors from 'cors'
import connection from './connection'


const app = express()

app.use(express.json())
app.use(cors())

// const getActorById = async (id: string): Promise<any> => {
//   const result = await connection.raw(`
//       SELECT * FROM Actor WHERE id = '${id}'
//     `);

//   return result [0][0]
// };

//   getActorById("001")
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });

//   (async () => {
//     console.log(await getActorById("001"));
//   })();

// app.get("/users/:id", async (req, res) => {
//   try {
//     const id = req.params.id;
    
//     const result = await getActorById(id)
//     console.log(await getActorById(id));

//     res.send(result);
//   } catch (error: any) {
//     console.log(error.message);
//     res.status(500).send("Unexpected error");
//   }
// });

// a) Explique como é a resposta que temos quando usamos o raw. 
// No row temos que determinar qual o array que queremos como resultado (result [0][0]) da query, visto que há mais de um array dentro do banco de dados. Sem determinar qual array queremos como resposta, irá retornar o RowDataPacket e o FieldDataPacket, sendo que o segundo array(FieldDataPacket) não interessa como resposta da consulta.

// 1 b)
// const searchActor = async (name: string): Promise<any> => {
//     const result = await connection.raw(`
//       SELECT * FROM Actor WHERE name = "${name}"
//     `)
//     return result[0][0]
//   }

// app.get("/users/:name", async (req, res) => {
//     try {
//         const name = req.params.name;
        
//         const result = await searchActor(name)
//         console.log(await searchActor(name));
    
//         res.send(result);
//       } catch (error: any) {
//         console.log(error.message);
//         res.status(500).send("Unexpected error");
//       }
//     });
//1 - C)

// const countActors = async (gender: string): Promise<any> => {
//     const result = await connection.raw(`
//       SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
//     `);
//     const count = result[0].count
//     return count;
//   };

//   app.get("/actor/:gender", async (req, res) => {
//     try {
//         const gender = req.params.gender;
        
//         const count = await countActors(gender)
//         console.log(await countActors(gender));
    
//         res.send(count);
//       } catch (error: any) {
//         console.log(error.message);
//         res.status(500).send("Unexpected error");
//       }
//     });

const updateActor = async (id: string, salary: number): Promise<any> => {
    await connection("Actor")
      .update({
        salary: salary,
      })
      .where("id", id);
  };

 app.put("/users/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const salary = req.body.salary;

      const count = await updateActor(id, salary);
      console.log(await updateActor(id, salary));

      res.send(count);
    } catch (error: any) {
      console.log(error.message);
      res.status(500).send("Unexpected error");
    }
  });

app.listen(3003, ()=>{
    console.log("Server rodando na porta 3003 [http://localhost:3003]")

})