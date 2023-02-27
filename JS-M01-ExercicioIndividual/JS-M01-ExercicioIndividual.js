//Escreva um programa e declare 5 variáveis de tipos diferentes. imprima no console o
// valor e o tipo de cada variável declarada.

function arrayDeTipos(){// declaração de variáveis
const arr = [NaN,"string",null,false,BigInt(0)]

// Imprimindo o tipo de cada variavel
for(x in arr){
 console.log(typeof arr[x])
}
}
