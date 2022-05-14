// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01

function calculaAreaRetangulo() {
  // implemente sua lógica aqui

      const number1 = Number(prompt('Digite o valor da altura do retângulo:')) 
      const number2 = Number(prompt('Digite o valor da largura do retângulo:'))   
      areaDoRetangulo = number1*number2
      console.log(areaDoRetangulo)
       
      }
     
      // EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
      const anoAtual = Number(prompt('Digite o valor da altura do retângulo:')) 
      const anoNascimento = Number(prompt('Digite o valor da largura do retângulo:'))   
      imprimeIdade = anoAtual - anoNascimento
      console.log(imprimeIdade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui

      peso = 
      altura = 
      calculaIMC = peso / (altura*altura)
      return calculaIMC

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
      const NOME = prompt('Informe o seu nome:')
      const IDADE = prompt('Informe a sua idade:')
      const EMAIL = prompt('Informe seu email:')

      console.log(`Meu nome é ${NOME}, tenho ${IDADE} anos, e o meu email é ${EMAIL}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
    const cor1 = prompt('Informe sua primeira cor favorita:')
    const cor2 = prompt('Qual sua segunda cor favorita:')
    const cor3 = prompt('Qual sua terceira cor favorita:')

    console.log ([cor1, cor2, cor3])
    
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

    return string.toUpperCase()
    
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
    custo = 
    valorIngresso =
    calculaIngressosEspetaculo = custo/valorIngresso
    return calculaIngressosEspetaculo
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
    
    const teste = string1.length == string2.length
    return teste
    
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
      
      return array[0]    
      
            
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

       return array[array.length -1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

  

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}