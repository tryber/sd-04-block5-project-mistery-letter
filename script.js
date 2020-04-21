var inputText = document.getElementById("carta-texto");
var buttonCreate = document.querySelector("#criar-carta");
var showPhrase = document.querySelector("#carta-gerada");

var newspaper = document.createElement("div");
newspaper.classList.add("newspaper");

var magazine1 = document.createElement("div");
magazine1.classList.add("magazine1");


buttonCreate.addEventListener('click', mostraFrase);

function mostraFrase(){
    const words = inputText.value.split(" ");
    console.log(inputText.value);
    showPhrase.innerHTML = inputText.value;
}
