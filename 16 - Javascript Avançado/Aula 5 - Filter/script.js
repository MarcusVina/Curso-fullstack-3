const clientes = [
    { name: 'Fulano', lastname: 'Da Silva', age: 14},
    { name: 'Ciclano', lastname: 'Santos', age: 18},
    { name: 'Beltrano', lastname: ' Moreira', age: 20},
]

const clientesMaiores = clientes.filter(cliente =>cliente.age >= 18  // vai funcionar como um if , vai buscar quem é maior de 18


)

console.log(clientesMaiores)