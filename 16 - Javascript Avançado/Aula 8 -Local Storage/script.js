/* 

LOCAL STORAGE / ARMAZENAMENTO LOCAL 

*/


const tarefas = [
    { tarefa: 'estudar js'},
    { tarefa: ' estudar inglês'},
    { tarefa: ' estudar node.js'},
]

const tarefasJson = JSON.stringify(tarefas)

localStorage.setItem('tarefas', tarefasJson)

const listaTarefasSalvas = localStorage.getItem('tarefas')

const listaTarefasObj = JSON.parse(listaTarefasSalvas) // transformando em objeto

console.log(listaTarefasObj)

