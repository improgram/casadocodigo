function mostra(frase){
    document.write(frase + "<br>")
}
mostra("<h4>Javascript carregou.</h4>")
var contatos = [];

function capturar() {
    var data = new Date();
    console.log(data.toString())

    contatos = document.getElementById('nome').value;
    document.getElementById('dadosDigitados').innerText = contatos;

    //contatos = document.getElementsByTagName("input").value;
    //document.getElementById('dadosDigitados').innerText = contatos;

    var nome = document.getElementById('nome').value;
    var idade = document.getElementById('idade').value;
    var email = document.getElementById('email').value;
    var assunto = document.getElementById('assunto').value;
    console.log(assunto);
}    


    console.log(
        //document.querySelector('#formulario').innerText
        //document.querySelector('input[name="nome"]').innerText
        //document.getElementsByClassName("meuForm")
        //document.getElementsByTagName("input")['nome'].textContent
        //document.getElementsByTagName('#input').innerText;
        //document.getElementById("formulario").getElementsByTagName("#input").innerText
    )    

//test
//https://js.do/marcosr


contatos.push("Joao" , " 22" , "email@email.com" , "Vote Nulo");
mostra('<strong>Nome: </strong>' + contatos[0])
mostra('<strong>Idade : </strong>' + contatos[1] + ' anos')
mostra('<strong>Email : </strong>' + contatos[2])
mostra('<strong>Assunto : </strong>' + contatos[3])
