var inputText = document.getElementById("carta-texto");
var buttonCreate = document.querySelector("#criar-carta");
var showPhrase = document.querySelector("#carta-gerada");


buttonCreate.addEventListener('click', mostraFrase);

function mostraFrase(){
    const words = inputText.value.split(" ");
    console.log(inputText.value);
    showPhrase.innerHTML = inputText.value;
}
