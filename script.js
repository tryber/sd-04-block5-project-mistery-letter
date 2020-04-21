const paragraph = document.getElementById('carta-gerada');
const inputInsert = document.getElementById('carta-texto');
const btnCreate = document.getElementById('criar-carta');
const grupoEstilo = ['newspaper', 'magazine1', 'magazine2'];
const grupoTamanho = ['medium', 'big', 'reallybig'];
const grupoRotacao = ['rotateleft', 'rotateright'];
const grupoInclinacao = ['skewleft', 'skewright'];
const aleatory = ['newspaper', 'magazine1', 'magazine2','medium', 'big', 'reallybig', 'rotateleft', 'rotateright', 'skewleft', 'skewright'];

function letterGenerate() {
  paragraph.innerHTML = null;
  const arrayWords = inputInsert.value.split(' ');
  for (let i = 0; i < arrayWords.length; i = i + 1) {
    const createSpan = document.createElement('span');
    createSpan.innerHTML = arrayWords[i];
    createSpan.className = grupoEstilo[Math.floor(Math.random() * grupoEstilo.length)];
    createSpan.classList.add(grupoTamanho[Math.floor(Math.random() * grupoTamanho.length)]);
    createSpan.classList.add(grupoRotacao[Math.floor(Math.random() * grupoRotacao.length)]);
    createSpan.classList.add(grupoInclinacao[Math.floor(Math.random() * grupoInclinacao.length)]);
    paragraph.appendChild(createSpan);
    createSpan.addEventListener('click', aleatoryCreate);
  }
}
btnCreate.addEventListener('click', letterGenerate);

function aleatoryCreate (createSpan) {
  document.createSpan.className =  aleatory[Math.floor(Math.random() * aleatory.length)];
}

  // function () {
  //   for (let i = 0; i < spanTag.length; i++){
  //     spanTag[i].className = spanTag[i][Math.floor(Math.random() * spanTag.length)];
  //   }
  // });
