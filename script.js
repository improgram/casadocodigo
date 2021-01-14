let cores=["##01A9DB", "#086A87", "##0489B1", "#0B3B39", "#4e84bc", "#314250", "#0B3861"];
let i=0;
let timer=setInterval(mudaCorFundo,5000);
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
    batimentos.insertAdjacentHTML("afterend", calcBatimentos);
    
    let img = document.createElement("img");
    img.src = "https://cdn.pixabay.com/photo/2018/04/12/04/26/blood-pressure-3312513_960_720.png";
    document.getElementById("batimentos").appendChild(img);//Adiciona imagem como filha do id=batimentos.
    //https://pixabay.com/images/id-3312513/
    //https://pixabay.com/images/id-961194/
    //https://pixabay.com/images/id-157895/
    //https://pixabay.com/images/id-163708/
    //https://pixabay.com/images/id-2069872/
    img.height = "100"; 
    //document.getElementById("batimentos").style="background-color: #F6CECE";
}

// Anos de Copa

function todasCopas() {
    let anoCopa = 1930;
    let anoLimite = 2018;
    let copas = document.getElementById('copas');
    
    while(anoCopa <= anoLimite){
        console.log(anoCopa);
        //copas.textContent = "Em: " + anoCopa + " teve Copa do Mundo.";
        //copas.insertAdjacentHTML("afterend", anoCopa)
        anoCopa = anoCopa + 4;
    }
    
}


/*
function todasCopas() {
    let anoCopa = 1930;
    let anoLimite = parseInt(prompt('Qual o ano limite na consulta?'))
    let copas = document.getElementById("copas");
    var para = document.createElement('p');

    while(anoCopa <= anoLimite && anoCopa <= 2018){
        console.log(anoCopa);
        anoCopa = anoCopa + 4;
        if (anoCopa = 1942 && anoCopa == 1946) {
            para.textContent = "Em: " + anoCopa + " não teve Copa devido a Guerra Mundial.";
        } else {
            para.textContent = "Em: " + anoCopa + " teve Copa do Mundo.";
        }
        copas.appendChild(para);
        break;
    }
}
*/

//Anos de Olimpiada
function olimpiadas(){
    console.log('olimpiadas')
}

//Media de Idade dos familiares
function mediaIdade(){
    console.log('media de idade')
}

//Acertar Numero pensado
