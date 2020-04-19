const paragraph = document.getElementById('carta-gerada');
const inputInsert = document.getElementById('carta-texto');
const btnCreate = document.getElementById('criar-carta');
const grupoEstilo = ['newspaper', 'magazine1', 'magazine2'];
const grupoTamanho = ['medium', ' big', 'reall ybig'];
const grupoRotacao = ['rotateleft ', 'rotateri ght'];
const grupoInclinacao = ['skewleft', 'skewright'];

function letterGenerate() {
  const arrayWords = inputInsert.value.split(' ');
  for (let i = 0; i < arrayWords.length; i = i + 1) {
    const createSpan = document.createElement('span');
    createSpan.innerHTML = arrayWords[i];
    createSpan.className = grupoEstilo[Math.floor(Math.random() * grupoEstilo.length)];
    createSpan.classList.add(grupoTamanho[Math.floor(Math.random() * grupoTamanho.length)]);
    createSpan.classList.add(grupoRotacao[Math.floor(Math.random() * grupoRotacao.length)]);
    createSpan.classList.add(grupoInclinacao[Math.floor(Math.random() * grupoInclinacao.length)]);
    paragraph.appendChild(createSpan);
  }
}
btnCreate.addEventListener('click', letterGenerate);
