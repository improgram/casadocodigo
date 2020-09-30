var clientes = [];
function cadastrar (nome, idade, peso, altura) {
    clientes.push({
        'nome' : nome.value,
        'idade' : idade.value,
        'peso' : peso.value,
        'altura' : altura.value
    });
mostrar(nome.value, idade.value, peso.value, altura.value);
        nome.value = '';
        idade.value = '';
        peso.value = '';
        altura.value = '';
}
var calcularIMC;
function mostrar (nome, idade, peso, altura) {
document.getElementById('nomeDigitado').innerText = nome;
    console.log('Nome : ' + nome)    
document.getElementById('idadeDigitado').innerText = idade;
    console.log('Idade : ' + idade, typeof(idade))
document.getElementById('pesoDigitado').innerText = peso;
    var kilo = parseFloat(peso);
    console.log('Peso : ' + kilo, typeof(kilo))
document.getElementById('alturaDigitado').innerText = altura;
    var tamanho = parseFloat(altura);
    console.log('Altura : ' + tamanho, typeof(tamanho))
    calcularIMC = kilo / (tamanho * tamanho);
document.getElementById('imc').innerText = calcularIMC;
    console.log(calcularIMC)
console.log(Math.round(calcularIMC) + " - " + typeof(calcularIMC))
    return calcularIMC;
}

function retorno(){
    document.getElementById("resultado").innerText = mostrar()
    console.clear()
    console.log('Variavel calcularIMC : ' + mostrar() )
}

    
//calcularIMC = mostrar();
//console.log('Clientes : ' + clientes)
//console.log('IMC : ' + calcularIMC)