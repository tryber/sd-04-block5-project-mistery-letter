// Lendo as variáveis
const criar = document.getElementById('criar-carta');
let texto;
const carta = document.getElementById('carta-gerada');
const grupoEstilo = ['newspaper', 'magazine1', 'magazine2', ''];
const grupoTamanho = ['medium', 'big', 'reallybig', ''];
const grupoRotacao = ['rotateleft', 'rotateright', '', ''];
const grupoInclinacao = ['skewleft', 'skewright', '', ''];
const grupos = [grupoEstilo, grupoTamanho, grupoRotacao, grupoInclinacao];

// Funçoes
function random() {
  let classOne = grupos[Math.floor(Math.random() * 4)][Math.floor(Math.random() * 3)];
  let classTwo = grupos[Math.floor(Math.random() * 4)][Math.floor(Math.random() * 3)];
  
  while (classOne == classTwo){
    classTwo = grupos[Math.floor(Math.random() * 4)][Math.floor(Math.random() * 3)];
  }
  return classOne + ' ' + classTwo;
}

function letter(frase) {
  let words = frase.split(" ");
  for (let i = 0; i < words.length; i += 1){
    let elemen = document.createElement('span');
    //elemen.className = `'${grupos[random(3)][random(2)]} ${grupos[random(3)][random(2)]} ${grupos[random(3)][random(2)]}'`;
    elemen.className = random();
    elemen.innerText = words[i] + ' '; 
    carta.appendChild(elemen);
  }
}

// Event Listener
criar.addEventListener('click', function () {
  texto = '';
  texto = document.getElementById('carta-texto').value;
  letter(texto);
})
