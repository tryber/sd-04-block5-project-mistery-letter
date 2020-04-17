window.onload = function () {
let buttonelement = document.getElementById('criar-carta');
buttonelement.addEventListener('click', function (){
//console.log('click done');
const cartaGeradElement = document.getElementById('carta-gerada');
let textbox = document.getElementById('carta-texto').value;
let textArray = textbox.split(" ");
cartaGeradElement.innerText = '';
	for (let i = 0; i < textArray.length; i += 1){
		const span = document.createElement('span');
		span.className = 'spanClass';
		//console.log('textbox',textbox,'textArray :',textArray,"textArray.length :",textArray.length); //temp!
		console.log('Hello inside de loop','i',i,'textArray[i]',textArray[i] );
		//cartaGeradElement.appendChild(span);
		cartaGeradElement.appendChild(span).innerHTML = textArray[i];
	}
})

} // end of window.onload 