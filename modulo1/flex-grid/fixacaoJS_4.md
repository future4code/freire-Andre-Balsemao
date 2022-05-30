function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  const contagem = 0;
  
  for ( const i = 0; i < arrayDeNumeros.length; i++) {
    if (arrayDeNumeros[i] === numeroEscolhido) {
      contagem = contagem + 1
    }
  }
  if(contagem !== 0) {
    return `O número ${numeroEscolhido} aparece ${contagem}x`
  } else {
    return `Número não encontrado`
  }
  
}