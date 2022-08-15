enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type Filme = {
    nome: string,
    ano: number,
    genero: string,
    pontuação ? : number
}

const filme1 : Filme = {
    nome: "Duna",
    ano: 2021,
    genero: GENERO.ACAO,
    pontuação: 74,
}

const filme2 : Filme = {
    nome: "Duna",
    ano: 2021,
    genero: GENERO.ACAO,
    
}

console.table(filme1)
console.table(filme2)