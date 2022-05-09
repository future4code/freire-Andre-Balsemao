// na atividade 1 o console irá imprimir 10 em uma linha e 10 5 na outra linha

// na atividade 2 o console irá imprimir 10 10 10

// na atividade 3 irá abrir uma janela perguntando ao usuário Quantas horas você trabalha por dia?, depois aparecerá uma janela perguntando Quanto você recebe por dia?, depois aparecerá uma janela com o resultado do valor recebido por hora, pois divide o valor por dia pela quantidade de horas trabalhadas. No console retorna o resultado da divisão, no caso 8.

const nome = "André"
const idade = 43

console.log (typeof nome)
console.log (typeof idade)
// A resposta foi impressa pois usei o comando console.log antes do comando typeof.

let nomeDoUsuario = prompt("Qual é o seu nome?")
let idadeDoUsuario = prompt("Qual é a sua idade?")
//Para que possa fazer com que o usuário insira as informações, preciso fazer alterar os nomes das funções para não haver sobreposição de comandos.

console.log (typeof nomeDoUsuario)
console.log (typeof idadeDoUsuario)
console.log ("Olá", nomeDoUsuario, "você tem", idadeDoUsuario, "anos.")

let generoDoUsuario = prompt ("Você se reconhece como homem cisgenero?")
let cabeloDoUsuario = prompt ("Você tem cabelo loiro?")
let roupaDoUsuario = prompt ("Você está usando bermuda hoje?")
console.log ("Você é homem? -", generoDoUsuario)
console.log ("Você tem cabelo loiro? -", cabeloDoUsuario)
console.log ("Você está usando bermuda hoje? -", roupaDoUsuario)

let a = 25
let b = 10

c = a
a = b


console.log("O novo valor de a é", a)
console.log("O novo valor de b é", c)



