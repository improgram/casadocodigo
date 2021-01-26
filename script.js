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
    batimentos.insertAdjacentHTML("afterend", calcBatimentos);
    
    let img = document.createElement("img");
    img.src = "https://cdn.pixabay.com/photo/2018/04/12/04/26/blood-pressure-3312513_960_720.png";
    document.getElementById("batimentos").appendChild(img); //Adiciona imagem como filha do id=batimentos.
    img.height = "100"; 
    //document.getElementById("batimentos").style="background-color: #F6CECE";
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
        
        if (ano == anoInicial){
            console.log("<h3>Anos de Copa entre " + anoInicial + " e " + anoLimite + " :</h3>");     
            for (ano = anoInicial; ano <= anoLimite; ano = ano + 4) {
                if (checkWar(ano) == true)
                continue;
                console.log(ano)
                //mostra(ano);    
            }
            return ano;
        }
        
        let anosdeCopa = ano;
        let copa = document.getElementById("copas");
        copa.insertAdjacentHTML("afterend", anosdeCopa);
        let img = document.createElement("img");
        img.src = "https://static.mundoeducacao.uol.com.br/mundoeducacao/conteudo_legenda/ad7523a3d1a139039d9a33bdd76a9ddf.jpg";
        copa.insertAdjacentElement("afterend", img);
        img.height = "200";
        
    }    

/*
//'Anos de Copa entre' + anoInicial + ' e ' + anoLimite + ' : ';
let para = document.createElement('hr');
document.getElementById("copas").appendChild(para);        
let para = document.createElement('p');
para.textContent = "string";
let copas = document.getElementById("copas");
copas.insertAdjacentElement("afterend", para)
console.log("teste para")
let copas = document.getElementById("copas");
copas.textContent = "Em: " + anoCopa + " teve Copa do Mundo.";
var para = document.createElement('p');
para.textContent = "Em: " + anoCopa + " não teve Copa devido a Guerra Mundial.";
para.textContent = "Em: " + anoCopa + " teve Copa do Mundo.";
copas.appendChild(para);
console.log('olimpiadas')
let element = document.createElement('p');
element.innerText = "string teste";
let olimpiadas = document.getElementById("olimpiadas");
olimpiadas.textContent = "teste tes tes teste"
olimpiadas.insertAdjacentHTML("afterend", element)
console.log(element)
*/


//Anos de Olimpiada
function olimpiadas(){
    let element = document.createElement('div');
        element.innerText = "string teste";
    let olimpiada = document.getElementById("olimpiadas");
        olimpiada.insertAdjacentText("afterend", element.innerText);
        console.log(element.innerText);
}

//Comparativo combustiveis
function combustiveis (gas){
    console.log('combustiveis')
}

//Media de Idade dos familiares
function mediaIdade(){
    console.log('media de idade')
}

//Acertar Numero pensado
