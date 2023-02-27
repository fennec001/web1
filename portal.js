//Crie uma função que receba duas strings e retorne os caracteres que não são 
//comuns entre elas. Exemplo:
//resolva(“xyab”,”xzca”) = “ybzc” 
//– A primeira string contém ‘yb’ que não estão presentes na segunda. 
//– A segunda string contém ‘zc’ que não estão presentes na primeira.

function resolva(){
let str0 = document.getElementById("c1").value
let str1 = document.getElementById("c2").value
let ans = "";
// Não será feito a verificação de uppercase pois caracteres maisculos e minusculos possuem códigos unicode diferentes, então interpretei que eles nao sao iguais 
for(let i = 0;i < str0.length;i++){
    if(!str1.includes(str0.charAt(i))){
        ans += str0.charAt(i)
    }   
 }
// seria possivel incluir os 2 strings dentro do mesmo for, porem como as strings não sao obrigatoriamente do mesmo tamanho
// precisaria fazer 2 laços de qualquer forma. Logo, decidi fazer da maneira que fica mais legivel
 for(let i = 0;i < str1.length;i++){
    if(!str0.includes(str1.charAt(i))){
        ans += str1.charAt(i)
    }   
 }
    
 if(str0===str1){
    return "As palavras são iguais"
 }
    return ans

    

}

function escreverNaTela(diferenca){    

    document.getElementById("local").innerHTML = diferenca   
}