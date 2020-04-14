window.onload = function () {

  const paragrafo = document.getElementById('carta-gerada')
  const botaoCarta = document.getElementById('criar-carta');
  const inputCarta = document.getElementById('carta-texto');
  const estilos = ["newspaper", "magazine1", "magazine2"];
  const tamanhos = ["medium", "big", "reallybig"];
  const rotação = ["rotateleft", "rotateright"];
  const inclinação = ["skewleft", "skewright"];

  botaoCarta.addEventListener('click', separarLetras)
  function separarLetras() {
    let frase = inputCarta.value.split(' ');

    for (let i = 0; i < frase.length; i += 1) {
      const span1 = document.createElement('span');
      let estiloRandom = estilos[Math.floor(Math.random()*estilos.length)];
      span1.classList.add(estiloRandom);

      let tamanhoRandom = tamanhos[Math.floor(Math.random()*tamanhos.length)];
      span1.classList.add(tamanhoRandom);

      let rotaçãoRandom = rotação[Math.floor(Math.random()*rotação.length)];
      span1.classList.add(rotaçãoRandom);

      let inclinaçãoRandom = inclinação[Math.floor(Math.random()*inclinação.length)];
      span1.classList.add(inclinaçãoRandom);

      span1.innerHTML = frase[i];
      paragrafo.appendChild(span1);

    }
  
    
    
  }

}