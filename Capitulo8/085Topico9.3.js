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
        console.log('Considerado Obeso:' + imc);
    document.getElementById("red").innerHTML = calcularIMC() + ' Considerado Obeso.';
        //https://javascript.info/modifying-document
    } else if (imc > 25 && imc < 30 ){
        console.log('Acima do Peso: ' + imc);
    document.getElementById("orange").innerHTML = calcularIMC() + ' Acima do Peso.';
    } else if (imc > 18.50) {
        console.log("Peso Normal: " + imc);
    document.getElementById("green").innerHTML = calcularIMC() + ' Peso Normal.';
    } else if (imc > 17) {
        console.log("Abaixo do Peso." + imc);
    document.getElementById("yellow").innerHTML = calcularIMC() + ' Abaixo do Peso.'; 
    } else {
        console.log("IMC Muito abaixo de 17: " + imc);
    document.getElementById("red").innerHTML = calcularIMC() + ' Muito abaixo do Peso.'; 
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

let pessoa = new Object(); 
    pessoa.nome;
    pessoa.idade;
    pessoa.altura;
    pessoa.peso;
    pessoa.info = function() {
        return "Nome: " + this.nome + " Idade: " + this.idade + " Altura: " + this.altura + " Peso: " + this.peso;
    };

function clientes () {
    pessoa.nome = document.getElementById("nome").value;
    document.getElementById('nomeDigitado').innerText = pessoa.nome;
    
    pessoa.idade = document.getElementById("idade").value;
    document.getElementById('idadeDigitado').innerText = pessoa.idade;
    //console.log('Idade: ' + pessoa["idade"] ); //outra forma de acesso a propriedade
    
    pessoa.altura = document.getElementById('altura').value;
    document.getElementById('alturaDigitado').innerText = pessoa.altura;

    pessoa.peso = document.getElementById('peso').value;
    document.getElementById('pesoDigitado').innerText = pessoa.peso;

    console.log(pessoa.info());
}
