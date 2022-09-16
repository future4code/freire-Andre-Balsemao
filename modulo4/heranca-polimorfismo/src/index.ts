// Exercício 1
// a) Seria possível imprimir a senha (password) atrelada a essa instância?
// Não seria possível pois não definido o método Get para o atributo password, pois inicialmente ele foi definido como private.

// b) Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal?
// Seria impresso somente uma vez.


class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;
  
    constructor(
          id: string,
          email: string,
          name: string,
          password: string
      ){
          console.log("Chamando o construtor da classe User")
          this.id = id
          this.email = email
          this.name = name 
          this.password = password
      }
  
      public getId(): string {
          return this.id
      }
  
      public getEmail(): string {
          return this.email
      }
  
      public getName(): string {
          return this.name
      }
  }


