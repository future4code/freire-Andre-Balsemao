type Pessoa = {
    nome: string,
    data: string
}

const pessoa: Pessoa = {
    nome: "André",
    data: "23/02/1979"
}

const arrayData : string[] = pessoa.data.split("/");

// Aqui eu deveria criar uma função que transformasse a informação do arrayData[1] em nome do mês, porém não sei fazer essa função.

console.log(arrayData)

console.log (`Olá me chamo ${pessoa.nome}, nasci no dia ${arrayData[0]} do mês de ${arrayData[1]} do ano de ${arrayData[2]}.`)