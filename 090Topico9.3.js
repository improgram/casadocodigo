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
        let obeso = document.createElement("h2");
        obeso.innerText = "IMC Obeso!";
        document.body.appendChild(obeso);        
        document.getElementById("imcVermelho").innerText = calcularIMC();
    } else if(imc > 25 && imc < 30 ){
        console.log('Está acima do Peso: ' + imc);
        let acima = document.createElement("h2");
        acima.innerText = "IMC acima do peso";
        document.body.appendChild(acima);
        document.getElementById("imcLaranja").innerText = calcularIMC();
    } else if (imc > 18.50) {
        console.log("Peso Normal: " + imc);
        let normal = document.createElement("h2");
        normal.innerText = "Peso Normal";
        document.body.appendChild(normal);
        document.getElementById("imcVerde").innerText = calcularIMC();        
    } else {
        console.log("Abaixo do Peso: " + imc);
        let abaixo = document.createElement("h2");
        abaixo.innerText = "Abaixo do Peso";
        document.body.appendChild(abaixo)
    document.getElementById("imcAmarelo").innerText = calcularIMC();    
    }
}
