const clientes = [
    { name: 'Fulano', lastname: 'Da Silva'},
    { name: 'Ciclano', lastname: 'Santos'},
    { name: 'Beltrano', lastname: ' Moreira'},
]

// ['Fulano da Silva', 'Ciclano Santos']

let clientesFinal =[]

clientes.forEach(function(cliente){
    clientesFinal.push(cliente.name + '' + cliente.lastname)
})

console.log(clientesFinal)




const clientesFinalMap = clientes.map(cliente => cliente.name + ' ' + cliente.lastname)


console.log(clientesFinalMap)