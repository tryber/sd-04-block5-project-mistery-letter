const textInput = document.querySelector('.carta-texto');
const text = document.querySelector('.carta-gerada');
const createBtn = document.querySelector('.criar-carta');

function addSpan(str) {
  const splitText = str.split(' ');
  splitText.forEach((item) => {
    const spanElement = document.createElement('span');
    spanElement.innerHTML = item;
    text.appendChild(spanElement);
  });
}

function deleteText() {
  const element = document.querySelector('.carta-gerada');
  while (element.firstChild) {
    element.removeChild(element.lastChild);
  }
}

createBtn.addEventListener('click', () => {
  deleteText();
  addSpan(textInput.value);
});
