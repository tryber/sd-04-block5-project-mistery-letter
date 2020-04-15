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

  let frase = null;
  let limite = null;

  // eventos do botão criar carta:
  botaoCarta.addEventListener('click', () => {
    frase = inputCarta.value.split(' ');
    limite = frase.length;
    sortearEstilos(limite);
    contador();
  })

  document.body.addEventListener('click', () => {
    frase = inputCarta.value.split(' ');
    limite = frase.length;
    estiloClique(event);
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
  function estiloClique(event) {
    if (event.target && event.target.nodeName == 'SPAN') {
      const target = event.target;
      target.className = '';
      for (let i = 0; i < limite; i += 1) {
        let random = estilosObjeto[i][Math.floor(Math.random() * estilosObjeto[i].length)]
        target.classList.add(random);
      }
    }
  }

  // adicionando contador de palavras:
  function contador() {
    const contador = document.getElementById('carta-contador');
    contador.innerHTML = `Sua carta misteriosa contém ${limite} palavras!`;
  }


}