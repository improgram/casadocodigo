
function capturar() {
    var data = new Date();
    console.log(data.toString())

    var nome = document.getElementById('nome').value;
        document.getElementById('nomeDigitado').innerText = nome

    var idade = document.getElementById('idade').value;
        document.getElementById('idadeDigitado').innerHTML = idade;
    
    var email = document.getElementById('email').value;
        document.getElementById('emailDigitado').innerHTML = email;

    var assunto = document.getElementById('assunto').value;
        document.getElementById('assuntoDigitado').innerText = assunto;
}
