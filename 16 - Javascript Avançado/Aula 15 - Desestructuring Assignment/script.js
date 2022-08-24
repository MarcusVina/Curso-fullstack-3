/*

Desestructuring Assignment (Desestru(turação de atribuição)

*/



const obj = {
    nome: 'Marcus',
    idade: 24,
    cargo: 'Programador'

}

const {nome: nomeDoUsuario, 
    idade,
    cargo
} = obj

console.log(nomeDoUsuario)

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
   const dados = await fetch('https://jsonplaceholder.typicode.com/users/1') // na frente da função que é uma promise, tem que colocar await.
    .then(transormarEmJson) // Pode ter varios .then
    .catch(exibirErro) // so pode ter 1 catch

       /* AO INVES DE FAZER ASSIM
        const nome = dados.name
        const email = dados.email
        const phome = dados.phome

        */

        const {name, email, phone} = dados

        console.log(name, email, phone)



}








