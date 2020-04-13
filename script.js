const textoCarta = document.getElementById('carta-texto');
const geradaCarta = document.getElementById('carta-gerada');
const cartaCriar = document.getElementById('criar-carta');
const styleClasses = ['big', 'newspaper', 'magazine1', 'magazine2', 'medium', 'reallybig', 'rotateleft', 'rotateright', 'skewleft', 'skewright'];

cartaCriar.addEventListener('click', function () {
  let arrayLetter = textoCarta.value.split(' ');
  for (let i = 0; i < arrayLetter.length; i += 1) {
    const span = document.createElement('span');
    span.innerHTML = arrayLetter[i];
    let idx = Math.floor(Math.random() * styleClasses.length);
    span.classList.add(styleClasses[idx]);
    geradaCarta.appendChild(span);
  }
})
