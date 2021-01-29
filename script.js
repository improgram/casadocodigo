let cores=["#086A87", "##0489B1", "#0B3B39", "#4e84bc", "#314250", "#0B3861"];

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
    let calcBatimentos = 'Idade: ' + idade + '<br>Seu coração bateu: ' + diasdevida * 24 * 60 * 80 + " vezes em toda sua vida.";
    console.log(calcBatimentos);
    let batimentos = document.getElementById("batimentos");
    
    let imgBatimentos = document.createElement("img");
    imgBatimentos.src = "https://cdn.pixabay.com/photo/2018/04/12/04/26/blood-pressure-3312513_960_720.png";
    document.getElementById("batimentos").appendChild(imgBatimentos); //Adiciona imagem como filha do id=batimentos.
    //batimentos.insertAdjacentElement("afterend", imgBatimentos); //Igual a linha acima
    imgBatimentos.height = "100";
    batimentos.insertAdjacentHTML("afterend", calcBatimentos);
    document.getElementById("batimentos").style="background-color: #000";
}

// Anos de Copa
    function checkWar (ano){
        var houveGuerra = false;
            if (ano >= 1942 && ano <= 1946){                    
                houveGuerra = true;
                console.log('Sem Copa.')
                //mostra(ano + ': Não teve Copa')
            };
        return houveGuerra;
    };

    function copadoMundo (ano) {
        let anoInicial = 1930;
        let anoLimite = parseInt(prompt('Qual o ano limite para consultar os anos de Copa ?'));
        var copas = document.getElementById("copas");

        if (ano == anoInicial)
            for (ano = anoInicial; ano <= anoLimite; ano = ano + 4)
                if (checkWar(ano) == true)
                    //console.log(ano); // nada
                    continue;
                    //console.log(ano); //nada
                    var divCopa = document.createElement("div");
                    divCopa.textContent = anoLimite + " STRING COPA "; //textContent= para todos Node Objetos
                    //copaTeste.innerText = anoInicial + ": Teve Copa"; //innerText=apenas para HTML objetos
                    copas.insertAdjacentText("afterend", divCopa.innerText);
                    //return ano.textContent; => nada


        let imgCopa = document.createElement("img");
        imgCopa.src = "https://static.mundoeducacao.uol.com.br/mundoeducacao/conteudo_legenda/ad7523a3d1a139039d9a33bdd76a9ddf.jpg";
        copas.insertAdjacentElement("afterend", imgCopa); // insere element IMG apos o fim do id=copas.
        //document.getElementById("copas").appendChild(imgCopa); // igual a linha acima
        imgCopa.height = "200";
        
        /*
        ano <= anoLimite ? document.getElementById("copas").innerText = "Teve Copa: " + ano + '<br>':
                    document.getElementById("copas").innerHTML = "Nao teve copa: " + ano;
        copa.insertAdjacentHTML("afterend", ano);

        var span = document.querySelector('span');
        span.innerHTML = "1<br>2<br>3<br>4\n5\n6\n7\n8";
        console.log(span.innerText); // breaks in first half
        console.log(span.textContent); // breaks in second half
        */
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
