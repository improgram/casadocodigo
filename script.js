/*
let cores= 
    document.body.style["background-image"] = "url(https://upload.wikimedia.org/wikipedia/commons/4/4b/Milky_Way_3.jpg)";

let i=0;
let timer=setInterval(mudaCorFundo,10000);

function mudaCorFundo(){
	document.body.style.backgroundImage=cores[i]; //ou backgroundColor
	i++;
    if(i >= cores.length){
		i=0;
	}
}
*/

// Calculo Batimentos
let buttonBatimentos = document.getElementById("batimentos")
    buttonBatimentos.addEventListener("click", batimentos)

function batimentos () {
    let idade = prompt('Quantos anos voce tem ?');
    console.log('Anos de vida: ' + idade);
    let diasdevida = idade * 365;
    console.log('Dias de vida: ' + diasdevida);
    let calcBatimentos = 'Idade: ' + idade + '<br>' + 'Seu coração bateu: ' + diasdevida * 24 * 60 * 80 + ' vezes ' + 'em toda sua vida.';
    console.log(calcBatimentos);
    let batimentos = document.getElementById("batimentos");

    let imgBatimentos = document.createElement("img");
    imgBatimentos.src = "https://cdn.pixabay.com/photo/2018/04/12/04/26/blood-pressure-3312513_960_720.png";
    document.getElementById("batimentos").appendChild(imgBatimentos); //Adiciona imagem como filha do id=batimentos.
    //batimentos.insertAdjacentElement("afterend", imgBatimentos); =igual= a linha acima
    imgBatimentos.height = "180";
    batimentos.insertAdjacentHTML("afterend", calcBatimentos);
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
        buttonCopa.insertAdjacentElement("afterend", imgCopa); // insere element IMG apos o fim do id=copas.
        //document.getElementById("copas").appendChild(imgCopa); IGUAL a mesma coisa que a linha acima.
        imgCopa.height = "280";        
    document.getElementById("copas").innerText += copa;
    //Com innerText usar \n para pular a linha. textContent e innerHTML nao pula a linha
    } 
    
//Anos de Olimpiada
let buttonOlimpiadas = document.getElementById('olimpiadas');
    buttonOlimpiadas.addEventListener("click", olimpiadas);

function olimpiadas(){
    let element = document.createElement('div');
        element.innerText = "Teste OLIMPIADAS";
    let olimpiada = document.getElementById("olimpiadas");
        olimpiada.insertAdjacentText("afterend", element.innerText);
        console.log(element.innerText);
    let imgOlimpiadas = document.createElement('img');
    imgOlimpiadas.src = "https://onlympics.com.br/wp-content/uploads/2019/01/Onlympics-jogos-olimpicos-1200x554.png";
    imgOlimpiadas.height = "260";
    olimpiada.insertAdjacentElement("afterend", imgOlimpiadas);
}

//Comparativo combustiveis
let buttonCombustiveis = document.getElementById('combustiveis');
    buttonCombustiveis.addEventListener("click", combustiveis);
function combustiveis (){
    console.log('combustiveis')
}

//Media de Idade dos familiares
let buttonIdade = document.getElementById('mediaIdade');
    buttonIdade.addEventListener("click", mediaIdade);
function mediaIdade(){
    console.log('media de idade')
}

//Acertar Numero pensado
let buttonNumero = document.getElementById('adivinharNumero');
    buttonNumero.addEventListener("click", numeroPensado);
function numeroPensado() {
    console.log('numero pensado:' )
}
