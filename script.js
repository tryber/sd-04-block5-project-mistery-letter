let i;
const inpCarTex = document.getElementById('carta-texto');
const butCriCar = document.getElementById('criar-carta');
const pCarGer = document.getElementById('carta-gerada');

function separateWords() {
  const words = inpCarTex.value.split(' ');
  // console.log(words)
  return words;
}

function includeSpan(words) {
  for (i = 0; i < words.length; i += 1) {
    const span = document.createElement('span');
    span.innerText = words[i];
    pCarGer.appendChild(span);
  }
}

function displayLetters() {
  includeSpan(separateWords());
}

butCriCar.addEventListener('click', displayLetters);
