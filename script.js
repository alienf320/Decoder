let textoAModificar = document.getElementById('input-texto');
let output = document.getElementById('msg');



function encriptar() {
	
	let palabraCodificada = textoAModificar.value;
	if(esValida(palabraCodificada)) {
		palabraCodificada = palabraCodificada.replaceAll('e', 'enter')
			.replaceAll('i', 'imes')
			.replaceAll('a', 'ai')
			.replaceAll('o', 'ober')
			.replaceAll('u', 'ufat');
		output.value = palabraCodificada;	
	} else {
		window.alert('El mensaje ingresado tiene caracteres incorrectos');
	}
}

function desencriptar() {
	
	let palabraCodificada = textoAModificar.value;
	if(esValida(palabraCodificada)) {
		palabraCodificada = palabraCodificada.replaceAll('enter', 'e')
			.replaceAll('imes', 'i')
			.replaceAll('ai', 'a')
			.replaceAll('ober', 'o')
			.replaceAll('ufat', 'u');
		output.value = palabraCodificada;	
	} else {
		window.alert('El mensaje ingresado tiene caracteres incorrectos');
	}
}

function esValida(str) {
	regex = new RegExp(/[A-UÁ-Úá-ú0-9]/);
	return !regex.test(str)
}

function copiar() {
	navigator.clipboard.writeText(output.value);
}