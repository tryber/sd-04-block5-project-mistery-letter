window.onload = function () {

  const paragrafo = document.getElementById('carta-gerada');
  const botaoCarta = document.getElementById('criar-carta');
  const inputCarta = document.getElementById('carta-texto');
  const estilosObjeto = {
    0: ["newspaper", "magazine1", "magazine2"],
    1: ["medium", "big", "reallybig"],
    2: ["rotateleft", "rotateright"],
    3: ["skewleft", "skewright"]
  }

  let frase = inputCarta.value.split(' ');
  let limite = frase.length;

  // eventos do botão criar carta:
  botaoCarta.addEventListener('click', () => {
    if (inputCarta.value != null) {
      frase = inputCarta.value.split(' ');
      limite = frase.length;
      sortearEstilos(limite);
      contador();
    }
  })

  // adicionando sorteio e implementação dos estilos e das frases:
  function sortearEstilos(a) {
    for (let i = 0; i < a; i += 1) {
      const span1 = document.createElement('span');
      let random = estilosObjeto[i][Math.floor(Math.random() * estilosObjeto[i].length)]
      span1.classList.add(random);
      span1.innerHTML = frase[i];
      paragrafo.appendChild(span1);
    }
  }

  // adicionando alteração de estilo ao clique:
  document.body.addEventListener('click', function (e) {
    if (e.target && e.target.nodeName == 'SPAN') {
      const target = e.target;
      target.className = '';
      for (let i = 0; i < limite; i += 1) {
        let random = estilosObjeto[i][Math.floor(Math.random() * estilosObjeto[i].length)]
        target.classList.add(random);
      }
    }
  })

  // adicionando contador de palavras:
  function contador() {
    const contador = document.getElementById('carta-contador');
    contador.innerHTML = `Sua carta misteriosa contém ${limite} palavras!`;
  }


}