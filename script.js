let cores=["#086A87", "##0489B1", "#0B3B39", "#4e84bc", "#314250", "#0B3861"];

    let i=0;
    let timer=setInterval(mudaCorFundo,10000);
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
    let calcBatimentos = 'Idade: ' + idade + '<br>' + 'Seu coração bateu: ' + diasdevida * 24 * 60 * 80 + " vezes em toda sua vida.";
    console.log(calcBatimentos);
    let batimentos = document.getElementById("batimentos");
    
    let imgBatimentos = document.createElement("img");
    imgBatimentos.src = "https://cdn.pixabay.com/photo/2018/04/12/04/26/blood-pressure-3312513_960_720.png";
    document.getElementById("batimentos").appendChild(imgBatimentos); //Adiciona imagem como filha do id=batimentos.
    //batimentos.insertAdjacentElement("afterend", imgBatimentos); //Igual a linha acima
    imgBatimentos.height = "180";
    batimentos.insertAdjacentHTML("afterend", calcBatimentos);
    document.getElementById("batimentos").style="background-color: #000";
}

// Anos de Copa
let copa;
let anoInicial = 1930;
let anoLimite = 2018;
let buttonCopa = document.getElementById('copas')
    buttonCopa.addEventListener("click", anodeCopa)

    function checkWar (ano){
        var houveGuerra = false;
            if (ano >= 1942 && ano <= 1946){                    
                houveGuerra = true; //Caso for V executa o codigo abaixo:
                console.log('Sem Copa.')
                copa += 'Em ' + ano + ': nao teve Copa devido a Guerra. \n';
            };
        return houveGuerra;
    };

    function anodeCopa () {
        for (ano = anoInicial; ano <= anoLimite; ano += 4) {
            if (checkWar(ano) == true)
                continue
                console.log('Em: ' + ano + ': Teve Copa.')
                copa += 'Em ' + ano + ': Teve Copa. \n'; 
        }
            if (ano > 2020) {
                    console.log('Em: ' + ano + ' : vai ter copa.')
                    copa += 'Em ' + ano + ': vai ter Copa.';        
            }
        let imgCopa = document.createElement("img");
        imgCopa.src = "https://static.mundoeducacao.uol.com.br/mundoeducacao/conteudo_legenda/ad7523a3d1a139039d9a33bdd76a9ddf.jpg";
        copas.insertAdjacentElement("afterend", imgCopa); // insere element IMG apos o fim do id=copas.
        //document.getElementById("copas").appendChild(imgCopa); // mesma coisa q a linha acima
        imgCopa.height = "200";        
    document.getElementById("copas").innerText += copa; //innerHTML nao pula a linha com \n
        //Com innerText usar \n para pular a linha. textContent nao pula a linha
    } 
    
//Anos de Olimpiada
function olimpiadas(){
    let element = document.createElement('div');
        element.innerText = "Teste OLIMPIADAS";
    let olimpiada = document.getElementById("olimpiadas");
        olimpiada.insertAdjacentText("afterend", element.innerText);
        console.log(element.innerText);
}
/*
document.getElementById("copas").appendChild(para);        
let para = document.createElement('p');
para.textContent = "Em: " + anoCopa + " não teve Copa devido a Guerra Mundial.";
copas.insertAdjacentElement("afterend", para)
*/

//Comparativo combustiveis
function combustiveis (gas){
    console.log('combustiveis')
}

//Media de Idade dos familiares
function mediaIdade(){
    console.log('media de idade')
}

//Acertar Numero pensado
