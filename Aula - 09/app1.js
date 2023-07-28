const VerificarItem = document.getElementById('numeroInput');
console.log(VerificarItem.textContent);

 

const buttonElement = document.getElementById('checkButton');
buttonElement.addEventListener('click', function() {
    
    if (VerificarItem.value =='' ) {
       VerificarItem.classList(alert('digitar o numero é obrigatório!!!'))
       alert('digitar o numero é obrigadtório!!!')
    
    }else if (VerificarItem.value < 8 ) {
        VerificarItem.classList.add('button-red');
        VerificarItem.classList.remove('button-green');
        
    } else {
        
        VerificarItem.classList.add('button-green');
        VerificarItem.classList.remove('button-red');
       
    }
})
