let paragraph = document.getElementById('carta-gerada');
let inputInsert = document.getElementById('carta-texto');
let btnCreate = document.getElementById('criar-carta');

function letterGenerate() {
  let arrayWords = inputInsert.value.split(' ');
  for (let i = 0; i<arrayWords.length; i++){
    let createSpan = document.createElement('span');
    createSpan.innerHTML = arrayWords[i];
    paragraph.appendChild(createSpan);
  }
}


btnCreate.addEventListener('click', letterGenerate);