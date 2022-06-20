/* Questão 01
A - Será impresso no console 10 e 50
B - Não aparecerá nada
Questão 02
A - A função retorna o texto em letra minúscula e inclui uma expressão. A utilizade dela é padronizar o texto para letra minúsculas e inclui uma expressão definida para a função
1 - True
2 - True
3 - True

PS: Tive que executar no console pois não consegui ler o código.*/

// ESCRITA DE CÓDIGO
// EXERCÍCIO 1 
// A
function descrever() {
   console.log ('Eu sou André, tenho 43 anos, moro em Gravataí e sou funcionário público.')
}
   descrever()

// B
function outraDescricao() {
    const nome = 'André'
    const idade = '43'
    const cidade = 'Gravataí'
    const profissao = 'funcionario público'

    return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`

}
console.log (outraDescricao())

// EXERCÍCIO 2
// A
function somarDoisNumeros (num1, num2) {
    const soma = num1+num2
       return soma
}
console.log(somarDoisNumeros(1, 2))

// B

function maiorOuIgual (numero1, numero2) {

    const maior = numero1>=numero2
    return maior
}

console.log(maiorOuIgual(10, 8))

// C

function numeroPar (numeroPar) {
    const par = numeroPar % 2 === 0
    return par
}

console.log (numeroPar(10))


// D

function nome (AndreBalsemao) {
    const tamanhoNome = AndreBalsemao.length
    const maiusculaNome = AndreBalsemao.toUpperCase()
    return [tamanhoNome, maiusculaNome]
    
}
console.log(nome("AndreBalsemao"))




// EXERCÍCIO 3

let number1 = parseInt(prompt("Digite um número"))
let number2 = parseInt(prompt('Digite outro número'))

let somaNumeros=(number1, number2)=>{
    let soma2 = number1 + number2
    return soma2
}

let diminuiNumeros=(number1, number2)=>{
    let subtrai = number1-number2
    return subtrai

}

let multiplicaNumeros=(number1, number2)=>{
    let multiplica = number1*number2 
    return multiplica
}

let divideNumero=(number1, number2)=>{
    let divide = number1/number2
    return divide
}
console.log(`Numeros Inseridos: ${number1} ${number2}`)
console.log(`SOMA: ${somaNumeros(number1, number2)}`)
console.log(`DIFERENÇA: ${diminuiNumeros(number1, number2)}`)
console.log(`MULTIPLICAÇÃO: ${multiplicaNumeros(number1, number2)}`)
console.log(`DIVISÃO: ${divideNumero(number1, number2)}`)

