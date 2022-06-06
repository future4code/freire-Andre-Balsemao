function calculaPrecoTotal(quantidade) {
  
  let custoTotalDaCompra = Number (0)
  let valorUnitario = Number (0)
  
  if (quantidade < 12){
    valorUnitario = 1.30
  } else {
    valorUnitario = 1
  }
  custoTotalDaCompra = valorUnitario * quantidade
  return custoTotalDaCompra
}