const VerificarItem = document.getElementById('numeroInput');
console.log(VerificarItem.textContent);

const resultadoMensagem = document.getElementById('resultadoMensagem');
console.log(VerificarItem.textContent);



const buttonElement = document.getElementById('checkButton');
buttonElement.addEventListener('click', function() {
    
    if (VerificarItem.value =='' ) {
       (alert('digitar o numero é obrigatório!!!'))
       document.getElementById('resultadoMensagem').innerHTML = 'Numero vazio';
    
    }else if (VerificarItem.value < 8 ) {
        resultadoMensagem.classList.add('button-red');
        resultadoMensagem.classList.remove('button-green');
        document.getElementById('resultadoMensagem').innerHTML = 'Numero menor que 8';
    } else {
        
        resultadoMensagem.classList.add('button-green');
        resultadoMensagem.classList.remove('button-red');
        document.getElementById('resultadoMensagem').innerHTML = 'Numero maior que 10';
    }
})
