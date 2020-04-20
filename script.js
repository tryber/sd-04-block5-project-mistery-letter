const paragrafo = document.getElementById('carta-gerada');
const botaoCarta = document.getElementById('criar-carta');
const inputCarta = document.getElementById('carta-texto');
const estilosObjeto = {
  0: ['newspaper', 'magazine1', 'magazine2'],
  1: ['medium', 'big', 'reallybig'],
  2: ['rotateleft', 'rotateright'],
  3: ['skewleft', 'skewright']
};

// adicionando contador de palavras:
function contador() {
  const numContador = document.getElementById('carta-contador');
  const palavrasNumero = document.querySelectorAll('span').length;
  numContador.innerHTML = palavrasNumero;
}

// limpar paragrafo:
function limparParagrafo() {
  while (paragrafo.firstChild) {
    paragrafo.firstChild.remove();
  }
}

// sorteando estilos para um span:
function sortearEstilos(spanCriado) {
  for (let i = 0; i < Object.keys(estilosObjeto).length; i += 1) {
    const random = estilosObjeto[i][Math.floor(Math.random() * estilosObjeto[i].length)];
    spanCriado.classList.add(random);
  }
}
// adicionando sorteio e implementando os estilos e as frases:
function atribuirEstilos() {
  const frase = inputCarta.value.split(' ');
  limparParagrafo();
  for (let k = 0; k < frase.length; k += 1) {
    const span = document.createElement('span');
    if (frase[k] !== '') {
      sortearEstilos(span);
    }
    span.innerHTML = frase[k];
    paragrafo.appendChild(span);
  }
  contador();
}
botaoCarta.addEventListener('click', atribuirEstilos);

// adicionando alteração de estilo ao clique:
function estiloClique(event) {
  if (event.target && event.target.nodeName === 'SPAN') {
    const target = event.target;
    target.className = '';
    for (let i = 0; i < Object.keys(estilosObjeto).length; i += 1) {
      const random = estilosObjeto[i][Math.floor(Math.random() * estilosObjeto[i].length)];
      target.classList.add(random);
    }
  }
}
document.body.addEventListener('click', estiloClique);
