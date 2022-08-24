

/*

GLOBAL 
LOCAL 

O ESCOPO DETERMINA A VISIBILIDADE DE UMA VARIÁVEL 

- AS FUNÇÕES NO JS ELAS CRIAM SEU PROPRIO SCOPO

- AS VARIAVEIS DE UMA FUNÇÃO NÃO SÃO ACESSIVEIS FORA DELA

*/


let a = 123 // Escopo global

function teste(){  
console.log(a)
}

teste()
