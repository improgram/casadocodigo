
// Calculo Batimentos
let buttonBatimentos = document.getElementById("batimentos")
    buttonBatimentos.addEventListener("click", batimentos)

function batimentos () {
    let idade = prompt('Quantos anos voce tem ?');
    let diasdevida = idade * 365;
    let calcBatimentos = 'Idade: ' + idade + '\n' + 'Coração bateu: ' + diasdevida * 24 * 60 * 80 + ' vezes ' + 'em toda vida.';
    console.log(calcBatimentos);

    let imgBatimentos = document.createElement("img");
    imgBatimentos.src = "https://cdn.pixabay.com/photo/2018/04/12/04/26/blood-pressure-3312513_960_720.png";
    imgBatimentos.height = "180";

    buttonBatimentos.insertAdjacentElement("beforeEnd", imgBatimentos);  //Adiciona imagem como filha do id=batimentos.
    //document.getElementById("batimentos").appendChild(imgBatimentos); //Igual a linha acima
    buttonBatimentos.insertAdjacentHTML("beforeEnd", calcBatimentos);
}

// Anos de Copa
let copa = 'Todas as Copas \n';
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
        for (ano = 1930; ano <= anoLimite; ano += 4) {
            if (checkWar(ano) == true)  
                continue
                copa += 'Em ' + ano + ': Teve Copa. \n';
                console.log('Em: ' + ano + ': Teve Copa.')
        }
            if (ano > 2020) {
                    console.log('Em: ' + ano + ' : vai ter copa.')
                    copa += 'Em ' + ano + ': vai ter Copa.';        
            }

        let imgCopa = document.createElement("img");
        imgCopa.src = "https://static.mundoeducacao.uol.com.br/mundoeducacao/conteudo_legenda/ad7523a3d1a139039d9a33bdd76a9ddf.jpg";
        imgCopa.height = "260";
        imgCopa.width = "520";
        buttonCopa.insertAdjacentElement("beforeEnd", imgCopa); // insere element IMG apos o fim do id=copas.
        //document.getElementById("copas").appendChild(imgCopa); IGUAL a mesma coisa que a linha acima.
        buttonCopa.insertAdjacentHTML("beforeEnd", copa);
        //Com innerText usar \n para pular a linha. textContent e innerHTML nao pula a linha
    } 
    
//Anos de Olimpiada
let buttonOlimpiadas = document.getElementById('olimpiadas');
    buttonOlimpiadas.addEventListener("click", olimpiadas);

function olimpiadas(){
    let imgOlimpiadas = document.createElement('img');
    imgOlimpiadas.src = "https://onlympics.com.br/wp-content/uploads/2019/01/Onlympics-jogos-olimpicos-1200x554.png";
    imgOlimpiadas.height = "220";

    buttonOlimpiadas.insertAdjacentElement("afterend", imgOlimpiadas);
    document.getElementById('olimpiadas').innerText;
    console.log('teste olimpiadas');

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
