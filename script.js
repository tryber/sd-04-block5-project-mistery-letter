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

function checkClasses(el, cls) {
  if (!el.classList.contains(cls)) {
    el.classList.add(cls);
    return false;
  }

  return true;
}

function selectGroups() {
  const infoGroup = {};
  // os nomes dos grupos de classes existentes
  infoGroup.grpNames = Object.keys(classGroup);
  // a quantidade de grupos de classes existentes
  infoGroup.amountGroupCls = Object.keys(classGroup).length;
  // a quantidade de grupos q devem ser inseridos em span
  infoGroup.rdmAmtGroup = Math.floor(Math.random() * infoGroup.amountGroupCls) + 1;

  if (infoGroup.rdmAmtGroup === 1) {
    // garante q tenha pelo menos 2 grupos inseridos em span
    infoGroup.rdmAmtGroup += 1;
  }

  return infoGroup;
}

function selectClasses(objGroup) {
  const infoClasses = {};
  // o indice do grupo selecionado nesta iteração
  infoClasses.rdmGroup = Math.floor(Math.random() * objGroup.amountGroupCls);
  // o grupo selecionado nesta iteração
  infoClasses.nameClsGroup = objGroup.grpNames[infoClasses.rdmGroup];
  // o indice da classe do grupo selecionado nesta iteração
  infoClasses.rdmCls = Math.floor(Math.random() * classGroup[infoClasses.nameClsGroup].length);

  return infoClasses;
}

function addClass(parent, objGroup, fcObjClasses) {
  for (i = 0; i < objGroup.rdmAmtGroup; i += 1) {
    for (j = 0; j < parent.children.length; j += 1) {
      const objClass = fcObjClasses(selectGroups());

      if (checkClasses(parent.children[j], classGroup[objClass.nameClsGroup][objClass.rdmCls])) {
        j -= 1;
      }
    }
  }

  console.log(pCarGer)
}

function includeSpan(words) {
  for (i = 0; i < words.length; i += 1) {
    const span = document.createElement('span');
    span.innerText = words[i];
    pCarGer.appendChild(span);
  }

  addClass(pCarGer, selectGroups(), selectClasses);
}

function displayLetters() {
  pCarGer.innerText = '';

  includeSpan(separateWords());
}

butCriCar.addEventListener('click', displayLetters);
