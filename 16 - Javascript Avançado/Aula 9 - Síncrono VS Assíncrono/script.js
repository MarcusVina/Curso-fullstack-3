/*

SINCRONO vs ASSINCRONO 

*/

function primeira(){
    console.log('primeira')
    
}

function segunda(){
    console.log('segunda')
}


// setTimeout(primeira, 2000) // assincrono => vai aparecer após 2 seg

primeira() // sincrono 
segunda()