var inputText = document.getElementById("carta-texto");
var buttonCreate = document.querySelector("#button-create");
var showPhrase = document.querySelector("#carta-gerada");


buttonCreate.addEventListener('click', mostraFrase);

function mostraFrase(){
    console.log(inputText.value);
    const words = inputText.value.split(" ");
    console.log(words);
    showPhrase.innerHTML = inputText.value;
    
}
