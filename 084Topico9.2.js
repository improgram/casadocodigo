function calculadora() {
	var total = 0;
	var numero1 = document.getElementById("numero1").value;
	console.log(numero1)
	var numero2 = document.getElementById("numero2").value;
	console.log(numero2)
	total = numero1 * numero2;
	document.getElementById('resultado').innerText = total;
	console.log(total)
}


//usuario sera redirecionado para a pagina informada :
function redirecionar() {
	window.location.href = "http://www.github.com";
}
