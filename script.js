window.onload = function () {
 // let objectClasses = {Grupo estilo :[];}
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
    for (let i = 0; i < textArray.length; i += 1) {
      const span = document.createElement('span');
      span.style.margin = '10px';
      //span.className = 'spanClass';
      cartaGeradElement.appendChild(span).innerHTML = textArray[i];
    }
    const cartaContadorElemment = document.getElementById('carta-contador');
    cartaContadorElemment.innerText = `contador de palavras: ${textArray.length}`;
  });
};// end of window.onload
