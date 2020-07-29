
function mostra(frase){
    document.write(frase + "<br>")
}

mostra("pagina carregou")

var dados = [];
    dados.sort(function(a,b){
        return a - b;
})

function msg(){
    mostra('Adicionado');
}
mostra('<h3>Criar array de contatos.</h3>')

var idadeDigitada = document.getElementsByClassName("enviar").value;

function botaoClicado (){
    if (idadeDigitada >= 100 || idadeDigitada <= 0 ){
    alert("Numero Invalido : Idade deve ser maior que 0 e menor que 100.")
    }
}

var resposta = document.getElementById("resposta");
//resposta.innerHTML = botaoClicado;   

dados.push(idadeDigitada); //Adiciona os dados digitados na Array.

var adicionarDados = document.getElementById("enviar");
//    adicionarDados.onclick = botaoClicado;

mostra('Dados Digitados : ' + dados)
