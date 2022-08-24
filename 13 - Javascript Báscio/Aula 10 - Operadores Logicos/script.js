let inputNota1 = prompt('Digite a primeira nota')

let inputNota2 = prompt('Digite a segunda nota')

let nota1 = parseInt(inputNota1)
let nota2 = parseInt(inputNota2)

let media = (nota1 + nota2) /2 

console.log(media)

let mediaMinima = 7 


if(media >= mediaMinima){
    document.write('Ok , Você está aprovado')
} else if(media < mediaMinima){
    document.write('Infelizmente você não foi aprovado')
}

document.write('<br>')

if (media >= mediaMinima && media === 10){ // as duas condições tem que ser verdadeira
    document.write('Nossa, você foi muito bem. Continue assim!')
} else if (media >= mediaMinima && media === 9){
    document.write('Você mandou bem! Vamos tentar alcançar um 10')
}