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

  // eventos do botão criar carta:
  botaoCarta.addEventListener('click', sortearEstilos);

  document.body.addEventListener('click', () => {
    estiloClique(event);
  })

  // adicionando sorteio e implementação dos estilos e das frases:
  function sortearEstilos() {
    let frase = inputCarta.value.split(' ');
    for (let k = 0; k < frase.length; k += 1) {
      const span1 = document.createElement('span');
      for (let i = 0; i < Object.keys(estilosObjeto).length; i += 1) {
        let random = estilosObjeto[i][Math.floor(Math.random() * estilosObjeto[i].length)];
        span1.classList.add(random);
      }
      span1.innerHTML = frase[k];
      paragrafo.appendChild(span1);
    }
    contador();
  }

  // adicionando alteração de estilo ao clique:
  function estiloClique(event) {
    if (event.target && event.target.nodeName == 'SPAN') {
      const target = event.target;
      target.className = '';
      for (let i = 0; i < Object.keys(estilosObjeto).length; i += 1) {
        let random = estilosObjeto[i][Math.floor(Math.random() * estilosObjeto[i].length)];
        target.classList.add(random);
      }
    }
  }

  // adicionando contador de palavras:
  function contador() {
    const contador = document.getElementById('carta-contador');
    const palavrasNumero = document.querySelectorAll('span').length;
    contador.innerHTML = palavrasNumero;
  }
}