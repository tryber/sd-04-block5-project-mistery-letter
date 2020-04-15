window.onload = function () {

  const paragrafo = document.getElementById('carta-gerada');
  const botaoCarta = document.getElementById('criar-carta');
  const inputCarta = document.getElementById('carta-texto');
  const estilos = ["newspaper", "magazine1", "magazine2"];
  const tamanhos = ["medium", "big", "reallybig"];
  const rotação = ["rotateleft", "rotateright"];
  const inclinação = ["skewleft", "skewright"];

  let frase = '';
  let limite = '';

  // eventos do botão criar carta:
  botaoCarta.addEventListener('click', () => {
    sortearEstilos();
    contador();
  })

  document.body.addEventListener('click', () => {
    frase = inputCarta.value.split(' ');
    limite = frase.length;
    estiloClique(event);
  })

  // adicionando sorteio e implementação dos estilos e das frases:
  function sortearEstilos() {
    let frase = inputCarta.value.split(' ');

    for (let i = 0; i < frase.length; i += 1) {
      const span1 = document.createElement('span');
      let estiloRandom = estilos[Math.floor(Math.random() * estilos.length)];
      span1.classList.add(estiloRandom);

      let tamanhoRandom = tamanhos[Math.floor(Math.random() * tamanhos.length)];
      span1.classList.add(tamanhoRandom);

      let rotaçãoRandom = rotação[Math.floor(Math.random() * rotação.length)];
      span1.classList.add(rotaçãoRandom);

      let inclinaçãoRandom = inclinação[Math.floor(Math.random() * inclinação.length)];
      span1.classList.add(inclinaçãoRandom);

      span1.innerHTML = frase[i];
      paragrafo.appendChild(span1);
    }
  }

  // adicionando alteração de estilo ao clique:
  function estiloClique(event) {
    if (event.target && event.target.nodeName == 'SPAN') {
      const target = event.target;
      target.className = '';
      let frase = inputCarta.value.split(' ');

      for (let i = 0; i < frase.length; i += 1) {
        const span1 = document.createElement('span');
        let estiloRandom = estilos[Math.floor(Math.random() * estilos.length)];
        span1.classList.add(estiloRandom);

        let tamanhoRandom = tamanhos[Math.floor(Math.random() * tamanhos.length)];
        span1.classList.add(tamanhoRandom);

        let rotaçãoRandom = rotação[Math.floor(Math.random() * rotação.length)];
        span1.classList.add(rotaçãoRandom);

        let inclinaçãoRandom = inclinação[Math.floor(Math.random() * inclinação.length)];
        span1.classList.add(inclinaçãoRandom);

        target.classList.add(estiloRandom, tamanhoRandom, rotaçãoRandom, inclinaçãoRandom);
      }

    }
  }

  // adicionando contador de palavras:
  function contador() {
    const contador = document.getElementById('carta-contador');
    const palavrasNumero = document.querySelectorAll('span').length
    contador.innerHTML = `Sua carta misteriosa contém ${palavrasNumero} palavras!`;
  }


}