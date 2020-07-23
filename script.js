
function calcular(){
    var operacao =document.getElementById('operacao').value
    var num1 = document.getElementById('num1').value
    var num2 = document.getElementById('num2').value
    
    num1 = parseFloat(num1)
    num2 = parseFloat(num2)
    if(num1 == '' || num1 == null){
        alert('Favor digitar um número válido para a operação')
        return false
    }
    if(num2 == '' || num2 == null){
        alert('Favor digitar um número válido para a operação')
        return false
    }
    var result = null;

    switch(operacao){
        case '1'://subtração
            result = num1 - num2
            break
        case '2'://adição
            result = num1 + num2
            break
        case '3'://multiplicação
            result = num1 * num2
            break
        case '4'://divisão
            result = num1 / num2
            break
        default:
            alert('Operação selecionada é inválida');
            return false
    }
     
    document.getElementById('result').value = result;

}