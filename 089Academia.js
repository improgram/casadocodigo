var clientes = [];
    
function cadastrar (nome, idade, peso, altura) {
    clientes.push({
        'nome' : nome.value,
        'idade' : idade.value,
        'peso' : peso.value,
        'altura' : altura.value,
    });
    console.log(clientes);

    mostrar(nome.value, idade.value, peso.value, altura.value);
        nome.value = '';
        idade.value = '';
        peso.value = '';
        altura.value = '';
}

    function mostrar (nome, idade, peso, altura) {
document.getElementById('nomeDigitado').innerText = nome;
    //console.log('Nome : ' + nome)
document.getElementById('idadeDigitado').innerText = idade;
    //console.log('Idade : ' + idade, typeof(idade))
document.getElementById('pesoDigitado').innerText = peso;
    var kilo = parseFloat(peso);
    console.log('Peso : ' + kilo, typeof(kilo))
document.getElementById('alturaDigitado').innerText = altura;
    var tamanho = parseFloat(altura /= 100);
    console.log('Altura : ' + tamanho, typeof(tamanho))
    calcularIMC = kilo / (tamanho * tamanho);
document.getElementById('imc').innerText = (calcularIMC.toFixed(2));
    //console.log(calcularIMC.toFixed(2) )
console.log(Math.round(calcularIMC) + " - " + typeof(calcularIMC))
        return Number(calcularIMC);
}

