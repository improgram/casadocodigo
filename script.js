
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
    imgBatimentos.height = "200";

    buttonBatimentos.insertAdjacentElement("beforeEnd", imgBatimentos);  //Adiciona imagem como filha do id=batimentos.
    //document.getElementById("batimentos").appendChild(imgBatimentos); //Igual a linha acima
    buttonBatimentos.insertAdjacentHTML("beforeEnd", calcBatimentos);
}

// Anos de Copa
let copa = 'Todas as Copas \n';
let ultimaCopa = 2018;
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
        for (ano = 1930; ano <= ultimaCopa; ano += 4) {
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
        imgCopa.height = "200";
        imgCopa.width = "340";
        buttonCopa.insertAdjacentElement("beforeEnd", imgCopa); // insere element IMG apos o fim do id=copas.
        //document.getElementById("copas").appendChild(imgCopa); IGUAL a mesma coisa que a linha acima.
        buttonCopa.insertAdjacentHTML("beforeEnd", copa);
        //Com innerText usar \n para pular a linha. textContent e innerHTML nao pula a linha
    } 
    
//Anos de Olimpiada
let olimpiadas = 'Todas as Olimpiadas \n';
let ultimaOlimpiadas = 2016;
let buttonOlimpiadas = document.getElementById('olimpiadas');
    buttonOlimpiadas.addEventListener("click", anodeOlimpiadas);

function checkWar2 (ano){
    let pausaGuerra = false;
    if (ano >= 1940 && ano <= 1946){
        pausaGuerra = true; //Caso for V executa a condicao
        console.log('Sem Olimpiadas.')
        olimpiadas += 'Em ' + ano + ': interrupção devido a Guerra Mundial. \n';
    };
    return pausaGuerra;
}
    
function anodeOlimpiadas(){
    for(ano = 1896; ano <= ultimaOlimpiadas; ano += 4){
        if(checkWar2(ano) == true)
        continue
        olimpiadas += 'Em ' + ano + ': Teve Olimpiadas. \n';
        console.log('Em: ' + ano + ': Teve Olimpiadas.')
    }

    if(ano > 2019) {
        console.log('Em: ' + ano + ' : vai ter Olimpiadas.')
        olimpiadas += 'Em ' + ano + ': Interrupção devido a Covid-19.'
    }

    let imgOlimpiadas = document.createElement('img');
    imgOlimpiadas.src = "https://onlympics.com.br/wp-content/uploads/2019/01/Onlympics-jogos-olimpicos-1200x554.png";
    imgOlimpiadas.width = "340";

    buttonOlimpiadas.insertAdjacentElement("beforeEnd", imgOlimpiadas); //insere elemento
    buttonOlimpiadas.insertAdjacentHTML("beforeEnd", olimpiadas);
}

//Tabuada
let buttonTabuada = document.getElementById('tabuada');
    buttonTabuada.addEventListener("click", tabuada);
let buttonTabuada2 = document.createElement('button');
    buttonTabuada2.innerText = 'Escolha outro Numero';

    function tabuada (){
        let numero = parseInt(prompt('Tabuada de qual numero ?' ));
        let resposta = 'Numero escolhido: ' + numero + '\n';
        
            for(let count = 1; count <= 10; count++) {
                resposta += numero + " X " + count + " = " + numero*count + '\n';
            }

        let imgTabuada = document.createElement('img');
        imgTabuada.src = "https://geniodamatematica.com.br/wp-content/uploads/2019/04/multiplicacao-tabela-de-pitagoras.png"
        imgTabuada.width = "340";       

        buttonTabuada.insertAdjacentElement("beforeEnd", imgTabuada);
        buttonTabuada.insertAdjacentHTML("beforeEnd", resposta);
        buttonTabuada.insertAdjacentElement("beforeEnd", buttonTabuada2);
    }

//Comparativo combustiveis
let buttonCombustiveis = document.getElementById('combustiveis');
    buttonCombustiveis.addEventListener("click", combustiveis);

function combustiveis (){
    let tanqueCarro = 40;
    let kmRodadosGas = parseInt(prompt('Digite km Percorridos com Gasolina.'))
    let consumoGasolina = (kmRodadosGas / tanqueCarro )
    console.log('combustiveis')

    let imgCombustiveis = document.createElement('img');
    imgCombustiveis.src = "https://cdn.pixabay.com/photo/2016/08/15/22/20/fuel-1596622__340.jpg"
    imgCombustiveis.width = "340";

    buttonCombustiveis.insertAdjacentElement("beforeEnd", imgCombustiveis)
    buttonCombustiveis.insertAdjacentHTML("beforeEnd", consumoGasolina);
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
