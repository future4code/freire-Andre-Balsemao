/* RESPOSTAS DOS EXERCÍCIOS DE LEITURA DE CÓDIGO:
EXERCÍCIO 01
Matheus Nachtergaele
"Virginia Cavendish" - FIZ ESSA RODANDO O CÓDIGO
canal: "Globo", horario: "14h" 

EXERCÍCIO 02
A
nome: "Juca", 
idade: 3, 
raca: "SRD"

nome: "Juba", 
idade: 3, 
raca: "SRD"

nome: "Jubo", 
idade: 3, 
raca: "SRD"

B - Ele espelha o objeto anterior.

EXERCÍCIO 03

A - false e Undefined
B - Ele imprimiu o resultado da boleana da linha Backender e imprimiu Undefined pois não há a característica altura no objeto pessoa. 
*/

const pessoa = {
    nome: 'Amanda',
    apelidos: ['Amandinha', 'Mandinha', 'Mandi']

}

console.log(`Meu nome é ${pessoa.nome}, mas pode me chamar de ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}.`)


const outrosApelidos = { ...pessoa, 
    apelidos: ['Mama', 'Anda', 'Dada']
    
}

console.log((`Meu nome é ${pessoa.nome}, mas pode me chamar de ${outrosApelidos.apelidos[0]}, ${outrosApelidos.apelidos[1]} ou ${outrosApelidos.apelidos[2]}.`))


const usuario = {
    nome: 'André',
    idade: 43,
    profissão: 'Funcionário Público'
    
}

const outroUsuario = {
    nome: 'Jariane',
    idade: 41,
    profissão: 'Professora'

}

const informacoes = (parametroUm) => {

    console.log(`${parametroUm.nome}, ${parametroUm.nome.length}, ${parametroUm.idade}, ${parametroUm.profissão}, ${parametroUm.profissão.length}`)
}

informacoes(usuario)
informacoes(outroUsuario)


let carrinho = []

const fruta1 = {
    nome: 'laranja',
    disponibilidade: true
}

const fruta2 = {
    nome: 'banana',
    disponibilidade: false
}

const fruta3 = {
    nome: 'abacaxi',
    disponibilidade: true

}
// a partir daqui não sei fazer mais. Preciso revisar as funções.
