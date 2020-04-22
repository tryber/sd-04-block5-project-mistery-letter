const generateBtn = document.querySelector('#criar-carta');
const inputText = document.querySelector('#carta-texto');
const paragraph = document.querySelector('#carta-gerada');

const style = {
  0: "newspaper", 1: "magazine1", 2: "magazine2"
};
const size = {
  0: "medium", 1: "big", 2: "reallybig"
};
const rotation = {
  0: "rotateleft", 1: "rotateright"
};
const inclination = {
  0: "skewleft", 1: "skewright"
};

getRandomStyle = (element) => {
  const index = Math.floor(Math.random()* 3)
  element.classList.add(style[index]);
}

getRandomSize = (element) => {
  const index = Math.floor(Math.random()* 3)
  element.classList.add(size[index]);
}

getRandomRotation = (element) => {
  const index = Math.floor(Math.random()* 2)
  element.classList.add(rotation[index]);
}

getRandomInclination = (element) => {
  const index = Math.floor(Math.random()* 2)
  element.classList.add(inclination[index]);
}

generateBtn.addEventListener('click', () => {
  paragraph.innerHTML = '';
  const newText = inputText.value.split(' ');
  for (let index = 0; index < newText.length; index += 1){
    const createSpan = document.createElement('span');
    createSpan.innerHTML = newText[index];
    getRandomStyle(createSpan);
    getRandomSize(createSpan);
    getRandomRotation(createSpan);
    getRandomInclination(createSpan);
    paragraph.appendChild(createSpan);
  }
});
