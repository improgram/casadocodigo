function todasFunctions() {  
    //let tasks = [batimentos(), anodeCopa(), anodeOlimpiadas() ];
    //https://www.devmedia.com.br/javascript-foreach-executando-uma-funcao-para-cada-elemento-de-um-array/39808
        console.log('teste todasFunctions');
    }

//console.log('Prefiro me arrepender da incerteza do que reviver a desgraça \n');    
//innerText deve usar \n para pular a linha. 
//O textContent e innerHTML nao pula a linha
//beforeBegin           = Antes do element
//afterBegin            = Dentro do element e antes do primeiro filho
//beforeEnd             = Dentro do element e apos seu ultimo filho
//afterEnd              = Após o element
//insertAdjacentElement () insere elemento que já está no Dom.
//insertAdjacentHtml ()    insere o código html: '<li>texto</li>'
/* https://stackoverflow.com/questions/42277092/javascript-function-on-multiple-buttons  */
/* https://acervolima.com/como-criar-e-aplicar-dinamicamente-a-classe-css-em-javascript/ */
/* https://acervolima.com/como-substituir-um-elemento-html-por-outro-usando-javascript/ */
/* https://medium.com/@caualoewen1/manipulando-a-dom-usando-javascript-para-p%C3%A1ginas-mais-din%C3%A2micas-328a467b4fb */
/* https://www.w3schools.com/jsref/dom_obj_all.asp */
/* http://devfuria.com.br/javascript/dom-create-element/ */

let intro = document.querySelector(".intro"); // Igual a document.getElementsByClassName('intro')[0];
let mostrar = document.createElement("object");
let titulo = document.createElement("H3");
let codigoGithub = document.createElement("a");

    function resultado() {      
        intro.appendChild(titulo);                                // intro.insertAdjacentElement("beforeEnd", titulo);
        titulo.appendChild(mostrar).className = ('mostrar');      // mostrar.setAttribute("class", "mostrar");       
        mostrar.insertAdjacentElement("afterEnd", codigoGithub);  //=>mostrar.appendChild        
        codigoGithub.title = "Abrir o codigo no Github em outra página";  // mostra o titulo ao posicionar mouse
        codigoGithub.target = "_blank";
        codigoGithub.rel = "noopener";
        codigoGithub.id = 'linkcodigo';
        function createButtons() {
            let buttonPrevious = document.createElement('button');        
                buttonPrevious.className = 'buttonResult';  
                buttonPrevious.textContent = 'Anterior';
                buttonPrevious.addEventListener("click", todasFunctions);
                codigoGithub.appendChild(buttonPrevious);               
            let buttonNext = document.createElement('button');                                              
                buttonNext.className = 'buttonResult';
                buttonNext.textContent = 'Próximo';
                buttonNext.addEventListener("click", todasFunctions);
                buttonPrevious.insertAdjacentElement("afterEnd", buttonNext); //Previous pai no Next   
                buttonPrevious.addEventListener("click", todasFunctions);
        }                      
        createButtons();
    }

// Calculo Batimentos
    let buttonBatimentos = document.getElementsByClassName('batimentos');
    for(const elementBatimentos of buttonBatimentos) {
        elementBatimentos.onclick = batimentos;
    }
function batimentos() {
    titulo.textContent = "Calculo de Batimentos \n";  
    let idade = prompt('Quantos anos voce tem ?');
    if (isNaN(idade)) {
        alert('ERRO : Digite apenas numeros.');
        console.log('Nao foi digitado um Numero.');
    }
    let diasdevida = idade * 365;   
    let calcBatimentos = '\n Idade: ' + idade + ' anos.\n' + '\n Seu Coração bateu: \n \n' 
                            + diasdevida * 24 * 60 * 80 + ' vezes em toda sua vida. \n';
    mostrar.textContent  = calcBatimentos + " \n"; 
    codigoGithub.innerHTML = '';
    codigoGithub.appendChild(document.createTextNode('Abrir codigo Batimentos em outra página \n \n'));
    codigoGithub.href = "https://github.com/improgram/casadocodigo/blob/master/Capitulo3/024Topico3.6.html \n";    
    resultado();
}

// Anos de Copa
    let buttonCopa = document.getElementsByClassName('copas');
    for(const elementCopas of buttonCopa) {
        elementCopas.onclick = anodeCopa;
    }
function anodeCopa () {
    titulo.textContent = 'Anos de Copa do Mundo \n';
    function checkWar(ano){       
        let houveGuerra = false;
            if (ano >= 1940 && ano <= 1946) {                  
                houveGuerra = true;
            }
        return houveGuerra;
    }
    if (typeof window.mostrar) {            
        let ano;
        let ultimaCopa = 2022;
        let copa = "\n Todas as Copas \n \n";

        for (ano = 1930; ano <= ultimaCopa; ano += 4) {
            if (checkWar(ano)) {          
                copa += 'Em ' + ano + ': nao realizado devido a Guerra. \n';                 
            } else if ( ano > 2018){
                mostrar.textContent = copa += 'Em ' + ano + ': Teremos Copa. \n';
            } else {
                mostrar.textContent = copa += 'Em ' + ano + ': Teve Copa. \n';
            }
        }
    } 
    codigoGithub.innerHTML = '';
    codigoGithub.appendChild(document.createTextNode('Abrir codigo Anos de copa no Github \n \n'));
    codigoGithub.href = "https://github.com/improgram/casadocodigo/blob/master/Capitulo5/036Topico5.3.html \n";       
    resultado();
} 
    
//Anos de Olimpiada
    let buttonOlimpiadas = document.getElementsByClassName('olimpiadas');
    for(const elementOlimpiadas of buttonOlimpiadas) {
        elementOlimpiadas.onclick = anodeOlimpiadas;
    }

    function anodeOlimpiadas() {
            titulo.textContent = 'Anos de Jogos Olimpicos \n';
        let ano;
        let olimpiadas;       
        if (typeof window.mostrar) {
            olimpiadas = '\n Todas as Olimpiadas \n \n';
        }       
        for (ano = 1896; ano <= 2024; ano += 4) {
            switch (ano) {               // Segunda guerra: 1940 && 1944
            case 1916:
                olimpiadas += 'Em ' + ano + ':  Primeira Guerra Mundial.\n';
                break;
            case 1940:
                olimpiadas += 'Em ' + ano + ': Segunda Guerra Mundial. \n';
                break;
            case 1944:
                olimpiadas += 'Em ' + ano + ': Segunda Guerra Mundial. \n';
                break;
            case 2020:
                olimpiadas += 'Em ' + ano + ': Covid (Adiada para 2021).\n';
                break;
            case 2024:
                mostrar.textContent = olimpiadas += 'Em ' + ano + ': Teremos Olimpiadas. \n'
                console.log('2024');               
                break;               
            default:
                mostrar.textContent = olimpiadas += 'Em ' + ano + ': Teve Olimpiadas. \n';             
            }
        }   
        codigoGithub.innerHTML = '';
        codigoGithub.appendChild(document.createTextNode('Abrir codigo Olimpiadas no gitHub \n \n'));
        codigoGithub.href = "https://github.com/improgram/casadocodigo/blob/master/Capitulo5/038Topico5.5.html \n";           
        resultado();   
    }    

//Tabuada
    let buttonTabuada = document.getElementsByClassName('tabuada');
    for(const elementTabuada of buttonTabuada) {
        elementTabuada.onclick = tabuada;
    }
    function tabuada () {
            titulo.textContent = 'Tabuada';
        let numero = parseInt(prompt('Tabuada de qual numero ?' ));
        let resposta = 'Numero escolhido: ' + numero + '\n' + '\n';        
            for(let count = 1; count <= 10; count++) {
                resposta += numero + " X " + count + " = " + numero*count + '\n';
            }
        let tabuada2 = document.createElement('button');
            tabuada2.textContent = 'Outro Numero';
            tabuada2.addEventListener("click", tabuada);
            tabuada2.className = 'buttonResult';
            mostrar.textContent = resposta + "\n";
            mostrar.appendChild(tabuada2);
            codigoGithub.innerHTML = '';
            codigoGithub.appendChild(document.createTextNode('Abrir o Codigo Tabuada no GitHub \n'));
            codigoGithub.href = "https://github.com/improgram/casadocodigo/blob/master/Capitulo5/039Topico5.6-Tabuada.html \n";           
        resultado();
    }

//Comparativo combustiveis
    let buttonCombustiveis = document.getElementsByClassName('combustiveis');
    for (const elementCombustiveis of buttonCombustiveis) {
        elementCombustiveis.onclick = combustiveis;
    }   
    function combustiveis (){
        titulo.textContent = 'Comparativo Alcool ou Gasolina';
        let tanqueCarro = 40;
        let kmcomAlcool;
        let kmcomGas = parseInt(prompt('Quantos kM Percorridos com Gasolina ?'));
        let consumoGasolina = kmcomGas / tanqueCarro;    
        let buttonComparativo = document.createElement('button');
            buttonComparativo.textContent = "Comparar com Alcool";
            buttonComparativo.addEventListener("click", comparaCombustivel);
            buttonComparativo.className = 'buttonResult';
        mostrar.textContent = '\n Com tanque de ' + tanqueCarro +  ' litros: \n' +
                                '\n' + kmcomGas + ' Km percorridos com Gasolina \n' +
                                'Foram: ' + (kmcomGas / tanqueCarro) + ' KM rodados por litro.\n \n';
        mostrar.insertAdjacentElement("beforeEnd", buttonComparativo);
        
        function comparaCombustivel () {
            kmcomAlcool = parseInt(prompt('Quantos kM Percorridos com Alcool ?'));
            let consumoAlcool = kmcomAlcool / tanqueCarro;           
            mostrar.textContent = '\n Com tanque de : ' + tanqueCarro + ' litros: \n' +
                                    '\n Consumo Gasolina: ' + consumoGasolina + ' km por litro.' +
                                    '\n Consumo Alcool: ' + consumoAlcool + ' km por litro.';            
            let buttonComparaValor = document.createElement('button');
                buttonComparaValor.innerText = "Comparar preço: \n  Gasolina e Alcool";
                buttonComparaValor.addEventListener("click", valorPorKm);
                buttonComparaValor.className = 'buttonResult';
            mostrar.insertAdjacentElement("beforeEnd", buttonComparaValor);

            function valorPorKm() {
                let precoGas = parseFloat(prompt('Digite o valor do litro da Gasolina com virgula.'));
                    precoGas.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
                let precoAlcool = parseFloat(prompt('Digite o valor do litro do Alcool com virgula.') );
                    precoAlcool.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
                mostrar.textContent = 'Preço por Km de Gasolina: R$ ' + (precoGas / consumoGasolina).toFixed(2) +
                                      '\n Preço por Km de Alcool: R$ ' + (precoAlcool / consumoAlcool).toFixed(2);
            }  
        } 
            codigoGithub.innerHTML = '';
            codigoGithub.appendChild(document.createTextNode(' Abrir Codigo combustiveis no GitHub \n'));
            codigoGithub.href = "https://github.com/improgram/casadocodigo/blob/master/Capitulo2/011Topico2.6_Opcao3.html \n";    
    resultado();
    }

//Media de Idade dos familiares 008Topico2.3
    let buttonIdade = document.getElementsByClassName('mediaIdade');
    for(const elementIdade of buttonIdade) {
        elementIdade.onclick = mediaIdade;
    }

    function mediaIdade(){
        titulo.textContent = 'Média de Idade dos familiares';
        let familiares = parseInt(prompt('Quantos familiares ?'));
        let somarIdades = 0;
        let numeroInicio = 1;
        while (numeroInicio <= familiares) {
            let idade = parseInt(prompt('Digite a idade do familiar'));         
            somarIdades = somarIdades + idade;
            numeroInicio++
        }
    let calculoIdade = somarIdades / familiares;
        mostrar.textContent = '\n Numero de familiares: \n' + familiares + '\n \n'
            + 'Media de idade dos familiares: \n' + Math.round(calculoIdade);
        codigoGithub.innerHTML = '';
        codigoGithub.appendChild(document.createTextNode('\n Abrir o Codigo Media de Idade no GitHub \n'));
        codigoGithub.href = "https://github.com/improgram/casadocodigo/blob/master/Capitulo5/042Topico5.9.html \n";       
    resultado();
}

//Acertar Numero pensado
    let buttonNumero = document.getElementsByClassName('adivinharNumero');
    for(const elementNumero of buttonNumero) {
        elementNumero.onclick = numeroPensado;
    }
                                            /* http://squids.com.br/editor/index.php?id=66 */
        /* https://medium.com/@davidsodrelins/criando-e-manipulando-itens-do-html-via-javascript-98158977984b */
    function numeroPensado() {                          
        titulo.textContent = 'Adivinhar Numero Pensado \n \n';       
        let segredo = Math.round(Math.random() * 9);
        let tentativa = 1;
        console.log('Tentativa : ' + tentativa + ' TESTE 1');
        let buttonAdicionar = document.createElement('button');                     // cria botao  
            buttonAdicionar.appendChild(document.createTextNode('Adicionar'));      // Adiciona texto ao botao
            buttonAdicionar.setAttribute('id','buttonAdicionar');
        let inputNumber = document.createElement('input');                          // Cria input
            inputNumber.setAttribute('placeholder', 'Digite 5 numeros de 1 a 9');   // Atributo placeholder
            inputNumber.setAttribute('id', 'inputNumber');                          // Atributo id adicionado
            inputNumber.setAttribute('type', 'number');                             // Atributo number
            inputNumber.setAttribute('max', '10');                                  // Atributo max 10 carac
        let listElement = document.createElement('ul');                             // Cria lista uL
            listElement.setAttribute('id', 'listElement');                          // Atributo id adicionado
            titulo.appendChild(inputNumber);                                        // inputNumber filho do titulo
            titulo.appendChild(buttonAdicionar);                                    // button filho do titulo
            //titulo.insertAdjacentElement('beforeEnd', buttonAdicionar);
                                                
        if (typeof window.mostrar) {
            buttonAdicionar.insertAdjacentText('afterEnd' ,'\n Numeros Digitados : \n');
        }                      
            
        while(tentativa <= 5) {
                buttonAdicionar.onclick = function() {
                    console.log('Tentativa : ' + tentativa + 'TESTE 2');
                    console.log('Segredo : ' + segredo);                        
                    //document.getElementById("buttonAdicionar").disabled = true;                       
                addNumber();   
                }
            function addNumber () {
                console.log('Tentativa : ' + tentativa + ' TESTE 3 ');
                let numeroNovo = inputNumber.value;
                let numeroLista = document.createElement('li');
                numeroLista.appendChild(document.createTextNode(numeroNovo));
                listElement.appendChild(numeroLista);                       // ul pai do numeroLista(li)
                inputNumber.value = "";                                     // Limpa conteudo do input
                mostrar.insertAdjacentElement('afterBegin', listElement);   //Dentro do element mostrar,antes 1° filho
                comparaNumero();             
            }
            function comparaNumero (){
                let resultado = document.createElement('resultado');
                    resultado.setAttribute('id', 'comparaNumero');
                    resultado.appendChild(document.createTextNode('Resultado : \n \n \n'));
                    mostrar.insertAdjacentElement('afterEnd', resultado);

                if(isNaN(inputNumber.value)) {
                    console.log('Tentativa : ' + tentativa + ' TESTE 4 ');
                    alert('Voce digitou : ' + inputNumber.value + '\n Digite apenas numeros.');
                    mostrar.textContent = 'Voce digitou : ' + inputNumber.value + '\n Digite apenas numeros.';
                } else if(inputNumber.value == segredo) {
                    console.log('Tentativa : ' + tentativa + ' TESTE 5 ');
                    console.log('Voce ACERTOU !! ')
                    mostrar.textContent = inputNumber.value + ' foi o seu palpite ! \n \n' + 'ACERTOU ! \n \n o numero é : \n' + segredo + '\n';                   
                    //break;
                } else if(inputNumber.value > segredo) {
                    console.log(' Numero é MAIOR que o Pensado.');
                    mostrar.textContent = 'Palpite foi maior que o numero pensado \n';                    
                } else if(inputNumber.value < segredo) {
                    console.log('Numero é MENOR que o pensado');
                    mostrar.textContent = 'Palpite foi menor que o numero pensado \n';  
                } else {                                                //(tentativa > 5)
                    console.log(' As 5 Chances foram ESGOTADAS.');
                    mostrar.textContent = '\n' + '\n AS 5 CHANCES FORAM ESGOTADAS ! \n';
                    mostrar.classList.add("batimentos");
                }
            }                    	        
            
            console.log('Tentativa : ' + tentativa + ' TESTE 6 ');
            tentativa++;
            console.log('Tentativa : ' + tentativa + ' TESTE  7 ');
            mostrar.textContent = inputNumber.value;  // necessario
            console.error('Seu palpite foi : ' + tentativa++ + ' Terminou' + inputNumber.value);
        } 
        codigoGithub.innerHTML = '';
        codigoGithub.appendChild(document.createTextNode('Abrir o Codigo Numero Pensado no GitHub \n'));
        codigoGithub.href = "https://github.com/improgram/casadocodigo/blob/master/Capitulo5/044Topico5.11_Exerci1_2_3.html \n";    
        resultado();
    }

//Linhas e Colunas
    let buttonlinhaColuna = document.getElementsByClassName('linhaColuna');
    for(const elementLinhaColuna of buttonlinhaColuna) {
        elementLinhaColuna.onclick = linhaComColuna;
    }

    function linhaComColuna(){
        titulo.textContent = 'Linha e Colunas';

        //mostrar.textContent = ;
        let codLinhasColunas = document.createTextNode('\n Abrir o Codigo Linhas e Colunas no GitHub');
            codigoGithub.innetHTML = '\n Abrir o Codigo no GitHub';
            codigoGithub.href = "https://github.com/improgram/casadocodigo/blob/master/Capitulo5/045Topico5.12.html \n";
            codigoGithub.appendChild(codLinhasColunas);
    resultado();    
}


/* PAREI AQUI Mega-Sena


let buttonMegaSena = document.getElementById('megaSena');
    buttonMegaSena.addEventListener("click", megasena);

    function megasena(){
        titulo.textContent = '';
        console.log('teste Mega Sena');
        let codMegasena = document.createElement('a');
            codigoGithub.text = '\n Abrir o Codigo no GitHub';
            codigoGithub.setAttribute('href', "https://github.com/improgram/casadocodigo/blob/master/Capitulo6/051Topico6.4_Opcao2.html \n");
            codigoGithub.setAttribute('target', "_blank");        

            buttonMegaSena.insertAdjacentElement("before", codMegasena);
    resultado();
    }

//Introducao Canvas
let buttonCanvas = document.getElementById('canvas');
    buttonCanvas.addEventListener("click", introCanvas);

    function introCanvas() {
        
        let codIntroCanvas = document.createElement('a');
            codigoGithub.text = '\n Abrir o Codigo no GitHub';
            codigoGithub.setAttribute('href', "https://github.com/improgram/casadocodigo/blob/master/Capitulo7/055Topico7.2.html \n");
            codigoGithub.setAttribute('target', "_blank");

            buttonCanvas.insertAdjacentElement("before", codIntroCanvas);
    resultado();
    }

//Tabuleiro Damas
let buttonDamas = document.getElementById('damas');
    buttonDamas.addEventListener("click", damas);

    function damas(){
        console.log('teste damas');
        let codDamas = document.createElement('a');
            codigoGithub.text = '\n Abrir o Codigo no GitHub';
            codigoGithub.setAttribute('href', "https://github.com/improgram/casadocodigo/blob/master/Capitulo7/056Topico7.3_Tabuleiro.html \n");
            codigoGithub.setAttribute('target', "_blank");

        buttonDamas.insertAdjacentElement("before", codDamas);
    resultado();
    }

//Bandeiras com Canvas
let buttonBandeiras = document.getElementById('bandeiras');
    buttonBandeiras.addEventListener("click", bandeiras);

    function bandeiras() {
        let codBandeiras = document.createElement('a');
            codigoGithub.text = '\n Abrir o Codigo no GitHub';
            codigoGithub.setAttribute('href', "https://github.com/improgram/casadocodigo/blob/master/Capitulo7/057Topico7.4_Bandeiras.html \n");
            codBandeiras.setAttribute('target', "_blank");

            buttonBandeiras.insertAdjacentElement("before", codBandeiras);
    resultado();
    }

//Canvas com Condicionais
let buttonCondicionais = document.getElementById('canvasCondicionais');
    buttonCondicionais.addEventListener("click", canvasCondicionais);

    function canvasCondicionais(){
        console.log('canvas condicionais')

    let codCondicionais = document.createElement('a');
        codigoGithub.text = '\n Abrir o Codigo no GitHub';
        codigoGithub.setAttribute('href', "https://github.com/improgram/casadocodigo/blob/master/Capitulo7/062Topico7.6_Exercicio4.html \n");
        codigoGithub.setAttribute('target', "_blank");

    buttonCondicionais.insertAdjacentElement("before", codCondicionais);
    resultado();
    }

//Canvas Ordem crescente
let buttonCrescente = document.getElementById('canvasCrescente');
    buttonCrescente.addEventListener("click", canvasCrescente);

    function canvasCrescente(){
        console.log('canvas crescente')
    let codCanvasCrescente = document.createElement('a');
        codigoGithub.text = '\n Abrir o Codigo no GitHub';
        codigoGithub.setAttribute('href', "https://github.com/improgram/casadocodigo/blob/master/Capitulo7/063Topico7.7.html \n");
        codigoGithub.setAttribute('target', "_blank");

    buttonCrescente.insertAdjacentElement("before", codCanvasCrescente);
    resultado();    
    }

//Canvas Parabola
let buttonParabola = document.getElementById('canvasParabola');
    buttonParabola.addEventListener("click", canvasParabola)

    function canvasParabola(){
    console.log('canvas parabola')

    let codParabola = document.createElement('a');
        codigoGithub.text = '\n Abrir o Codigo no GitHub';
        codigoGithub.setAttribute('href', "https://github.com/improgram/casadocodigo/blob/master/Capitulo7/065Topico7.9_Parabola.html \n");
        codigoGithub.setAttribute('target', "_blank");

    buttonParabola.insertAdjacentElement("before", codParabola);
    resultado();
    }

//Calculo do Seno com Canvas
let buttonSeno = document.getElementById('seno');
    buttonSeno.addEventListener("click", seno)

    function seno(){
        console.log('seno');

    let codSeno = document.createElement('a');
        codigoGithub.text = '\n Abrir o Codigo no GitHub';
        codigoGithub.setAttribute('href', "https://github.com/improgram/casadocodigo/blob/master/Capitulo7/069Topico7.13_Seno.html \n");
        codigoGithub.setAttribute('target', "_blank");

    buttonSeno.insertAdjacentElement("before", codSeno);
    resultado();
    }

// Detecta cliques:
let buttonClique = document.getElementById('cliques');
    buttonClique.addEventListener("click", detectaClique)

    function detectaClique(){
        console.log('test detecta clique')

    let codClique = document.createElement('a');
        codigoGithub.text = '\n Abrir o Codigo no GitHub';
        codigoGithub.setAttribute('href', "https://github.com/improgram/casadocodigo/blob/master/Capitulo8/070Topico8.1_Com_Alert.html \n");
        codigoGithub.setAttribute('target', "_blank");

    buttonClique.insertAdjacentElement("before", codClique);
    resultado();
    }

// Detecta botao Mouse:
let buttonMouse = document.getElementById('botaoMouse');
    buttonMouse.addEventListener("click", mouse)

    function mouse(){
        console.log('test mouse')

    let codMouse = document.createElement('a');
        codigoGithub.text = '\n Abrir o Codigo no GitHub';
        codigoGithub.setAttribute('href', "https://github.com/improgram/casadocodigo/blob/master/Capitulo8/071Topico8.2_Exercicio1.html \n");
        codigoGithub.setAttribute('target', "_blank");

    buttonMouse.insertAdjacentElement("before", codMouse);
    resultado();
    }

// Paint com Canvas:
let buttonPaint = document.getElementById('paint');
    buttonPaint.addEventListener("click", paint)

    function paint(){
        console.log('test paint')

    let codPaint = document.createElement('a');
        codigoGithub.text = '\n Abrir o Codigo no GitHub';
        codigoGithub.setAttribute('href', "https://github.com/improgram/casadocodigo/blob/master/Capitulo8/073Topico8.2_Paint_Canvas_Exerci3.html \n");
        codigoGithub.setAttribute('target', "_blank");

    buttonPaint.insertAdjacentElement("before", codPaint);
    resultado();
    }

// CanvasaAnimacoes:
let buttonAnimacoes = document.getElementById('animacoes');
    buttonAnimacoes.addEventListener("click", CanvasAnimacoes)

    function CanvasAnimacoes(){
        console.log('test Canvas Animacoes')

    let codAnimacoes = document.createElement('a');
        codigoGithub.text = '\n Abrir o Codigo no GitHub';
        codigoGithub.setAttribute('href', "https://github.com/improgram/casadocodigo/blob/master/Capitulo8/075Topico8.4.html \n");
        codigoGithub.setAttribute('target', "_blank");

    buttonAnimacoes.insertAdjacentElement("before", codAnimacoes);
    resultado();
    }

// CODIGO Tiro ao alvo:
let buttonAlvo = document.getElementById('tiroAlvo');
    buttonAlvo.addEventListener("click", tiroAlvo)

    function tiroAlvo(){
        console.log('test tiro Alvo')

    let codTiroAlvo = document.createElement('a');
        codigoGithub.text = '\n Abrir o Codigo no GitHub';
        codigoGithub.setAttribute('href', "https://github.com/improgram/casadocodigo/blob/master/Capitulo8/079Topico8.5_opcao2.html \n");
        codigoGithub.setAttribute('target', "_blank");

    buttonAlvo.insertAdjacentElement("before", codTiroAlvo);
    resultado();
    }

// CODIGO Formulario com Eventos:
let buttonFormEventos = document.getElementById('formEventos');
    buttonFormEventos.addEventListener("click", formEventos)

    function formEventos(){
        console.log('test formEventos')

    let codFormEventos = document.createElement('a');
        codigoGithub.text = '\n Abrir o Codigo no GitHub';
        codigoGithub.setAttribute('href', "https://github.com/improgram/casadocodigo/blob/master/Capitulo8/080Topico9.1.html \n");
        codigoGithub.setAttribute('target', "_blank");

    buttonFormEventos.insertAdjacentElement("before", codFormEventos);
    resultado();
    }

//Formulario com Array:
let buttonFormArray = document.getElementById('formArray');
    buttonFormArray.addEventListener("click", formArray)

    function formArray(){
        console.log('test form Array');

    let codFormArray = document.createElement('a');
        codigoGithub.text = '\n Abrir o Codigo no GitHub';
        codigoGithub.setAttribute('href', "https://github.com/improgram/casadocodigo/blob/master/Capitulo8/081Topico9.1_formulario_array.html \n");
        codigoGithub.setAttribute('target', "_blank");

    buttonFormArray.insertAdjacentElement("before", codFormArray);
    resultado();
    }

// Codigo Objetos:
let buttonObjetos = document.getElementById('objetos');
    buttonObjetos.addEventListener("click", objetos)

    function objetos(){
        console.log('test objetos')

    let codObjetos = document.createElement('a');
        codigoGithub.text = '\n Abrir o Codigo no GitHub';
        codigoGithub.setAttribute('href', "https://github.com/improgram/casadocodigo/blob/master/Capitulo8/083_Arrays.html \n");
        codigoGithub.setAttribute('target', "_blank");

    buttonObjetos.insertAdjacentElement("before", codObjetos);
    resultado();
    }

// CODIGO DOM:
let buttonDom = document.getElementById('dom');
    buttonDom.addEventListener("click", dom);

    function dom(){
        console.log('test dom')

    let codDom = document.createElement('a');
        codigoGithub.text = '\n Abrir o Codigo no GitHub';
        codigoGithub.setAttribute('href', "https://github.com/improgram/casadocodigo/blob/master/Capitulo8/084Topico9.2_codigoGithubs.html \n");
        codigoGithub.setAttribute('target', "_blank");

    buttonDom.insertAdjacentElement("before", codDom);
    resultado();
    }

// CODIGO IMC:
let buttonImc = document.getElementById('imc');
    buttonImc.addEventListener("click", imc);

    function imc(){
        console.log('test imc')

    let codImc = document.createElement('a');
        codigoGithub.text = '\n Abrir o Codigo no GitHub';
        codigoGithub.setAttribute('href', "https://github.com/improgram/casadocodigo/blob/master/Capitulo8/085Topico9.3_IMC.html \n");
        codigoGithub.setAttribute('target', "_blank");

    buttonImc.insertAdjacentElement("before", codImc);
    resultado();
    }

    */