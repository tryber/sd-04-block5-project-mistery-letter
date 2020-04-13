const criarCarta = document.getElementById('criar-carta');
const cartaTexto = document.getElementById('carta-texto');
const cartaGerada = document.getElementById('carta-gerada');

criarCarta.addEventListener('click', () => {
    if (cartaTexto.value) {
        const spanElement = document.createElement('span');
        const spanTextNode = document.createTextNode(cartaTexto.value);
        spanElement.appendChild(spanTextNode);
        spanElement.setAttribute('id', 'span-nodes');
        cartaGerada.appendChild(spanElement);
    }
})