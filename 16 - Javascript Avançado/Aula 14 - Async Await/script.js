/*

ASSYNC / AWAIT

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

botaoCarregar.onclick = aoClicarNoBotao 

async function aoClicarNoBotao(){ // para o wait funcionar tem que ter o async antes da function
   const dados = await fetch('https://jsonplaceholder.typicode.com/photos') // na frente da função que é uma promise, tem que colocar await.
    .then(transormarEmJson) // Pode ter varios .then
    .catch(exibirErro) // so pode ter 1 catch

        console.log(dados)

}








