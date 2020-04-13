const cartaTexto = document.getElementById('carta-texto'); // Manipula a caixa de texto.
const btnCriarCarta = document.getElementById('criar-carta'); // Manipula botão gerar carta.
const cartaGerada = document.getElementById('carta-gerada'); // Manipula cartas geradas.
const estilos = [
  ['newspaper', 'magazine1', 'magazine2'],
  ['medium', 'big', 'reallybig'],
  ['rotateleft', 'rotateright'],
  ['skewleft', 'skewright'],
];

function adicionaClass(elemento) {
  for (let i = 0; i < 3; i += 1) {
    const grupo = Number.parseInt(Math.floor(Math.random() * estilos.length), 10);
    const estilo = Number.parseInt(Math.floor(Math.random() * estilos[grupo].length), 10);
    elemento.classList.add(estilos[grupo][estilo]);
    if (elemento.classList.length === 3) {
      break;
    }
  }
}

function insereCarta(vet) {
  cartaGerada.innerHTML = '';
  for (let i = 0; i < vet.length; i += 1) {
    const carta = document.createElement('span');
    carta.innerHTML = vet[i];
    adicionaClass(carta);
    cartaGerada.appendChild(carta);
  }
}

function geraCarta() {
  if (cartaTexto.value === '') {
    alert('Não há texto para gerar cartas.');
  } else {
    const textoDividido = cartaTexto.value.split(' '); // Vetor onde cada palavra é um índice.
    insereCarta(textoDividido);
  }
}

function eventBtnCriarCarta() {
  btnCriarCarta.addEventListener('click', geraCarta);
}

window.onload = function () {
  eventBtnCriarCarta();
};
