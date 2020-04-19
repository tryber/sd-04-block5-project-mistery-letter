// Variables
const input = document.getElementById('carta-texto');
const button = document.getElementById('criar-carta');
const p = document.getElementById('carta-gerada');

// Button click event
button.addEventListener('click', function() {
  p.innerHTML = '';// Clear previous generated phrase
  createSpan();
});
// Creating spans from the typed phrase
function createSpan() {
  let words = input.value.split(' ');
  for (let i = 0; i < words.length; i += 1) {
    const span = document.createElement('span');
    span.className = 'word';
    span.innerText = words[i];
    p.appendChild(span);
  }
}
