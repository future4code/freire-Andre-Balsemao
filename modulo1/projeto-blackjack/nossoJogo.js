/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log ('Boas vindas ao jogo de Blackjack!')
const novaRodada = confirm ('Quer iniciar uma nova rodada?')

if (novaRodada) {
   
   let cartaDoJogador1 = comprarCarta()
   let cartaDoJogador2 = comprarCarta()
   let cartaDoComputador1 = comprarCarta()
   let cartaDoComputador2 = comprarCarta()

   const pontuacaoTotalJogador = cartaDoJogador1.valor + cartaDoJogador2.valor
   const pontuacaoTotalComputador = cartaDoComputador1.valor + cartaDoComputador2.valor

   console.log(`Usuário - valor das cartas: ${cartaDoJogador1.texto} ${cartaDoJogador2.texto} - ${pontuacaoTotalJogador}`)
   console.log(`Computador - valor das cartas: ${cartaDoComputador1.texto} ${cartaDoComputador2.texto} - ${pontuacaoTotalComputador}`)

   if(pontuacaoTotalJogador > pontuacaoTotalComputador) {
      console.log('O Usuário ganhou!')
   }
   if(pontuacaoTotalComputador > pontuacaoTotalJogador) {
      console.log ('O Computador ganhou!')
   }
   if (pontuacaoTotalComputador === pontuacaoTotalJogador) {
      console.log('O jogo empatou!')
   }

} else {
   console.log('O jogo acabou!')
}

