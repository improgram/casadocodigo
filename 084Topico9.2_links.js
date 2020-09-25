let numero1;
let numero2;
let total;

function calcular() {
numero1 = Number(document.getElementById("numero1").value);
numero2 = Number(document.getElementById("numero2").value);
	total = numero1 * numero2;
	document.getElementById("calculo").innerHTML = total;
	console.clear();
	console.log(typeof total + ' = ' + total);
	return total
}

function resultado(){
document.getElementById("result").innerText = calcular();
//Utilizando o retorno da funcao Calcular.
	console.log('Resultado : ' + calcular() )
}

function redirecionar() {
	window.location.href = "http://www.github.com";
}
