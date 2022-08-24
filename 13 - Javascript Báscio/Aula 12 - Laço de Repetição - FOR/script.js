

/*
for (let contador = 0; contador <= 5000; contador++){
    document.write(`Hello Word! ${contador}`) // numeros ficam ao lado do hello word
    document.write('<br>')
} 
*/

let opcoes


for (let contador = 2022; contador >= 1900; contador --){
opcoes = opcoes + `<option>${contador}</option>` // concatenou o opcoes
}
document.querySelector('#ano').innerHTML = opcoes

let lista = '' //  declara vazio para sair o primeiro undefined

let clientes = ['Thiago', 'Marcus','Monique','Maria']



for (let contador = 0; contador<= clientes.length - 1 ; contador++) { // como ele tem 4 , e começa do  0 , pro 4 nao da undefined , colocamos o -1
    lista += `<li>${clientes[contador]}</li>`
    document.querySelector('#listaClientes').innerHTML = lista


}