
    //const pageTitleElement = document.getElementById('pageTitle');
    //console.log(pageTitleElement.textcontent); //saida "Titulo da pagina"

    //const paragraphElement = document.getElementById('paragraph');
   // paragraphElement.textContent = 'Novo paragrafo';


  // const firstListItem = document.querySelector('li');
  // console.log(firstListItem.textContent);
            //saida do item 1

   //const ListItem = document.querySelectorAll('li');
 //  ListItem.forEach(item => console.log(item.textContent));
            //Saida "Item 1", "Item 2" , "Item 3"

//const buttonElement = document.getElementById('btnClick');
//console.log(buttonElement.getAttribute('id')); //saida: "btnClick"

//buttonElement.setAttribute('disabled', true); // Desabilita o botao 

//const pageTitleElement = document.getElementById('pageTitle');
//console.log(pageTitleElement.textContent)

//pageTitleElement.classList.add('red')
//adiciona a class 'red'

//pageTitleElement.classList.remove('red')
//remove a class 'red'

//pageTitleElement.classList.add('green')
//adiciona a class 'green'


//const listElement = document.getElementById('list');
//listElement.innerHTML += '<li>Item 4</li>';
    //Adiciona um novo á lista 

//const paragraphElement = document.getElementById('paragraph');
//paragraphElement.innerHTML = '<strong> Texto em negrito</strong>';
    //Altera o conteúdo do parágrafo

//const listElement = document.getElementById('list');
//const newListItem = document.createElement('li');
//newListItem.textContent = 'item 5';
//listElement.appendChild(newListItem); //adiciona um novo item a list

//const firstListItem = document.querySelector('li');
//listElement.removeChild(firstListItem);

const buttonElement = document.getElementById('btnClick');
buttonElement.addEventListener('click', function() {
    alert('Você clicou no botão!');
})
