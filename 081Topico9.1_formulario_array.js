function mostra(frase){
    document.write(frase + '<br>')
}

var contatos = [];

var adicionar = function(nome, idade, email) {
    var id = (contatos.length + 1);
    contatos.push({
        'id': id,
        'nome': nome.value,
        'idade': idade.value,
        'email': email.value 
    });
    load(id, nome.value, idade.value, email.value);
    nome.value = '';
    idade.value = '';
    email.value = '';
}

var load = function(id, nome, idade, email) {
    var tbody = document.getElementsByTagName('tbody')[0];
     var tr = document.createElement('tr');
    var td0 = document.createElement('td');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    tr.appendChild(td0);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tbody.appendChild(tr);
    td0.innerHTML = id;
    td1.innerHTML = nome;
    td2.innerHTML = idade;
    td3.innerHTML = email;
    console.log('Nome Cadastrado: ' + nome)
    console.log('Idade : ' + idade)
    console.log('Email : ' + email)
}
