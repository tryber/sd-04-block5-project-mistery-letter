const criarCarta = document.getElementById('criar-carta');
const cartaTexto = document.getElementById('carta-texto');
const cartaGerada = document.getElementById('carta-gerada');
const styleGroup = ['newspaper', 'magazine1', 'magazine2'];
const sizeGroup = ['medium', 'big', 'reallybig'];
const rotateGroup = ['rotateleft', 'rotateright'];
const skewGroup = ['skewleft', 'skewright'];
const groups = [styleGroup, sizeGroup, rotateGroup, skewGroup];
const contador = document.getElementById('carta-contador');

function randomGroup(group) {
  const randomNumber = Math.floor(Math.random() * group.length);
  return group[randomNumber];
}

function addClass(element, newClass) {
  element.classList.add(newClass);
}

criarCarta.addEventListener('click', () => {
  cartaGerada.innerHTML = null;
  const words = cartaTexto.value.split(' ');
  for (let i = 0; i < words.length; i += 1) {
    const word = document.createElement('span');
    word.innerHTML = `${words[i]}`;
    for (let j = 0; j < groups.length; j += 1) {
      addClass(word, randomGroup(groups[j]));
    }
    cartaGerada.appendChild(word);
  }
  const numberOfWords = document.querySelectorAll('span').length;
  contador.innerHTML = numberOfWords;
});

cartaGerada.addEventListener('click', (e) => {
  if (e.target !== cartaGerada) {
    e.target.className = '';
    for (let i = 0; i < groups.length; i += 1) {
      addClass(e.target, randomGroup(groups[i]));
    }
  }
});
