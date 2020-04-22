const inCarta = document.getElementById('carta-texto');
const pCarta = document.getElementById('carta-gerada');
const btnCarta = document.getElementById('criar-carta');

// Function declarations
function makePhrase() {
  if (inCarta.value !== '') {
    const arr = inCarta.value.split(' ');
    arr.forEach((element) => {
      const newSpan = document.createElement('span');
      newSpan.textContent = `${element}`;
      pCarta.appendChild(newSpan);
    });
  }
}

function styleShuffle() {
  let continueLoop = true;
  const random = Math.floor(Math.random() * 3);
  let randomStyle = '';
  while (continueLoop) {
    switch (random) {
      case 0:
        randomStyle = 'newspaper';
        continueLoop = false;
        break;
      case 1:
        randomStyle = 'magazine1';
        continueLoop = false;
        break;
      case 2:
        randomStyle = 'magazine2';
        continueLoop = false;
        break;
      default:
        continueLoop = true;
        break;
    }
  }
  return randomStyle;
}

function sizeShuffle() {
  let continueLoop = true;
  const random = Math.floor(Math.random() * 3);
  let randomSize = '';
  while (continueLoop) {
    switch (random) {
      case 0:
        randomSize = 'medium';
        continueLoop = false;
        break;
      case 1:
        randomSize = 'big';
        continueLoop = false;
        break;
      case 2:
        randomSize = 'reallybig';
        continueLoop = false;
        break;
      default:
        continueLoop = true;
        break;
    }
  }
  return randomSize;
}

function rotationShuffle() {
  let continueLoop = true;
  const random = Math.floor(Math.random() * 2);
  let randomRotation = '';
  while (continueLoop) {
    switch (random) {
      case 0:
        randomRotation = 'rotateleft';
        continueLoop = false;
        break;
      case 1:
        randomRotation = 'rotateright';
        continueLoop = false;
        break;
      default:
        continueLoop = true;
        break;
    }
  }
  return randomRotation;
}

function inclineShuffle() {
  let continueLoop = true;
  const random = Math.floor(Math.random() * 2);
  let randomIncline = '';
  while (continueLoop) {
    switch (random) {
      case 0:
        randomIncline = 'skewleft';
        continueLoop = false;
        break;
      case 1:
        randomIncline = 'skewright';
        continueLoop = false;
        break;
      default:
        continueLoop = true;
        break;
    }
  }
  return randomIncline;
}

btnCarta.addEventListener('click', () => {
  pCarta.innerHTML = '';
  makePhrase();
  const spanCarta = document.getElementsByTagName('span');
  [...spanCarta].forEach((element) => {
    element.classList.add(styleShuffle());
    element.classList.add(sizeShuffle());
    element.classList.add(inclineShuffle());
    element.classList.add(rotationShuffle());
  });
});
