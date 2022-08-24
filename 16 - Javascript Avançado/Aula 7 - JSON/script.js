/*

JSON 

JAVASCRIPT OBJECT  NOTATION 

*/

const objeto = {
    nome: 'Marcus',
    idade: 23,
}
 const json = JSON.stringify(objeto)

 const jsonParseado = JSON.parse(json)
console.log(jsonParseado.idade)