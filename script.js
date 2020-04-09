const textoCarta = document.getElementById('carta-texto');
const criarCarta = document.getElementById('criar-carta');
const carta = document.getElementById('carta-gerada');
const allStyles = [['newspaper', 'magazine1', 'magazine2'], ['medium', 'big', 'reallybig'], ['rotateleft', 'rotateright'], ['skewleft', 'skewright']];
const cartaContador = document.getElementById('carta-contador');

function changeStyle(element) {
  element.className = '';
  const randomStyles = shuffle(allStyles);
  const numberStyles = Math.floor(Math.random() * (randomStyles.length - 1)) + 2;
  for (let i = 0; i < numberStyles; i += 1) {
    const selectedStyle = Math.floor(Math.random() * randomStyles[i].length);
    element.classList.add(randomStyles[i][selectedStyle]);
  }
}

function createSpam() {
  const words = textoCarta.value.split(' ');
  for (let i = 0; i < words.length; i += 1) {
    const spam = document.createElement('span');
    spam.innerText = words[i];
    changeStyle(spam);
    carta.appendChild(spam);
  }
  cartaContador.innerText = document.getElementsByTagName('span').length;
}

// Fisher–Yates shuffle

function shuffle(stylesClasses) {
  let m = stylesClasses.length;
  let lastOfRemainingClasses;
  let selectedRemainingClass;
  while (m) {
    selectedRemainingClass = Math.floor(Math.random() * m);
    m -= 1;
    lastOfRemainingClasses = stylesClasses[m];
    stylesClasses[m] = stylesClasses[selectedRemainingClass];
    stylesClasses[selectedRemainingClass] = lastOfRemainingClasses;
  }

  return stylesClasses;
}

carta.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    changeStyle(e.target);
  }
});
criarCarta.addEventListener('click', createSpam);
