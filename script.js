const cartaTexto = document.getElementById('carta-texto'); // Manipula a caixa de texto.
const btnCriarCarta = document.getElementById('criar-carta'); // Manipula botão gerar carta.
const cartaGerada = document.getElementById('carta-gerada'); // Manipula cartas geradas.

//function insereCarta(vet) {
//  cartaGerada.innerHTML = '';
//  for (let i = 0; i < vet.length; i += 1) {
//    const carta = document.createElement('span');
//    carta.innerText = vet[i];
//    cartaGerada.appendChild(carta);
//  }
//}

//function geraCarta() {
//  if (cartaTexto.value === '') {
//    alert('Não há texto para gerar cartas.');
//  } else {
//    const textoDividido = cartaTexto.value.split(' '); // Vetor onde cada palavra é um índice.
//    insereCarta(textoDividido);
//  }
//}

function geraCarta() {
  const textoDividido = cartaTexto.value.split(' '); // Vetor onde cada palavra é um índice.
  cartaGerada.innerHTML = '';
  for (let i = 0; i < textoDividido.length; i += 1) {
    const carta = document.createElement('span');
    carta.innerText = textoDividido[i];
    cartaGerada.appendChild(carta);
  }
}

function eventBtnCriarCarta() {
  btnCriarCarta.addEventListener('click', geraCarta);
}

window.onload = function () {
  eventBtnCriarCarta();
};
