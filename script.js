let cores=["#4e84ad", "#5E610B", "#314250", "#FE642E","#0B3B0B","#0A122A", "#0B3B39"];
let i=0;
let timer=setInterval(mudaCorFundo,3000);
	function mudaCorFundo(){
		document.body.style.backgroundColor=cores[i];
		i++;
		if(i >= cores.length){
			i=0;
		}
}

// Calculo Batimentos
function batimentos () {
    let idade = prompt('Quantos anos voce tem ?');
    console.log('Anos de vida: ' + idade);
    let diasdevida = idade * 365;
    console.log('Dias de vida: ' + diasdevida);
    let batimentos = 'Seu coração bateu: ' + diasdevida * 24 * 60 * 80;
    console.log(batimentos);
    document.getElementById("result").innerHTML = batimentos;
    document.getElementById("result").style="background-color: #0004"
}

// Anos de Copa
function copas() {
    let anoCopa = 1930;
    let anoLimite = parseInt(prompt('Qual o ano limite na consulta?'))
    let result = document.getElementById("result");
    while(anoCopa <= anoLimite && anoCopa <= 2018){ 
        console.log(anoCopa);
        var para = document.createElement('p');
        para.textContent = "Em: " + anoCopa + " teve Copa do Mundo.";
        anoCopa = anoCopa + 4;
        result.appendChild(para);
    }
}

//Anos de Olimpiada
function olimpiadas(){
    console.log('olimpiadas')
}

//Media de Idade dos familiares
function mediaIdade(){
    console.log('media de idade')
}

//Acertar Numero pensado
