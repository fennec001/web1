// funcao para retornar o salario de acordo com o calculo
function salarioMensal(){
    if(document.getElementById("dias").value > 0 && document.getElementById("salario").value > 0 ){
    let dias = document.getElementById("dias").value;
        
    let salarioDiario = (document.getElementById("salario").value / 22);
    
    
    return (salarioDiario*dias);
} 
    
}














function escreverSalario(){
    if(!isNaN(salarioMensal())){
    document.getElementById("sobreescrever").innerHTML ="O salário do funcionário é de: "+salarioMensal();
} else alert("Numero Inválido!")
}

