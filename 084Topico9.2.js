
function calcular() {
	var numero1 = document.getElementById("numero1").value;
	var numero2 = document.getElementById("numero2").value;
	var total = parseInt(numero1) * parseInt(numero2);
	document.getElementById("resultado").innerHTML = total;
	console.log(typeof total + ' = ' + total);
	return total;
}

//window.onload = function() {
//console.log('Onload disparado');
//}

//calcular();
//var resultado = calcular();
//console.log(resultado)

//window.onload = function(){
//	console.log('Onload disparado');
//  }

//usuario sera redirecionado para a pagina informada :
function redirecionar() {
	window.location.href = "http://www.github.com";
}
