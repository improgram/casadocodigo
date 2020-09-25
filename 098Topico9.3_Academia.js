var clientes = [];
var cadastrar = function(nome, idade, peso, altura) {
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

var mostrar = function (nome, idade, peso, altura) {
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
    var calcularIMC = kilo / (tamanho * tamanho);
    document.getElementById('imc').innerText = calcularIMC;
    console.log(calcularIMC)
    //console.log(Math.round(calcularIMC) + " - " + typeof(calcularIMC))
    return Math.round(calcularIMC)
}

console.log(clientes)

//var kilo = Number(peso);
//console.log('Peso digitado : ' + kilo)