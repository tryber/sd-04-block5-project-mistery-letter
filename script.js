let inputFrase = document.querySelector('#carta-texto');
let fraseResult = document.querySelector('#carta-gerada');
let btnCriar = document.querySelector('#criar-carta');

btnCriar.addEventListener('click', function() {
    mostraFrase(inputFrase.value);
});

function mostraFrase(frase) {
    let splits = frase.split(' ');
    for (let i = 0; i < splits.length; i += 1){
      let palavra = document.createElement('span');
      palavra.innerHTML = splits[i];
  
      fraseResult.appendChild(palavra);
  
      console.log(palavra);
    }
  }