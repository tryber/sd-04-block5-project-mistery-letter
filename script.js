window.onload = function () {
// function to split the string and put it in span on button click
  const buttonelement = document.getElementById('criar-carta');
  buttonelement.addEventListener('click', function () {
// console.log('click done');
    const cartaGeradElement = document.getElementById('carta-gerada');
    const textbox = document.getElementById('carta-texto').value;
    const textArray = textbox.split(' ');
    cartaGeradElement.innerText = '';
    for (let i = 0; i < textArray.length; i += 1) {
      const span = document.createElement('span');
      span.className = 'spanClass';
      cartaGeradElement.appendChild(span).innerHTML = textArray[i];
    }
  });
};// end of window.onload
