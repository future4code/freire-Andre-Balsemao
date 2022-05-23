// QUESTÕES DE INTERPRETAÇÃO DE CÓDIGO
// 01 - Irá imprimir 3 vezes o array.
// 02 - Irá imprimir uma array somente com os nomes.
// 03 - Irá imprimir uma nova array excluindo o item CHIJO, ou seja somente com os dois primeiros itens.

// QUESTÕES DE ESCRITA DE CÓDIGO

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

const nomePets = pets.map((item, index, array)=>{
    return item.nome

})
console.log(nomePets)

const petsSalsicha = pets.filter((item, index, array)=>{
    return item.raca === "Salsicha"
        
})
console.log(petsSalsicha)

const descontoPoodles = pets.filter(( item, index, array)=>{
    return item.raca === "Poodle"
  
})
const nomePoodles = descontoPoodles.map(( item, index, array) => {
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`
})
console.log(nomePoodles)


const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 const somenteProdutos = produtos.map((item, indice, array)=>{
     return item.nome
 })
 console.log(somenteProdutos)

 const descontoProdutos = produtos.map((item, index, array)=>{
    const precoDescontado = item.preco * 0.95 
    return `${item.nome} ${precoDescontado}`
 })
 console.log(descontoProdutos)


 const produtosBebidas = produtos.filter((item)=>{
     return item.categoria === 'Bebidas'
 })
 console.log(produtosBebidas)


const produtosYpe = produtos.filter((item)=>{
    if (item.nome.includes('Ypê')) {
        return item
    }
})
console.log(produtosYpe)

const compreYpe = produtos.filter((item)=>{
    if (item.nome.includes('Ypê')) {
        return `${item.nome} ${item.preco}`
    }
})

const novoArrayIpe = compreYpe.map((item)=>{
    return `Compre ${item.nome} por ${item.preco}`
})

console.log(novoArrayIpe)

