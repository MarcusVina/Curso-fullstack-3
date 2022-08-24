

/*

HOISTING (IÇAR, ERGUER)

Hoisting é o comportamento padrão do JavaScript de mover as declarações para o topo de um escopo.

*/


function teste(){
//    outraFuncao() - ele puxa o function pra cima

    function outraFuncao(){
        console.log('Ok , sou a outra função')
    }

   outraFuncao()
}

teste()