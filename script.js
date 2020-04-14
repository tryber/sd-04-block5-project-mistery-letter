const criarCarta = document.getElementById('criar-carta');
const cartaTexto = document.getElementById('carta-texto');
const cartaGerada = document.getElementById('carta-gerada');
const cartaContador = document.getElementById('carta-contador');
const estilo = ['newspaper', 'magazine1', 'magazine2'];
const tamanho = ['medium', 'big', 'reallybig'];
const rotacao = ['rotateleft', 'rotateright'];
const inclinacao = ['skewleft', 'skewright'];
const spanList = document.getElementsByTagName('span');
const divCounter = document.getElementsByTagName('div');

criarCarta.addEventListener('click', () => {
  while (spanList.length > 0) {
    spanList[0].remove();
  }
  if (cartaTexto.value) {
    const splitedText = cartaTexto.value.split(' ');
    for (let index = 0; index < splitedText.length; index += 1) {
      const estiloR = estilo[Math.floor(Math.random() * estilo.length)];
      const tamanhoR = tamanho[Math.floor(Math.random() * tamanho.length)];
      const rotacaoR = rotacao[Math.floor(Math.random() * rotacao.length)];
      const inclinacaoR = inclinacao[Math.floor(Math.random() * inclinacao.length)];
      const spanElement = document.createElement('span');
      const spanTextNode = document.createTextNode(`${splitedText[index]}`);

      spanElement.appendChild(spanTextNode);
      spanElement.setAttribute('id', 'carta-gerada');
      spanElement.setAttribute('class', `${estiloR} ${tamanhoR} ${rotacaoR} ${inclinacaoR}`);
      cartaGerada.appendChild(spanElement);
    }
  }
});

cartaGerada.addEventListener('click', (event) => {
  const estiloR = estilo[Math.floor(Math.random() * estilo.length)];
  const tamanhoR = tamanho[Math.floor(Math.random() * tamanho.length)];
  const rotacaoR = rotacao[Math.floor(Math.random() * rotacao.length)];
  const inclinacaoR = inclinacao[Math.floor(Math.random() * inclinacao.length)];
  event.target.removeAttribute('class');
  event.target.setAttribute('class', `${estiloR} ${tamanhoR} ${rotacaoR} ${inclinacaoR}`);
});

criarCarta.addEventListener('click', () => {
  while (divCounter.length > 0) {
    divCounter[0].remove();
  }
  const counterWords = cartaTexto.value.split(' ');
  if (cartaTexto.value) {
    const counterText = counterWords.length;
    const spanElement = document.createElement('div');
    const spanTextNode = document.createTextNode(`${counterText}`);
    spanElement.appendChild(spanTextNode);
    cartaContador.appendChild(spanElement);
  }
});
