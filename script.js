const cartaTexto = document.getElementById('carta-texto'); // Manipula a caixa de texto.
const btnCriarCarta = document.getElementById('criar-carta'); // Manipula botão gerar carta.
const cartaGerada = document.getElementById('carta-gerada'); // Manipula cartas geradas.

function insereCarta(vet) {
  cartaGerada.innerHTML = null;
  for (let i = 0; i < vet.length; i += 1) {
    const carta = document.createElement('span');
    carta.innerHTML = vet[i];
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
