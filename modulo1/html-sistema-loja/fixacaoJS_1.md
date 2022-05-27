function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 // Escreva seu código aqui
    const comissãoPorCarro = 100
    const comissãoPercentual = 0.05
        
    salario = Number(2000) + (qtdeCarrosVendidos * comissãoPorCarro) + (valorTotalVendas * comissãoPercentual);
    return salario;

}