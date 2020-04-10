
const textLetter = document.getElementById('carta-texto');
const btnGenerate = document.getElementById('criar-carta');
const letter = document.getElementById('carta-gerada');
const arrStyles = [['newspaper','magazine1','magazine2'], ['medium','big','reallybig'], ['rotateleft','rotateright'], ['skewleft','skewright']];

btnGenerate.addEventListener('click', () => {
  letter.innerHTML = '';
  let splitText = textLetter.value.split(' ');
  for (let i = 0; i < splitText.length; i += 1) {
    let elem = document.createElement('span');
    let text = document.createTextNode(splitText[i]);
    elem.appendChild(text);
    letter.appendChild(elem);
    let styles = getStylesNames();
    applyStyles(elem, styles[0], styles[1]);
  }
});

function getStylesNames() {
  let styles = [];
  let firstIndex = Math.floor(Math.random() * 4);
  let secondIndex = firstIndex;
  while (secondIndex === firstIndex) {
      secondIndex = Math.floor(Math.random() * 3);
  }
  let i = Math.floor(Math.random() * arrStyles[firstIndex].length);
  let j = Math.floor(Math.random() * arrStyles[secondIndex].length);
  let style1 = arrStyles[firstIndex][i];
  let style2 = arrStyles[secondIndex][j];
  styles[0] = style1;
  styles[1] = style2;
  return styles;
}

function applyStyles(elem, style1, style2) {
  elem.classList.add(style1);
  elem.classList.add(style2);
}
