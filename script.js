let paragrafo = document.getElementById('carta-gerada');
let btnCarta = document.getElementById('criar-carta');
let textoCarta = document.getElementById('carta-texto');

//Obtêm todos os estilos css
let estilo = ['newspaper', 'magazine1', 'magazine2', 'medium', 'big', 'reallybig', 'rotateleft', 'rotateright', 'skewleft', 'skewright'];

btnCarta.addEventListener('click', function(){    
    let texto =textoCarta.value; 
    let textoSeparado = texto.split(" ");
       
    for(let i =0; i < textoSeparado.length; i++){
        let span = document.createElement('span');
        span.classList.add(adicionaEstilo(estilo));
        let textoSpan = document.createTextNode(textoSeparado[i]);
        span.appendChild(textoSpan);
        paragrafo.appendChild(span);         
    }
});

function adicionaEstilo(arr){  
  let aleatoiro = Math.floor(Math.random() * arr.length);
  return arr[aleatoiro];
}
