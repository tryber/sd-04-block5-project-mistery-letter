window.onload = function () {
let grupoestilo = ['newspaper', 'magazine1', 'magazine2'];
let grupotamanho = ['reallybig', 'big', 'medium'];
let gruporotação = ['rotateright', 'rotateleft'];
let grupoinclinação = ['skewright', 'skewleft'];
function aleatoire(qda) {
  return Math.floor(Math.random() * qda);
}
let testaleatoire  = aleatoire(10);
console.log('testaleatoire',testaleatoire);
// function to split the string and put it in span on button click
  const buttonelement = document.getElementById('criar-carta');
  buttonelement.addEventListener('click', function () {
// console.log('click done');
    const cartaGeradElement = document.getElementById('carta-gerada');
    const textbox = document.getElementById('carta-texto').value;
    const textArray = textbox.split(' ');
    while (cartaGeradElement.firstChild) {
      cartaGeradElement.firstChild.remove();
    }
    const span = document.createElement('span');
    let grupoestilo = ['newspaper', 'magazine1', 'magazine2'];
   // console.log('classnameAleatoire: ',classnameAleatoire);
    for (let i = 0; i < textArray.length; i += 1) {
      const span = document.createElement('span');
      let classnameAleatoire = grupotamanho[aleatoire(3)] + " " + grupoestilo[aleatoire(3)] + " " + gruporotação[aleatoire(2)] + " " + grupoinclinação[aleatoire(2)];
      span.style.margin = '10px'; // Ver se e melhor colocar no css?
      span.className = classnameAleatoire;
      cartaGeradElement.appendChild(span).innerHTML = textArray[i];
    }
    const cartaContadorElemment = document.getElementById('carta-contador');
    // cartaContadorElemment.innerText = `contador de palavras: ${textArray.length}`;
    cartaContadorElemment.innerText = textArray.length;
  });
};// end of window.onload
