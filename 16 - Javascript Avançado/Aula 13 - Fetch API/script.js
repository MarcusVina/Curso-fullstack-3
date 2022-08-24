/*

PROMISES (PROMESSA)

*/

function transormarEmJson(response){
return response.json()
}

function exibitNaTela(dados){
    console.log('Exibir', dados)
}

function exibirErro(){
    console.log('Ops, deu erro! :(')
}


const botaoCarregar = document.querySelector('#botaoCarregar')

botaoCarregar.onclick = () => 
fetch('https://jsonplaceholder.typicode.com/photos', {
    method: 'GET'
})
.then(transormarEmJson) // Pode ter varios .then
.then(exibitNaTela)
.catch(exibirErro) // so pode ter 1 catch






