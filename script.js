// Variables
const input = document.getElementById('carta-texto');
const button = document.getElementById('criar-carta');
const p = document.getElementById('carta-gerada');
const classStyle = ['newspaper', 'magazine1', 'magazine2'];
const classSize = ['medium', 'big', 'reallybig'];
const classSlope = ['skewleft', 'skewright'];

// Creating spans from the typed phrase
function createSpan() {
  const words = input.value.split(' ');
  for (let i = 0; i < words.length; i += 1) {
    // Generating class names randomly
    const style = classStyle[Math.floor(Math.random() * classStyle.length)];
    const size = classSize[Math.floor(Math.random() * classSize.length)];
    const slope = classSlope[Math.floor(Math.random() * classSlope.length)];
    // Creating the span
    const span = document.createElement('span');
    span.className = style;
    span.classList.add(size);
    span.classList.add(slope);
    span.innerText = words[i];
    p.appendChild(span);
  }
}
// Button click event
button.addEventListener('click', function () {
  p.innerHTML = '';// Clear previous generated phrase
  createSpan();
});
