const letter = document.querySelector('#carta-gerada');
const makeLetterBtn = document.querySelector('#criar-carta');
makeLetterBtn.addEventListener('click', () => {
  clearLetter();
  const textInput = document.querySelector('#carta-texto').value;
  const wordsArray = explodePhrase(textInput);
  wordsArray.forEach((word) => {
    const wordContainer = document.createElement('span');
    const wordStyle = sortClass();
    for (const style in wordStyle) {
      if (wordStyle.hasOwnProperty(style)) {
        wordContainer.classList.add(wordStyle[style]);
      }
    }
    wordContainer.innerHTML = word;
    letter.appendChild(wordContainer);
  });
  setStyleChangeEvent();
});

function randomNumber(maxNumber) {
  const number = Math.round(Math.random() * maxNumber);

  return number;
}

function sortClass() {
  const styleTypes = ['newspaper', 'magazine1', 'magazine2'];
  const sizeTypes = ['medium', 'big', 'reallybig'];
  const rotationTypes = ['rotateleft', 'rotateright'];
  const inclinationTypes = ['skewleft', 'skewright'];

  const wordStyle = {
    style: styleTypes[randomNumber(2)],
    size: sizeTypes[randomNumber(2)],
    rotation: rotationTypes[randomNumber(1)],
    inclination: inclinationTypes[(randomNumber(1))],
  };

  return wordStyle;
}

function explodePhrase(phrase) {
  const wordsArray = phrase.trim().split(' ');

  return wordsArray;
}

function clearLetter() {
  const letterContent = document.querySelector('#carta-gerada');
  while (letterContent.lastChild) {
    letterContent.lastChild.remove();
  }
}

function setStyleChangeEvent() {
  document.querySelectorAll('span').forEach((word) => {
    word.addEventListener('click', (e) => {
      e.target.className = '';
      const wordStyle = sortClass();
      for (const style in wordStyle) {
        if (wordStyle.hasOwnProperty(style)) {
          e.target.classList.add(wordStyle[style]);
        }
      }
    });
  });
}
