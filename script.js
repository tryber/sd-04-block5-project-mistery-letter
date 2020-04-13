const criarCarta = document.getElementById("criar-carta");
const cartaTexto = document.getElementById("carta-texto");
const cartaGerada = document.getElementById("carta-gerada");

criarCarta.addEventListener("click", () => {
  const estilo = [`newspaper`, `magazine1`, `magazine2`];
  const tamanho = [`medium`, `big`, `reallybig`];
  const rotacao = [`rotateleft`, `rotateright`];
  const inclinacao = [`skewleft`, `skewright`];

  if (cartaTexto.value) {
    const splitedText = cartaTexto.value.split(" ");
    for (const index in splitedText) {
      const spanElement = document.createElement("span");
      const spanTextNode = document.createTextNode(`${splitedText[index]}`);

      spanElement.appendChild(spanTextNode);
      spanElement.setAttribute("id", `carta-gerada`);
      cartaGerada.appendChild(spanElement);
    }
  }
});
