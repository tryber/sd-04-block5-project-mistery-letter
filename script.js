// Query selectors
const textInput = document.querySelector('.carta-texto');
const text = document.querySelector('.carta-gerada');
const createBtn = document.querySelector('.criar-carta');

// Create and randomly add style classes to words
function addRandomClass() {
  const spans = document.querySelectorAll('span');
  spans.forEach((item) => {
    // Word styles arrays
    const styleGroup = ['newspaper', 'magazine1', 'magazine2'];
    const sizeGroup = ['medium', 'big', 'reallybig'];
    const rotationGroup = ['rotateleft', 'rotateright'];
    const inclinationGroup = ['skewleft', 'skewright'];

    const stylesArrays = [styleGroup, sizeGroup, rotationGroup, inclinationGroup];

    for (let i = 1; i <= Math.round(Math.random() * (4 - 2)) + 2; i += 1) {
      const selectedGroup = stylesArrays[Math.round(Math.random() * (stylesArrays.length - 1))];
      const selectedStyle = selectedGroup[Math.round(Math.random() * (selectedGroup.length - 1))];
      stylesArrays.splice(stylesArrays.indexOf(selectedGroup), 1);
      item.classList.add(selectedStyle);
    }
  });
}

// Add span to words
function addSpan(str) {
  const splitText = str.split(' ');
  splitText.forEach((item) => {
    const spanElement = document.createElement('span');
    spanElement.innerHTML = `${item} `;
    spanElement.addEventListener('click', () => {
      spanElement.className = '';
      addRandomClass();
    });
    text.appendChild(spanElement);
  });
}

// Delete generated words
function deleteText() {
  const element = document.querySelector('.carta-gerada');
  while (element.firstChild) {
    element.removeChild(element.lastChild);
  }
}

// Create text button
createBtn.addEventListener('click', () => {
  deleteText();
  addSpan(textInput.value);
  addRandomClass();
});
