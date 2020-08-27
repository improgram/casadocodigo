var clientes = []

var cadastrar = function(nome, idade, peso, altura) {
    var id = (clientes.length + 1);
    clientes.push({
        'id' : id.value,
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
    console.log('Peso : ' + peso)
    document.getElementById('alturaDigitado').innerText = altura;
    console.log('Altura : ' + altura)
    }

var peso = '';
console.log('Peso Digitado : ' + peso)
var altura = '';

var calculoimc = function (peso, altura) {
    var imc = peso / (altura * altura);
    return imc;
}

//console.log('Nome: ' + clientes + 'digitado.')
//console.log(calculoimc)
