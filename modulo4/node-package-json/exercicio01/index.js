// Utilizamos a propriedade process.arvg[], a partir da posição [2], pois a [0] e a [1] são nativas do node.js


const age = Number(process.argv[3]) + 7
console.log (`Olá ${process.argv[2]}. Você tem ${process.argv[3]} anos.`)
console.log (`Olá ${process.argv[2]}. Você tem ${process.argv[3]} anos. Em sete anos voce tera ${age}`)



