// Button and Input

const button = document.querySelector('#criar-carta');
const input = document.querySelector('#carta-texto');
const count = document.querySelector('#carta-contador');


// arrays groups

let styleGroup = ['newspaper', 'magazine1', 'magazine2'];
let sizeGroup = ['medium', 'big', 'reallybig'];
let rotateGroup = ['rotateleft', 'rotateright'];
let inclineGroup = ['skewleft', 'skewright'];
let todosGroup = [styleGroup, sizeGroup, rotateGroup, inclineGroup];

// create <span> tag and <p> tag

let spantag = document.createElement('span');
let ptag = document.querySelector('#carta-gerada'); 

// start testing area

function novaClasse(elemento, classe){
  elemento.classList.add(classe);
};
//let teste = novaClasse(button, 'big');
//console.log(teste);

function randomizar(grupo){
  let grupoRandom = Math.floor(Math.random() * grupo.length);
  return grupo[grupoRandom];
};
//let teste2 = randomizar(styleGroup);
//console.log(teste2);



button.addEventListener('click', function(){  
  if(input.value !== ""){
    // zerar o paragrafo para inserir nova carta.
    ptag.innerHTML = null;
    let word = input.value.split(' ');
    for (let i = 0; i < word.length; i += 1){
      let spantag = document.createElement('span');
      spantag.innerHTML = word[i]; 
      for( let j = 0; j < todosGroup.length; j += 1){
        let umaClasse = randomizar(todosGroup[j]);
        //console.log(todosGroup[j]);
       novaClasse(spantag, umaClasse)
      }     
      ptag.appendChild(spantag);
      // contador
      let numero = input.value.split(' ').length;
      count.innerHTML = numero;
    }
  }else{
    alert('Por favor preencha o campo com o texto desejado!');
  }
})

// function contador(){
//   let numero = input.value.split(' ').length;
//   count.innerHTML = `A frase digitada acima possui: ${numero} palavras `;
// }

ptag.addEventListener('mouseover', function(event){
  console.log(event.target);
})

// end testing area