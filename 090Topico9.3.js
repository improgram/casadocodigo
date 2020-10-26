function calcularIMC() {
    var altura = document.getElementById("altura").value;
    var peso   = document.getElementById("peso").value;
    altura /= 100;
    imc = (peso / (altura * altura)).toFixed(2);
    document.getElementById("resultadoIMC").innerHTML = imc ;
    return Number(imc);
}  

function resultado() {
    if (imc > 30) {
        console.log('Considerado Obeso: ' + imc);
        let obeso = document.createElement("h3");
        document.body.appendChild(obeso).innerHTML = "<font color='red'>IMC Obeso!</font>";
        document.getElementById("imcVermelho").innerHTML = calcularIMC();
    } else if (imc > 25 && imc < 30 ){
        console.log('Está acima do Peso: ' + imc);
        let acima = document.createElement("h3");
        document.body.appendChild(acima).innerHTML = "<font color='orange'>IMC acima do peso</font>";
        document.getElementById("imcLaranja").innerHTML = calcularIMC();
    } else if (imc > 18.50) {
        console.log("Peso Normal: " + imc);
        let normal = document.createElement("h3");
        document.body.appendChild(normal).innerHTML = "<font color='green'>Peso Normal</font>";
        document.getElementById("imcVerde").innerHTML = calcularIMC();        
    } else if (imc > 17) {
        console.log("Abaixo do Peso: " + imc);
        let abaixo = document.createElement("h3");
        document.body.appendChild(abaixo).innerHTML = "<font color='#99FF00'>Abaixo do Peso</font>";
    document.getElementById("imcAmarelo").innerHTML = calcularIMC(); 
    } else {
        console.log("IMC Muito abaixo de 17: " + imc);
        let muitoAbaixo = document.createElement("h3");
        document.body.appendChild(muitoAbaixo).innerHTML = "<font color='yellow'>Muito Abaixo</font>";
    document.getElementById('imcVermelho').innerHTML = calcularIMC(); 
    }
}

var tela = document.getElementById("telaCanvas");
var c = tela.getContext("2d");
c.fillStyle = "red";
c.fillRect(0, 0, 160, 50) //Y:0, X:0
c.fillStyle = "orange";
c.fillRect(160, 0, 160, 50) //Y:160, X:0, 160:comprimento e 50:Altura
c.fillStyle = "green";
c.fillRect(320, 0, 160, 50) //160+160=320(inicio)
c.fillStyle = "yellow";
c.fillRect(480, 0, 160, 50)
c.fillStyle = "red";
c.fillRect(640, 0 , 160, 50);