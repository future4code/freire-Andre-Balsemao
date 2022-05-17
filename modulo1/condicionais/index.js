/* RESPOSTAS DOS EXERCÍCIOS DE INTERPRETAÇÃO
QUESTÃO 1
A) O código realiza o resto da divisão do número digitado pelo usuário.
B) Para números pares.
C) Para números ímpares.

QUESTÃO 2
A) A função serve para retornar o preço dos itens digitados pelo usuário. O Switch Case compara strings iguais.
B) O preço da fruta maçã é R$ 2,25
C) O preço da fruta pera é R$ 5

QUESTÃO 3
A) A primeira linha está recebendo do usuário o número que será testado.
B) Sendo o número digitado 10, o console ira retornar Esse número passou no teste. Se o número digitado for -10 havera um erro na função, pois não tem o comando ELSE.
C) Haverá erro no console, pois o console.log(mensagem) está fora do escopo global da condicional IF.
*/
// EXERCÍCIOS DE ESCRITA

const idadeUsuario = Number(prompt('Qual é a sua idade?'))

if(idadeUsuario >= 18) {
    console.log('Você pode dirigir.')
} else {
    console.log('Você não pode dirigir.')
}

const turnoDeEstudo = prompt('Qual seu turno de estudo? M (matutino). V (Vespertino) ou N (Noturno)')

if (turnoDeEstudo === 'M') {
    console.log('Bom dia!')
}

if (turnoDeEstudo === 'V') {
    console.log('Boa tarde!')
}

if (turnoDeEstudo === 'N') {
    console.log('Boa Noite')
} 

const turnoDeEstudo2 = prompt('Qual seu turno de estudo? M (matutino). V (Vespertino) ou N (Noturno)')

switch (turnoDeEstudo2) {
    case "M":
        console.log('Bom Dia!')
    break;
    
    case "V":
        console.log('Boa Tarde!')
    break
    
    case "N":
        console.log('Boa Noite!')
    break
    
    default:
        console.log('Turno não encontrado')
       
}

const assistirFilme = (tipoDeFilme, valorIngresso) => {


    if (tipoDeFilme && valorIngresso) {
        console.log('Bom Filme')
    } else {
        console.log('Escolha outro filme :(')
    }
}

const tipoDeFilme = prompt('Informe o gênero de filme que gostaria de assistir') === 'Fantasia'
const valorIngresso = prompt('Informe o valor do ingresso') < 15 

assistirFilme(tipoDeFilme, valorIngresso)
