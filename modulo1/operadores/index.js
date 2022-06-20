/* Questão 01
a.  false
b.  false
c.  true
d.  boolean

Questão 02
Acredito que a falha está em declarar a função como let e não const

Questão 03
const primeiroNumero = prompt("Digite um numero!")
const segundoNumero = prompt("Digite outro numero!")
const soma = primeiroNumero + segundoNumero
console.log(soma) */

const suaIdade = prompt("Digite a sua idade!")
const idadeSeuAmigo = prompt("Digite a idade do seu melhor amigo(a)!")
console.log ("Sua idade é maior do que a do seu melhor amigo?", suaIdade>idadeSeuAmigo)
console.log ("A diferença de idade entre eu e o meu melhor amigo(a) é de",diferença = suaIdade - idadeSeuAmigo, "anos.")


const numeroPar = prompt("Digite um número par!")
console.log (numeroPar % 2)
/* Sempre que digito números pares retorna valor 0 e quando coloco números impares retorna valor 1*/

console.log ("A minha idade em meses é de",suaIdade * 12, "meses.")
console.log ("A minha idade em dias é de",suaIdade * 365, "dias.")
console.log ("A minha idade em horas é de",(suaIdade * 365) *24, "horas.")

let num01 = prompt ("Digite um número!")
let num02 = prompt ("Digite outro número!")

console.log ("O primeiro número é maior que o segundo número?", num01 > num02)
console.log ("O primeiro número é igual ao segundo número?", num01 === num02)
console.log ("O primeiro número é divisível pelo segundo número?", (num01 % num02)=== 0) 
console.log ("O segundo número é divisível pelo primeiro número?", (num02 % num01)=== 0)



