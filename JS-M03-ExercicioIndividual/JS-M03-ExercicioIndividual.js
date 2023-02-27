//Insira três caixas de texto na tela e um botão. Quando o usuário clicar nesse botão, 
//calcule a soma dos números digitados nas caixas de texto e a média aritmética. Crie uma 
//função para a soma e outra para a média. Mostre o resultado na tela para o usuário 
//conferir.
function guardarValores(){
    //esta função irá apenas armazenar e retornar os valores, um array com cada elemento das "caixinhas"... utilizando a funcao nativa Number para nao recebermos como string (sdds typescript)
    // a validação desta vez foi criada diretamente pelo HTML, e como a questão aceita numeros inteiros, float e negativos... não é necessário nada alem
    let valores = [Number(document.getElementById("c1").value), Number(document.getElementById("c2").value), Number(document.getElementById("c3").value)]
    return valores
}    

function somaValores(valores){
// devido a pequena quantidade de valores dentro do array, e a maneira que o problema pede que a questão seja construida, acredito que é mais legivel não utilizar um laço de repetição
    return (valores[0] + valores[1] + valores[2])
}


function mediaAritmetica(valores){
return (somaValores(valores) / valores.length)
}


function mostrarNaTela(texto,valor,local){
// a função foi criada desta forma para praticar a versatilidade do JS, conhecidentemente acredito que seria possivel utilizar uma função 
// bem parecida para resolver uma das questões do módulo seguinte
    document.getElementById(local).innerHTML = texto + valor 
}

function executarCodigo(){
// atribuindo a função guardarValores() a uma variavel para facilitar a legidibilidade
let valores = guardarValores()
mostrarNaTela("A soma é de: ",somaValores(valores),"resultadoSoma")
mostrarNaTela("A Média aritmética é de: ",mediaAritmetica(valores),"resultadoMedia")
}





