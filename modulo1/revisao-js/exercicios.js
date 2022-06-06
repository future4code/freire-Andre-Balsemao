// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  
  return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {

    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    
    return array.sort((a, b) => a - b)
  
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const arrayDeNumerosPares = array.filter((numero)=>{
        if (numero % 2 === 0)
        return true
           
    })
    return arrayDeNumerosPares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const arrayNumerosPares = array.filter((numero)=>{
        if (numero % 2 === 0){
        return true
        }
    })
    const arrayDeNumerosElevados = arrayNumerosPares.map((numero)=>{
        return numero ** 2
    })
     return arrayDeNumerosElevados
}
 
// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maior = -Infinity
    for (let numero of array){
        if(numero > maior){
            maior = numero
        }
    }
    return maior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let objeto = {
        maiorNumero: Math.max(num1, num2),
        maiorDivisivelPorMenor: Math.max(num1, num2) % Math.min(num1, num2) === 0,
        diferenca: Math.abs(num1 - num2)
    }
    return objeto

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    const recebeNumerosPares = [];
    for (let i = 0; recebeNumerosPares.length < n; i++) {
        if (i % 2 == 0) {
            recebeNumerosPares.push(i)
        }
    }
   return recebeNumerosPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA !== ladoB && ladoB !== ladoC && ladoC !== ladoA){
        return 'Escaleno'
    }
    if (ladoA === ladoB && ladoB !== ladoC && ladoC !== ladoA){
        return 'Isósceles'
    }
    if (ladoA === ladoB && ladoB === ladoC && ladoC === ladoA){
        return 'Equilátero'
    }
    if (ladoA !== ladoB && ladoB !== ladoC && ladoC === ladoA){
        return 'Isósceles'
    }
    if (ladoA !== ladoB && ladoB === ladoC && ladoC !== ladoA){
        return 'Isósceles'
    }

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {

    const arrayNumerosOrdenados = array.sort((a, b) => b - a)
       arrayNumerosOrdenados [1] = primeiro
       arrayNumerosOrdenados [arrayNumerosOrdenados.length -2] = ultimo
    
    return arrayNumerosOrdenados
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(`, `)}.`

   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    const novaPessoa = {
        ...pessoa,
        nome: 'ANÔNIMO'
    }
    return novaPessoa
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
       
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
<<<<<<< HEAD
<<<<<<< HEAD
}


=======
>>>>>>> 125c5e8932cc54af455e20f68e2a1037801cb22f

=======


>>>>>>> c3a5f03b4f91865bb6e7b97ed5f55d573303e4fc
