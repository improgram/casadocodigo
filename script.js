let cores=["##01A9DB", "#086A87", "##0489B1", "#0B3B39", "#4e84bc", "#314250", "#0B3861"];
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
    let calcBatimentos = '<br>Idade: ' + idade + '<br>Seu coração bateu: ' + diasdevida * 24 * 60 * 80 + " vezes em toda sua vida.";
    console.log(calcBatimentos);
    let batimentos = document.getElementById("batimentos");

    //batimentos.src = "https://cdn.pixabay.com/photo/2018/04/12/04/26/blood-pressure-3312513_960_720.png";
    //https://pixabay.com/images/id-3312513/
    //https://pixabay.com/images/id-961194/
    //https://pixabay.com/images/id-157895/
    //https://pixabay.com/images/id-163708/
    //https://pixabay.com/images/id-2069872/
    batimentos.height = "100";
    batimentos.insertAdjacentHTML("afterend", calcBatimentos);
    //document.getElementById("result").style="background-color: #0004"
}

// Anos de Copa
function copas() {
    let anoCopa = 1930;
    let anoLimite = parseInt(prompt('Qual o ano limite na consulta?'))
    //let result = document.createElement("div");
    while(anoCopa <= anoLimite && anoCopa <= 2018){
        console.log(anoCopa);
        anoCopa = anoCopa + 4;
        if (anoCopa = 1942 || anoCopa == 1946) {
            var para = document.createElement('p');
            para.textContent = "Em: " + anoCopa + " não teve Copa devido a Guerra Mundial.";
        } else {
            var para = document.createElement('p');
            para.textContent = "Em: " + anoCopa + " teve Copa do Mundo.";
        }
        result.appendChild(para);
        break;
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
