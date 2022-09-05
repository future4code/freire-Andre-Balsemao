import {Transaction} from "./Transaction"


// type Transaction = {
//     description: string;
//     value: number;
//     date: string;
//   };
  
  export class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
        cpf: string, 
        name: string, 
        age: number, 
        
        )
         {
      console.log("Chamando o construtor da classe UserAccount");
      this.cpf = cpf;
      this.name = name;
      this.age = age;
      
    }
  
    public getCpf(): string {
      return this.cpf;
    }
    public getName(): string {
      return this.name;
    }
    public getAge(): number {
      return this.age;
    }

    public getTransaction() {
        return this.transactions
    }


    public setTransactions(newTransaction:Transaction):void {
        this.transactions.push(newTransaction)
    }
  }
