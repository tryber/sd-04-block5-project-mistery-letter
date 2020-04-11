const criarCarta = document.getElementById('criar-carta');
const cartaTexo = document.getElementById('carta-texto');
const cartaGerada = document.getElementById('carta-gerada');

criarCarta.addEventListener('click', function() {
cartaGerada.innerHTML = cartaTexo.value;
});

