const criarCarta = document.getElementById("criar-carta");
const cartaTexto = document.getElementById("carta-texto");
const cartaGerada = document.getElementById("carta-gerada");
const estilo = new Array('newspaper', 'magazine1', 'magazine2');
const tamanho = new Array('medium', 'big', 'reallybig');
const rotacao = new Array('rotateleft', 'rotateright');
const inclinacao = new Array('skewleft', 'skewright');
const spanList = document.getElementsByTagName('span');




criarCarta.addEventListener("click", () => {
  while (spanList.length > 0) {
    spanList[0].remove();
  }

  if (cartaTexto.value) {
    const splitedText = cartaTexto.value.split(" ");
    for (const index in splitedText) {
      const estiloR = estilo[Math.floor(Math.random() * estilo.length)];
      const tamanhoR = tamanho[Math.floor(Math.random() * tamanho.length)];
      const rotacaoR = rotacao[Math.floor(Math.random() * rotacao.length)];
      const inclinacaoR = inclinacao[Math.floor(Math.random() * inclinacao.length)];
      const spanElement = document.createElement("span");
      const spanTextNode = document.createTextNode(`${splitedText[index]}`);

      spanElement.appendChild(spanTextNode);
      spanElement.setAttribute("id", `carta-gerada`);
      spanElement.setAttribute("class", `${estiloR} ${tamanhoR} ${rotacaoR} ${inclinacaoR}`);
      cartaGerada.appendChild(spanElement);
    }
  }
});
