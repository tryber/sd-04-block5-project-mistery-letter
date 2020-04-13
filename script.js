const textoCarta = document.getElementById('carta-texto');
const geradaCarta = document.getElementById('carta-gerada');
const cartaCriar = document.getElementById('criar-carta');
const styleClasses = ['big', 'newspaper', 'magazine1', 'magazine2', 'medium', 'reallybig', 'rotateleft', 'rotateright', 'skewleft', 'skewright'];
const contadorCarta = document.getElementById('carta-contador');

cartaCriar.addEventListener('click', function () {
  const arrayLetter = textoCarta.value.split(' ');
  let counter = 0;
  for (let i = 0; i < arrayLetter.length; i += 1) {
    const span = document.createElement('span');
    span.innerHTML = arrayLetter[i];
    const idx = Math.floor(Math.random() * styleClasses.length); // https://stackoverflow.com/questions/11730917/apply-a-random-class-to-an-element
    span.classList.add(styleClasses[idx]); //   https://www.w3schools.com/howto/howto_js_add_class.asp
    geradaCarta.appendChild(span);
    counter += 1;
    contadorCarta.innerHTML = counter;
  }
})
