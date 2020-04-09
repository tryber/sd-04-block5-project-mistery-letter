let textoCarta = document.getElementById('carta-texto')
let criarCarta = document.getElementById('criar-carta')
let carta = document.getElementById('carta-gerada')
let allStyles = [['newspaper', 'magazine1', 'magazine2'], ['medium', 'big', 'reallybig'],['rotateleft', 'rotateright'],['skewleft', 'skewright'] ];



function createSpam(){
  let words = textoCarta.value.split(" ")
  for (let i = 0; i < words.length; i += 1){
    let spam = document.createElement('span');
    spam.innerText = words[i];
    changeStyle(spam);
    carta.appendChild(spam)
  }
  console.log(words)
}
//Fisher–Yates shuffle

function shuffle(stylesClasses) {
  let m = stylesClasses.length
  let lastOfRemainingClasses
  let selectedRemainingClass
  while (m) {
    selectedRemainingClass = Math.floor(Math.random() * m--);
    lastOfRemainingClasses = stylesClasses[m];
    stylesClasses[m] = stylesClasses[selectedRemainingClass];
    stylesClasses[selectedRemainingClass] = lastOfRemainingClasses;
}

  return stylesClasses;
}

function changeStyle(element){
  element.className = ""
  let randomStyles = shuffle(allStyles);
  let numberStyles = Math.floor(Math.random() * (randomStyles.length - 1)) + 2;
  for (let i = 0; i < numberStyles; i += 1) {
    let selectedStyle = Math.floor(Math.random() * randomStyles[i].length);
    element.classList.add(randomStyles[i][selectedStyle])
  }
}

carta.addEventListener('click', (e) => {
  changeStyle(e.target)
})
criarCarta.addEventListener('click', () => {
  let testando = document.getElementById("teste")

  changeStyle(testando);
  createSpam();
});