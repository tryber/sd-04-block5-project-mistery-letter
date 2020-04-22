let i;
let j;
const inpCarTex = document.getElementById('carta-texto');
const butCriCar = document.getElementById('criar-carta');
const pCarGer = document.getElementById('carta-gerada');
const pCarCon = document.getElementById('carta-contador');
const classGroup = {
  styleGroup: ['newspaper', 'magazine1', 'magazine2'],
  sizeGroup: ['medium', 'big', 'reallybig'],
  rotationGroup: ['rotateleft', 'rotateright'],
  inclinationGroup: ['skewleft', 'skewright'],
};
const arrClassGroup = [
  'newspaper', 'magazine1', 'magazine2',
  'medium', 'big', 'reallybig',
  'rotateleft', 'rotateright',
  'skewleft', 'skewright',
];

function separateWords() {
  const words = inpCarTex.value.split(' ');

  pCarCon.innerText = words.length;

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

function addClassInt(parent, objGroup, fcObjClasses) {
  for (j = 0; j < parent.children.length; j += 1) {
    const objClass = fcObjClasses(objGroup);

    if (checkClasses(parent.children[j], classGroup[objClass.nameClsGroup][objClass.rdmCls])) {
      j -= 1;
    }
  }
}

function addClass(objGroup) {
  for (i = 0; i < objGroup.rdmAmtGroup; i += 1) {
    addClassInt(pCarGer, selectGroups(), selectClasses);
  }
}

function includeSpan(words) {
  for (i = 0; i < words.length; i += 1) {
    const span = document.createElement('span');
    span.innerText = words[i];
    pCarGer.appendChild(span);
  }

  addClass(selectGroups());
}

function newStyle(e) {
  const rdmNumber = Math.floor(Math.random() * arrClassGroup.length);

  e.target.className = '';
  e.target.className = arrClassGroup[rdmNumber];
}

function displayLetters() {
  pCarGer.innerText = '';

  includeSpan(separateWords());

  for (i = 0; i < pCarGer.children.length; i += 1) {
    pCarGer.children[i].addEventListener('click', newStyle);
  }
}

butCriCar.addEventListener('click', displayLetters);
