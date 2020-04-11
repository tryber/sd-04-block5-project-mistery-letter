
let countWords = 0;
const textLetter = document.getElementById('carta-texto');
const btnGenerate = document.getElementById('criar-carta');
const letter = document.getElementById('carta-gerada');
const arrStyles = [['newspaper','magazine1','magazine2'], ['medium','big','reallybig'], ['rotateleft','rotateright'], ['skewleft','skewright']];
const letterCounter = document.getElementById('carta-contador');
let styles = [];

btnGenerate.addEventListener('click', () => {
  letter.innerHTML = '';
  textLetter.value = textLetter.value.trim();
  let splitText = textLetter.value.split(' ');
  countWords = splitText.length;
  for (let i = 0; i < splitText.length; i += 1) {
    let elem = document.createElement('span');
    let text = document.createTextNode(splitText[i]);
    elem.appendChild(text);
    letter.appendChild(elem);
    let stylesL = getStylesNames();
    applyStyles(elem, stylesL[0], stylesL[1], stylesL[2]);
    letterCounter.innerHTML = countWords;
    styles = [];
  }
});

function getStylesNames() {
  let firstIndex = Math.floor(Math.random() * 4);
  let secondIndex = firstIndex;
  while (secondIndex === firstIndex) {
    secondIndex = Math.floor(Math.random() * 4);
  }
  let thirdIndex = secondIndex;
  while (thirdIndex === firstIndex || thirdIndex === secondIndex) {
    thirdIndex = Math.floor(Math.random() * 4);
  }
  let arrayIndex = [firstIndex, secondIndex, thirdIndex];
  teste(arrayIndex);
  return styles;
}


function teste(arr) {
  let num = 0;
  for (let i = 0; i < arr.length; i++){
      let j = arr[i]
      num = Math.floor(Math.random() * arrStyles[j].length);
      styles.push(arrStyles[j][num]);
  }
}


function applyStyles(elem, style1, style2, style3) {
  elem.classList.add(style1);
  elem.classList.add(style2);
  elem.classList.add(style3);
}
