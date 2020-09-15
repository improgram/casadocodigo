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
    console.log('Idade : ' + idade)
    document.getElementById('pesoDigitado').innerText = peso;
    var kilo = Number(peso);
    console.log('Peso digitado : ' + kilo)
    document.getElementById('alturaDigitado').innerText = altura;
    var tamanho = Number(altura);
    console.log('Altura digitado : ' + tamanho)
    var calcularIMC = peso / (altura * altura);
    imc = Math.round(calcularIMC);
    console.log(imc)
    document.getElementById('imc').innerText = calcularIMC;
}

console.log(clientes)
