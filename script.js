let i;
let j;
const inpCarTex = document.getElementById('carta-texto');
const butCriCar = document.getElementById('criar-carta');
const pCarGer = document.getElementById('carta-gerada');
const classGroup = {
  styleGroup: ['newspaper', 'magazine1', 'magazine2'],
  sizeGroup: ['medium', 'big', 'reallybig'],
  rotationGroup: ['rotateleft', 'rotateright'],
  inclinationGroup: ['skewleft', 'skewright'],
};

function separateWords() {
  const words = inpCarTex.value.split(' ');

  return words;
}

function includeSpan(words) {
  for (i = 0; i < words.length; i += 1) {
    const span = document.createElement('span');
    span.innerText = words[i];
    pCarGer.appendChild(span);
    console.log(pCarGer)
  }

  addClass(pCarGer);
}

function checkClasses(el, cls) {
  if (el.classList.contains(cls)) {
    return true;
  } else {
    el.classList.add(cls);
  }
}

function addClass(parent) {
  const grpNames = Object.keys(classGroup); // os nomes dos grupos de classes existentes
  const amountGroupCls = Object.keys(classGroup).length; // a quantidade de grupos de classes existentes
  let rdmAmtGroup = Math.floor(Math.random() * amountGroupCls) + 1; // a quantidade de grupos q devem ser inseridos em span 

  if (rdmAmtGroup === 1) { 
    rdmAmtGroup += 1; // garante q tenha pelo menos 2 grupos inseridos em span
  }

  for (i = 0; i < rdmAmtGroup; i += 1) {
    for (j = 0; j < parent.children.length; j += 1) {
      const rdmGroup = Math.floor(Math.random() * amountGroupCls); // o indice do grupo selecionado nesta iteração
      const nameClsGroup = grpNames[rdmGroup]; // o grupo selecionado nesta iteração
      const rdmCls = Math.floor(Math.random() * classGroup[nameClsGroup].length); // o indice da classe do grupo selecionado nesta iteração

      if (checkClasses(parent.children[j], classGroup[nameClsGroup][rdmCls])) {
        break;
      }
    }
  }
}

function displayLetters() {
  pCarGer.innerText = '';

  includeSpan(separateWords());
}

butCriCar.addEventListener('click', displayLetters);
