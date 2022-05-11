/*
undefined
null
11
3
Array(11)
9 
SUBI NUM ÔNIBUS EM MIRROCOS
*/

const nomeDoUsuario = prompt ("Digite seu nome")
const emailDoUsuario = prompt ("Digite o seu e-mail")

console.log (`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`)

const comidas = ["Churrasco", 'Carreteiro', 'Bife Amilanesa', 'Lasanha', 'Pizza']
console.log (comidas)
console.log (`Essas são as minhas comidas favoritas:`)
console.log (comidas[0])
console.log (comidas[1])
console.log (comidas[2])
console.log (comidas[3])
console.log (comidas[4])

const comidaDoUsuario = prompt ("Digite sua comida favorita")
const novaComida = comidas.toString().replaceAll("Carreteiro", comidaDoUsuario) 
console.log(novaComida)

let listaDeTarefas = []
const perguntaUm = prompt ('Informe uma tarefa a ser realizada')
const perguntaDois = prompt ('Informa outra tarefa ser ralizada')
const perguntaTres = prompt ('Informe mais uma tarefa')

listaDeTarefas.push (perguntaUm)
listaDeTarefas.push (perguntaDois)
listaDeTarefas.push (perguntaTres)

console.log(listaDeTarefas)
const tarefaConcluida = prompt ('Informe a tarefa concluída (0,1,2)')
listaDeTarefas.splice (tarefaConcluida, 1)
console.log (listaDeTarefas)








