
const textLetter = document.getElementById('carta-texto');
const btnGenerate = document.getElementById('criar-carta');
const letter = document.getElementById('carta-gerada');

btnGenerate.addEventListener('click', () => {
  let splitText = textLetter.value.split(' ');
  for (let i = 0; i < splitText.length; i += 1) {
    let elem = document.createElement('span');
    let text = document.createTextNode(splitText[i]);
    elem.appendChild(text);
    letter.appendChild(elem);
  }
});
