const makeLetterBtn = document.querySelector('#criar-carta');
makeLetterBtn.addEventListener('click', () => {
  
});

function randomNumber(maxNumber) {
  const number = Math.round(Math.random() * maxNumber)

  return number;
}

function  sortClass() {
  const styleTypes = ['newspaper', 'magazine1', 'magazine2'];
  const sizeTypes = ['medium', 'big', 'reallybig'];
  const rotationTypes = ['rotateleft', 'rotateright'];
  const inclinationTypes = ['skewleft', 'skewright'];

  const wordStyle = {
    style: styleTypes[randomNumber(2)],
    size: sizeTypes[randomNumber(2)],
    rotation: rotationTypes[randomNumber(1)],
    inclination: inclinationTypes[(randomNumber(1))],
  }

  return wordStyle;
}

function explodePhrase(phrase) {
  const wordsArray = phrase.trim().split(' ');

  return wordsArray;
}