// Button and Input

const button = document.querySelector('#criar-carta');
const input = document.querySelector('#carta-texto');

// Necessary áreas



// arrays groups

let styleGroup = ['newspaper', 'magazine1', 'magazine2'];
let sizeGroup = ['medium', 'big', 'reallybig'];
let rotateGroup = ['rotateleft', 'rotateright'];
let inclineGroup = ['skewleft', 'skewright'];

// create <span> tag

const spanTag = document.createElement('span');

// start testing area

button.addEventListener('click', function(){
  let text = input.value;
  let pTag = document.querySelector('#texto');
  if(input.value !== ""){
    pTag.appendChild(spanTag);
    pTag.firstChild.innerHTML = text;
  }else{
    alert('Por favor preencha o campo com o texto desejado!');
  }
})

// end testing area