const minhaString : string = "Texto"
const meuNumero : number | string = 25

const pessoa: { 
    nome: string,
    idade: number,
    corFavorita: string

} = {
    nome: "André",
    idade: 43,
    corFavorita: "Azul"
}

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: string
}

enum CorFavorita {
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Azul",
    AZUL_ESCURO = "Azul Escuro",
    VIOLETA = "Violeta"
}

const andre: Pessoa = {
    nome: "André",
    idade: 43,
    corFavorita: CorFavorita.AZUL 
}

const jari: Pessoa = {
    nome: "Jari",
    idade: 41,
    corFavorita: CorFavorita.VERMELHO
}

const lely: Pessoa = {
    nome: "Lely",
    idade: 34,
    corFavorita: CorFavorita.VERDE
}

console.table(andre)
