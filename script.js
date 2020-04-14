let resultado;
let input;
let count;

let allClasses = {
  0: ['newspaper', 'magazine1', 'magazine2'],
  1: ['medium', 'big', 'reallybig'],
  2: ['rotateleft', 'rotateright'],
  3: ['skewleft', 'skewright'],
}

function randomClass(element) {
  element.className = "";
  for (let i in allClasses) {
    let randomIndex = parseInt(Math.random() * allClasses[i].length);
    element.classList.add(allClasses[i][randomIndex]);
  }
}

function criarPalavra(text) {
  let palavra = document.createElement('span');
  palavra.innerText = `${text} `;
  palavra.addEventListener("click", function (event) {
    randomClass(event.target)
  });
  return palavra;
}

function deletarCarta() {
  let resultLength = resultado.childNodes.length;
  for (let i = 0; i < resultLength; i += 1) {
    resultado.removeChild(resultado.lastChild);
  }
}

function criarCarta() {
  let words = input.value.split(' ');
  count.innerText = words.length;
  if (resultado.hasChildNodes) {
    deletarCarta();
  }
  for (let i = 0; i < words.length; i += 1) {
    let palavra = criarPalavra(words[i]);
    resultado.appendChild(palavra);
    randomClass(palavra);
  }
}

function addEvents() {
  document.getElementById('criar-carta').addEventListener('click', criarCarta);
}

function setParameters() {
  resultado = document.getElementById('carta-gerada');
  input = document.getElementById('carta-texto');
  count = document.getElementById('carta-contador')
}

window.onload = function () {
  addEvents();
  setParameters();
}
