
// Calculo Batimentos
let buttonBatimentos = document.getElementById("batimentos")
    buttonBatimentos.addEventListener("click", batimentos)

function batimentos () {
    let idade = prompt('Quantos anos voce tem ?');
    let diasdevida = idade * 365;
    let calcBatimentos = '\n Idade: ' + idade + ' anos.' + 'O Coração bateu: ' + diasdevida * 24 * 60 * 80 + ' vezes em toda a vida.\n';
    console.log(calcBatimentos);

    let imgBatimentos = document.createElement("img");
    imgBatimentos.src = "https://cdn.pixabay.com/photo/2018/04/12/04/26/blood-pressure-3312513_960_720.png";
    imgBatimentos.width = "340";
    imgBatimentos.height = "200";

    let codBatimentos = document.createElement('a');
        codBatimentos.setAttribute('href', 'https://github.com/improgram/casadocodigo/blob/master/Capitulo3/024Topico3.6.html');     
        codBatimentos.setAttribute("target", "_blank");
        codBatimentos.text = '\n Batimentos: Abrir em nova Aba o Codigo Fonte no GitHub';

    buttonBatimentos.insertAdjacentElement("afterEnd", imgBatimentos);  //Adiciona imagem como filha do id=batimentos.
    /*document.getElementById("batimentos").appendChild(imgBatimentos);  = Igual a linha acima */
    buttonBatimentos.insertAdjacentHTML("afterEnd", calcBatimentos);
    imgBatimentos.insertAdjacentElement("afterEnd", codBatimentos);
        
    //beforebegin = Antes do element
    //afterbegin = Dentro do element e antes do primeiro filho
    //beforeEnd = Dentro do element e apos seu ultimo filho
    //afterend = Após o element
}

// Anos de Copa
let copa = '\n Todas as Copas \n';
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
                    copa += 'Em ' + ano + ': vai ter Copa.\n';        
            }

        let imgCopa = document.createElement("img");
            imgCopa.src = "https://static.mundoeducacao.uol.com.br/mundoeducacao/conteudo_legenda/ad7523a3d1a139039d9a33bdd76a9ddf.jpg";
            imgCopa.height = "200";
            imgCopa.width = "340";

        let codCopas = document.createElement('a');
            codCopas.setAttribute('href', "https://github.com/improgram/casadocodigo/blob/master/Capitulo5/036Topico5.3.html");
            codCopas.setAttribute("target", "_blank");
            codCopas.text = '\n Copas: Abrir em nova aba o Codigo Fonte no GitHub';

        buttonCopa.insertAdjacentElement("afterend", imgCopa);
        buttonCopa.insertAdjacentHTML("afterend", copa);
        //Com innerText usar \n para pular a linha. textContent e innerHTML nao pula a linha    
        imgCopa.insertAdjacentElement('afterEnd', codCopas);
    } 
    
//Anos de Olimpiada
let olimpiadas = '\n Todas as Olimpiadas \n';
let ultimaOlimpiadas = 2016;
let buttonOlimpiadas = document.getElementById('olimpiadas');
    buttonOlimpiadas.addEventListener("click", anodeOlimpiadas);

function checkWar2 (ano){
    let pausaGuerra = false;
    if (ano >= 1940 && ano <= 1946){
        pausaGuerra = true; //Caso for V executa a condicao
        console.log('Sem Olimpiadas.')
        olimpiadas += 'Em ' + ano + ': interrupção devido a Guerra. \n';
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
        olimpiadas += 'Em ' + ano + ': Interrupção devido a Covid-19.\n '
    }

    let imgOlimpiadas = document.createElement('img');
        imgOlimpiadas.src = "https://onlympics.com.br/wp-content/uploads/2019/01/Onlympics-jogos-olimpicos-1200x554.png";
        imgOlimpiadas.width = "340";

    let codOlimpiadas = document.createElement('a');
        codOlimpiadas.setAttribute('href', "https://github.com/improgram/casadocodigo/blob/master/Capitulo5/038Topico5.5.html");
        codOlimpiadas.setAttribute('target', "_blank");
        codOlimpiadas.text = '\n Olimpiadas: Abrir em nova aba o Codigo Fonte no GitHub';
    
    buttonOlimpiadas.insertAdjacentElement("afterend", imgOlimpiadas);
    buttonOlimpiadas.insertAdjacentHTML("afterend", olimpiadas);
    imgOlimpiadas.insertAdjacentElement('afterEnd', codOlimpiadas);
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

let buttonComparativo = document.createElement('button')
    buttonComparativo.innerText = "Clique para Comparar Alcool x Gasolina";
    buttonComparativo.addEventListener("click", comparaCombustivel);

function combustiveis (){
    let tanqueCarro = 40;
    let kmcomGas = parseInt(prompt('Digite km Percorridos com Gasolina.'))
    let consumoGasolina = (kmcomGas / tanqueCarro);
    //console.log('km por litros: ' + consumoGasolina)
    let resumoGas = 'Km percorridos digitado: ' + kmcomGas + '\n' +
                    'Com tanque de combustivel: ' + tanqueCarro + ' litros.\n' +
                    'Resultado: km rodado por litro: ' + consumoGasolina + ' km/L.\n';

    let imgCombustiveis = document.createElement('img');
        imgCombustiveis.src = "https://cdn.pixabay.com/photo/2016/08/15/22/20/fuel-1596622__340.jpg"
        imgCombustiveis.width = "340";

        buttonCombustiveis.insertAdjacentElement("beforeEnd", imgCombustiveis);
        buttonCombustiveis.insertAdjacentHTML("beforeEnd", resumoGas);
        buttonCombustiveis.insertAdjacentElement("beforeEnd", buttonComparativo);

}

function comparaCombustivel () {
    let buttonValorGas = parseInt(prompt('Digite o valor do litro da Gasolina.') );
        
    let buttonValorAlcool = parseInt(prompt('Digite o valor do litro do Alcool.') );
    console.log("litro da Gasolina: " + buttonValorGas);
    console.log("litro do Alcool: " + buttonValorAlcool);
}



//Media de Idade dos familiares
let buttonIdade = document.getElementById('mediaIdade');
    buttonIdade.addEventListener("click", mediaIdade);

function mediaIdade(){
    console.log('media de idade')

    let imgIdade = document.createElement('img');
        imgIdade.src = "http://google.com"
        imgIdade.width = "340"; // Retirar e testar img pelo CSS

    buttonIdade.insertAdjacentElement("beforeEnd", imgIdade);
}



//Acertar Numero pensado
let buttonNumero = document.getElementById('adivinharNumero');
    buttonNumero.addEventListener("click", numeroPensado);

function numeroPensado() {
    console.log('numero pensado:' )

    let imgNumero = document.createElement('img');
        imgNumero.src = "http://google.com";
        imgNumero.width = "340";

    buttonNumero.insertAdjacentElement("beforeEnd", imgNumero);
}

//Linhas e Colunas
let buttonlinhaColuna = document.getElementById('linhaColuna');
    buttonlinhaColuna.addEventListener("click", linhaComColuna);

function linhaComColuna(){
    console.log('linhas e colunas')

    let imgLinhaColuna = document.createElement('img');
        imgLinhaColuna.src = "http://google.com";
        imgLinhaColuna.width = "340";

    buttonlinhaColuna.insertAdjacentElement("before", imgLinhaColuna);
}



//Mega-Sena
let buttonMegaSena = document.getElementById('megaSena');
    buttonMegaSena.addEventListener("click", megasena);

function megasena(){
    console.log('teste Mega Sena');

    let imgMegaSena = document.createElement('img');
        imgMegaSena.src = "http://google.com";
        imgMegaSena.width = "340";

    buttonMegaSena.insertAdjacentElement("before", imgMegaSena);
}



//Introducao Canvas
let buttonCanvas = document.getElementById('canvas');
    buttonCanvas.addEventListener("click", introCanvas);

function introCanvas() {
    console.log('Intro Canvas');

    let imgCanvas = document.createElement('img');
        imgCanvas.src = "http://google.com";
        imgCanvas.width = "340";

    buttonCanvas.insertAdjacentElement("before", imgCanvas);
}



//Tabuleiro Damas
let buttonDamas = document.getElementById('damas');
    buttonDamas.addEventListener("click", damas);

function damas(){
    console.log('teste damas');

    let imgDamas = document.createElement('img');
        imgDamas.src = "http://google.com";
        imgDamas.width = "340";

    buttonDamas.insertAdjacentElement("before", imgDamas);
}


//Bandeiras com Canvas
let buttonBandeiras = document.getElementById('bandeiras');
    buttonBandeiras.addEventListener("click", bandeiras)

function bandeiras() {
    console.log('bandeiras');

    let imgPaises = document.createElement('img');
        imgPaises.src = "http://google.com";
        imgPaises.width = "340";

    buttonBandeiras.insertAdjacentElement("before", imgPaises);
}


//Canvas com Condicionais
let buttonCondicionais = document.getElementById('canvasCondicionais');
    buttonCondicionais.addEventListener("click", canvasCondicionais);

function canvasCondicionais(){
    console.log('canvas condicionais')

    let imgCondicionais = document.createElement('img');
    imgCondicionais.src = "http://google.com";
    imgCondicionais.width = "340";

    buttonCondicionais.insertAdjacentElement("before", imgCondicionais);
}


//Canvas Ordem crescente
let buttonCrescente = document.getElementById('canvasCrescente');
    buttonCrescente.addEventListener("click", canvasCrescente);

function canvasCrescente(){
    console.log('canvas crescente')

    let imgCrescente = document.createElement('img');
        imgCrescente.src = "http://google.com";
        imgCrescente.width = "340";

    buttonCrescente.insertAdjacentElement("before", imgCrescente);    
}


//Canvas Parabola
let buttonParabola = document.getElementById('canvasParabola');
    buttonParabola.addEventListener("click", canvasParabola)

function canvasParabola(){
    console.log('canvas parabola')

    let imgParabola = document.createElement('img');
        imgParabola.src = "http://google.com";
        imgParabola.width = "340";

    buttonParabola.insertAdjacentElement("before", imgParabola)
}


//Calculo do Seno com Canvas
let buttonSeno = document.getElementById('seno');
    buttonSeno.addEventListener("click", seno)

function seno(){
    console.log('seno')

    let imgSeno = document.createElement('img');
        imgSeno.src = "http://google.com";
        imgSeno.width = "340";

    buttonSeno.insertAdjacentElement("before", imgSeno);
}


//
