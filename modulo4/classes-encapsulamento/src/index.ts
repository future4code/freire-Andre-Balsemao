import app from "./app"
import { UserAccount } from "./UserAccount"
import { Transaction } from "./Transaction"
import { Bank } from "./Bank"



//EXERCÍCIO 01
//A) Para que serve o construtor dentro de uma classe e como fazemos para chamá-lo?
// Construtor serve para inicializar objetos com atributos definidos. Para chamá-lo utilizamos a keyword this.

//B) A mensagem foi impressa uma única vez.

//C) Como conseguimos ter acesso às propriedades privadas de uma classe? Utilizando a propriedade Geters.


const user1:UserAccount = new UserAccount ("123.456.789-10", "André", 43)
const transaction1:Transaction = new Transaction ("Teste", 100, "05/09/2022")
const accounts1:Bank = new Bank ([user1])

user1.setTransactions(transaction1)

console.log(user1, user1.getTransaction())
