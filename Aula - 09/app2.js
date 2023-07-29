const tentativaInput = document.getElementById('tentativaInput');
const resultMessage = document.getElementById('resultMessage');

numero = tentativaInput
numeroSorteado = 30 //Math.floor(Math.random() * 100)

buttonElement = document.getElementById('checkButton');
buttonElement.addEventListener('click', function(){
 
    console.log(numeroSorteado) 

    if (numero > numeroSorteado) {
        resultMessage.classList.add('result-error');
        document.getElementById('resultMessage').innerHTML = 'ERROR!!!'
        
    } else if (numero == numeroSorteado) {
        resultMessage.classList.add('result-success');
        document.getElementById('resultMessage').innerHTML = 'SUCCESS'
        
    } else {
        resultMessage.classList.add('result-fail');
        document.getElementById('resultMessage').innerHTML = 'FAIL'
        
}


})
