let inputFrase = document.querySelector('#carta-texto');
let fraseResult = document.querySelector('#carta-gerada');
let btnCriar = document.querySelector('#criar-carta');

btnCriar.addEventListener('click', function() {
    console.log(inputFrase.value);
    mostraFrase(inputFrase.value);
});

function mostraFrase(frase) {
   let palavra = document.createElement('span');
   palavra.innerHTML = frase
   fraseResult.appendChild(palavra);
}