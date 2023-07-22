const VerificarItem = document.getElementById('numeroInput');
console.log(VerificarItem.textContent);

const buttonElement = document.getElementById('checkButton');
buttonElement.addEventListener('click', function() {
    
    if (VerificarItem.value < 8) {
        VerificarItem.classList.add('button-red');
        VerificarItem.classList.remove('button-green');
    
    }else if (VerificarItem.value = '') {
        alert('Digite um numero!!!')
        
    } else {
        
        VerificarItem.classList.add('button-green');
        VerificarItem.classList.remove('button-red');
       
    }
})