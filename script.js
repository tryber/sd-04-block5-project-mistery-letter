
let countWords = 0;
const textLetter = document.getElementById('carta-texto');
const btnGenerate = document.getElementById('criar-carta');
const letter = document.getElementById('carta-gerada');
const arrStyles = [['newspaper','magazine1','magazine2'], ['medium','big','reallybig'], ['rotateleft','rotateright'], ['skewleft','skewright']];
const letterCounter = document.getElementById('carta-contador');

btnGenerate.addEventListener('click', () => {
  letter.innerHTML = '';
  textLetter.value = textLetter.value.trim();
  let splitText = textLetter.value.split(' ');
  countWords = splitText.length;
  console.log(splitText)
  for (let i = 0; i < splitText.length; i += 1) {
    let elem = document.createElement('span');
    let text = document.createTextNode(splitText[i]);
    elem.appendChild(text);
    letter.appendChild(elem);
    let styles = getStylesNames();
    applyStyles(elem, styles[0], styles[1], styles[2]);
    letterCounter.innerHTML = `Total palavras: ${countWords}`;
  }
});

function getStylesNames() {
  let styles = [];
  let firstIndex = Math.floor(Math.random() * 4);
  let secondIndex = firstIndex;
  while (secondIndex === firstIndex) {
    secondIndex = Math.floor(Math.random() * 4);
  }
  let thirdIndex = secondIndex;
  while (thirdIndex === firstIndex || thirdIndex === secondIndex) {
    thirdIndex = Math.floor(Math.random() * 4);
  }
  let i = Math.floor(Math.random() * arrStyles[firstIndex].length);
  let j = Math.floor(Math.random() * arrStyles[secondIndex].length);
  let k = Math.floor(Math.random() * arrStyles[thirdIndex].length);
  let style1 = arrStyles[firstIndex][i];
  let style2 = arrStyles[secondIndex][j];
  let style3 = arrStyles[thirdIndex][k];
  styles[0] = style1;
  styles[1] = style2;
  styles[2] = style3;
  return styles;
}

function applyStyles(elem, style1, style2, style3) {
  elem.classList.add(style1);
  elem.classList.add(style2);
  elem.classList.add(style3);
}
