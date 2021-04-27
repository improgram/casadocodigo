
// Calculo Batimentos
let buttonBatimentos = document.getElementById("batimentos");
    buttonBatimentos.addEventListener("click", batimentos);

function batimentos () {
    let idade = prompt('Quantos anos voce tem ?');
    let diasdevida = idade * 365;
    let calcBatimentos = '\n Idade: ' + idade + ' anos.\n' + 'O Coração bateu: \n' + diasdevida * 24 * 60 * 80 + ' vezes em toda a vida.\n';
    console.log(calcBatimentos);

    let codBatimentos = document.createElement('a');
        codBatimentos.text = '\n Abrir Codigo Batimentos no GitHub';
        codBatimentos.setAttribute('href', 'https://github.com/improgram/casadocodigo/blob/master/Capitulo3/024Topico3.6.html');
        codBatimentos.setAttribute("target", "_blank");
        
    buttonBatimentos.insertAdjacentHTML("beforeEnd", calcBatimentos);
    buttonBatimentos.insertAdjacentElement("beforeEnd", codBatimentos);
        
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

        let codCopas = document.createElement('a');
            codCopas.text = '\n Abrir Codigo Fonte das Copas no GitHub';
            codCopas.setAttribute('href', "https://github.com/improgram/casadocodigo/blob/master/Capitulo5/036Topico5.3.html");
            codCopas.setAttribute("target", "_blank");

        buttonCopa.insertAdjacentHTML("afterEnd", copa);
        buttonCopa.insertAdjacentElement("beforeEnd", codCopas);
        //Com innerText usar \n para pular a linha. Com textContent e innerHTML nao pula a linha
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

    let codOlimpiadas = document.createElement('a');
        codOlimpiadas.text = '\n Abrir o Codigo Olimpiadas no GitHub';
        codOlimpiadas.setAttribute('href', "https://github.com/improgram/casadocodigo/blob/master/Capitulo5/038Topico5.5.html");
        codOlimpiadas.setAttribute('target', "_blank");
    
    buttonOlimpiadas.insertAdjacentHTML("afterEnd", olimpiadas);
    buttonOlimpiadas.insertAdjacentElement('beforeEnd', codOlimpiadas);
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
            
        let codTabuada = document.createElement('a');
            codTabuada.text = '\n Abrir o Codigo Tabuada no GitHub';
            codTabuada.setAttribute('href', "https://github.com/improgram/casadocodigo/blob/master/Capitulo5/039Topico5.6-Tabuada.html");
            codTabuada.setAttribute('target', "_blank");

        buttonTabuada.insertAdjacentHTML("afterEnd", resposta);
        buttonTabuada.insertAdjacentElement("afterEnd", buttonTabuada2);
        buttonTabuada.insertAdjacentElement('afterEnd', codTabuada);
    }



/*      
combustiveis: <a href="https://github.com/improgram/casadocodigo/blob/master/Capitulo2/011Topico2.6_Opcao3.html" target="_blank">Consumo de Combustivel Código Fonte no GitHub</a>
idade: <a href="https://github.com/improgram/casadocodigo/blob/master/Capitulo5/042Topico5.9.html" target="_blank">Media de idade Código Fonte no GitHub</a>
adivinhar: <a href="https://github.com/improgram/casadocodigo/blob/master/Capitulo5/044Topico5.11_Exerci1_2_3.html" target="_blank">Acertar Numero - Código Fonte no GitHub</a>
linhas/colunas: <a href="https://github.com/improgram/casadocodigo/blob/master/Capitulo5/045Topico5.12.html" target="_blank">Linhas e Colunas Código Fonte no GitHub</a>
Mega-Sena: <a href="https://github.com/improgram/casadocodigo/blob/master/Capitulo6/051Topico6.4_Opcao2.html" target="_blank">Mega-Sena Código Fonte no GitHub</a>
Intro-Canvas: <a href="https://github.com/improgram/casadocodigo/blob/master/Capitulo7/055Topico7.2.html" target="_blank">Introdução Canvas Código Fonte no GitHub</a>
Damas: <a href="https://github.com/improgram/casadocodigo/blob/master/Capitulo7/056Topico7.3_Tabuleiro.html" target="_blank">Tabuleiro de Damas Código Fonte no GitHub</a>
Bandeiras: <a href="https://github.com/improgram/casadocodigo/blob/master/Capitulo7/057Topico7.4_Bandeiras.html" target="_blank">Bandeiras Código Fonte no GitHub</a>      
Canvas condicionais: <a href="https://github.com/improgram/casadocodigo/blob/master/Capitulo7/062Topico7.6_Exercicio4.html" target="_blank">Canvas com Condicionais Código Fonte no GitHub</a>
Canvas ordem Crescente: <a href="https://github.com/improgram/casadocodigo/blob/master/Capitulo7/063Topico7.7.html" target="_blank">Canvas Ordem crescente Código Fonte no GitHub</a>
Canvas - Parabola: <a href="https://github.com/improgram/casadocodigo/blob/master/Capitulo7/065Topico7.9_Parabola.html" target="_blank">Canvas - Parabola Código Fonte no GitHub</a>
Canvas - Seno: <a href="https://github.com/improgram/casadocodigo/blob/master/Capitulo7/069Topico7.13_Seno.html" target="_blank">Canvas - Calculo do Seno Código Fonte no GitHub</a>
Detecta clique: <a href="https://github.com/improgram/casadocodigo/blob/master/Capitulo8/070Topico8.1_Com_Alert.html" target="_blank">Detectar posicao dos cliques Código Fonte no GitHub</a>
Detecta mouse: <a href="https://github.com/improgram/casadocodigo/blob/master/Capitulo8/071Topico8.2_Exercicio1.html" target="_blank">Detectar botao mouse Código Fonte no GitHub</a>
Paint: <a href="https://github.com/improgram/casadocodigo/blob/master/Capitulo8/073Topico8.2_Paint_Canvas_Exerci3.html" target="_blank">Paint-Brush Código Fonte no GitHub</a>
Canvas - Animacoes: <a href="https://github.com/improgram/casadocodigo/blob/master/Capitulo8/075Topico8.4.html" target="_blank">Animacoes com canvas Código Fonte no GitHub</a>
Tiro ao Alvo: <a href="https://github.com/improgram/casadocodigo/blob/master/Capitulo8/079Topico8.5_opcao2.html" target="_blank">Jogo Tiro ao Alvo - Código Fonte no GitHub</a>
Form.Eventos: <a href="https://github.com/improgram/casadocodigo/blob/master/Capitulo8/080Topico9.1.html" target="_blank">Formulario com eventos - Código Fonte no GitHub</a>
Form. Array: <a href="https://github.com/improgram/casadocodigo/blob/master/Capitulo8/081Topico9.1_formulario_array.html" target="_blank">Formulario com array - Código Fonte no GitHub</a>
Objetos: <a href="https://github.com/improgram/casadocodigo/blob/master/Capitulo8/083_Arrays.html" target="_blank">Introducao Objetos Código Fonte no GitHub</a>    
Dom: <a href="https://github.com/improgram/casadocodigo/blob/master/Capitulo8/084Topico9.2_links.html" target="_blank">Manipulacao DOM Código Fonte no GitHub</a>           
IMC: <a href="https://github.com/improgram/casadocodigo/blob/master/Capitulo8/085Topico9.3_IMC.html" target="_blank">Calcular IMC - Código Fonte no GitHub</a> 
      
*/


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

        buttonCombustiveis.insertAdjacentElement("beforeEnd", imgCombustiveis);
        buttonCombustiveis.insertAdjacentHTML("beforeEnd", resumoGas);
        buttonCombustiveis.insertAdjacentElement("beforeEnd", buttonComparativo);
/*
    let cod = document.createElement('a');
        .text = '\n Abrir o Codigo no GitHub';
        .setAttribute('href', "");
        .setAttribute('target', "_blank");    
}
*/

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

    /*
    let cod = document.createElement('a');
        .text = '\n Abrir o Codigo no GitHub';
        .setAttribute('href', "");
        .setAttribute('target', "_blank");    
}
*/


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

    /*
    let cod = document.createElement('a');
        .text = '\n Abrir o Codigo no GitHub';
        .setAttribute('href', "");
        .setAttribute('target', "_blank");    
}
*/    

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

    /*
    let cod = document.createElement('a');
        .text = '\n Abrir o Codigo no GitHub';
        .setAttribute('href', "");
        .setAttribute('target', "_blank");    
}
*/

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

    /*
    let cod = document.createElement('a');
        .text = '\n Abrir o Codigo no GitHub';
        .setAttribute('href', "");
        .setAttribute('target', "_blank");    
}
*/

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

    /*
    let cod = document.createElement('a');
        .text = '\n Abrir o Codigo no GitHub';
        .setAttribute('href', "");
        .setAttribute('target', "_blank");    
}
*/

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

    /*
    let cod = document.createElement('a');
        .text = '\n Abrir o Codigo no GitHub';
        .setAttribute('href', "");
        .setAttribute('target', "_blank");    
}
*/

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

    /*
    let cod = document.createElement('a');
        .text = '\n Abrir o Codigo no GitHub';
        .setAttribute('href', "");
        .setAttribute('target', "_blank");    
}
*/

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

    /*
    let cod = document.createElement('a');
        .text = '\n Abrir o Codigo no GitHub';
        .setAttribute('href', "");
        .setAttribute('target', "_blank");    
}
*/

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

    /*
    let cod = document.createElement('a');
        .text = '\n Abrir o Codigo no GitHub';
        .setAttribute('href', "");
        .setAttribute('target', "_blank");    
}
*/

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

    /*
    let cod = document.createElement('a');
        .text = '\n Abrir o Codigo no GitHub';
        .setAttribute('href', "");
        .setAttribute('target', "_blank");    
}
*/        

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

    /*
    let cod = document.createElement('a');
        .text = '\n Abrir o Codigo no GitHub';
        .setAttribute('href', "");
        .setAttribute('target', "_blank");    
}
*/

    buttonSeno.insertAdjacentElement("before", imgSeno);
}
