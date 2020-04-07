const styleClasses = ['newspaper', 'magazine1', 'magazine2'];
const sizeClasses = ['medium', 'big', 'reallybig'];
const rotationClasses = ['rotateleft', 'rotateright'];
const skewClasses = ['skewleft', 'skewright'];

const input = document.getElementById('carta-texto');
const button = document.getElementById('criar-carta');
const text = document.getElementById('carta-gerada');

let string = '';
let array = [];

function selectStyle() {
  const a = Math.round(Math.random() * 2);
  return styleClasses[a];
}

function selectSize() {
  const a = Math.round(Math.random() * 2);
  return sizeClasses[a];
}

function selectRotation() {
  const a = Math.round(Math.random());
  return rotationClasses[a];
}

function selectSkew() {
  const a = Math.round(Math.random());
  return skewClasses[a];
}

function renderizar() {
  for (let i = 0; i < array.length; i += 1) {
    const span = document.createElement('span');
    span.classList.add(selectStyle());
    span.classList.add(selectSize());
    span.classList.add(selectRotation());
    span.classList.add(selectSkew());
    span.innerHTML = array[i];
    text.appendChild(span);
  }
}

button.addEventListener('click', () => {
  text.innerHTML='';
  string = input.value;
  array = string.split(' ');

  renderizar();
})