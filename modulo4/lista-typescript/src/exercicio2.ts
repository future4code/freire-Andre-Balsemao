
type Person = {
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

const andre: Person = {
    nome: "André",
    idade: 43,
    corFavorita: CorFavorita.AZUL 
}

console.log(typeof(andre.nome))
console.log(typeof(andre.idade))
console.log(typeof(andre.corFavorita))