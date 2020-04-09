const criarCarta = document.getElementById('criar-carta');
const cartaTexto = document.getElementById('carta-texto');
let cartaGerada = document.getElementById('carta-gerada');
console.log(cartaTexto);
console.log(criarCarta);

criarCarta.addEventListener('click', () => {
    cartaGerada.innerHTML = null;
    const words = cartaTexto.value.split(' ');
    for (let i = 0; i < words.length; i += 1) {
        let word = document.createElement('span')
        word.innerHTML = ` ${words[i]} `;
        cartaGerada.appendChild(word);
    }
});