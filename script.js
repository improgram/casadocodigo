function todasFunctions() {  
    //let tasks = [batimentos(), anodeCopa(), anodeOlimpiadas() ];
    //https://www.devmedia.com.br/javascript-foreach-executando-uma-funcao-para-cada-elemento-de-um-array/39808
        console.log('teste todasFunctions');
    }
//innerText deve usar \n para pular a linha. 
//O textContent e innerHTML nao pula a linha
//beforeBegin = Antes do element
//afterBegin = Dentro do element e antes do primeiro filho
//beforeEnd = Dentro do element e apos seu ultimo filho
//afterEnd = Após o element
//insertAdjacentElement () inserir um elemento que já está no Dom.
//insertAdjacentHtml ()    inserir o código html.

let intro = document.querySelector(".intro"); // Igual a document.getElementsByClassName('intro')[0];
let mostrar = document.createElement("object");
let codigoGithub = document.createElement("a");
    codigoGithub.title = "Abrir o codigo no Github em outra página";  // mostra o titulo ao posicionar mouse
    codigoGithub.target = "_blank";
    codigoGithub.rel = "noopener";
    codigoGithub.id = 'linkcodigo';

    function resultado() {
        intro.insertAdjacentElement("beforeEnd", mostrar); /* intro.appendChild(mostrar); */
        mostrar.className = 'mostrar'; // => mostrar.setAttribute("class", "mostrar");
        mostrar.insertAdjacentElement("afterEnd", codigoGithub); //=>mostrar.append...
        //console.log('Prefiro me arrepender da incerteza do que reviver a desgraça \n');

        function createButtons() {
            let botoesCriados = document.querySelector(".intro > .buttonResult"); //child combinator
            let buttonPrevious = document.createElement('button');        
                buttonPrevious.className = 'buttonResult';    
                if(!botoesCriados){       //intro não é pai do buttonResult entao cria buttons
                    console.log('Botao criado');
                    buttonPrevious.textContent = 'Anterior';
                    buttonPrevious.addEventListener("click", todasFunctions);
                let buttonNext = document.createElement('button');                                              
                    buttonNext.className = 'buttonResult';
                    buttonNext.textContent = 'Próximo';
                    codigoGithub.insertAdjacentElement("afterEnd", buttonPrevious); //=>codigoGithub pai
                    buttonPrevious.insertAdjacentElement("afterEnd", buttonNext); //Previous pai no Next                   
                    buttonNext.addEventListener("click", todasFunctions);                 
                } else {                   
                    console.error('Botao Ja Existe'); //Apos clicar o intro virou pai do buttonResult      
                }
        }                      
        createButtons();
    }
    
//https://stackoverflow.com/questions/42277092/javascript-function-on-multiple-buttons  
//https://stackoverflow.com/questions/14615712/toggle-classname-onclick-javascript
/*    function botaoClicado() {
        let botaoRepetido = 1  
        let but = document.querySelectorAll(".but").onclick = function botaoClicado(){        };
            console.log('FUNCTION REPETIDA')        }   
*/

// Calculo Batimentos
let buttonBatimentos = document.getElementsByClassName('batimentos');
    for(const elementBatimentos of buttonBatimentos) {
        elementBatimentos.onclick = batimentos;
    }

function batimentos() {
    let idade = prompt('Quantos anos voce tem ?');
        if (isNaN(idade)) {
            alert('ERRO : Digite apenas numeros.');
            console.log('Nao foi digitado um Numero.');
        }
    let diasdevida = idade * 365;   
    let calcBatimentos = '\n Idade: ' + idade + ' anos.\n' 
        + '\n Seu Coração bateu: \n \n' 
        + diasdevida * 24 * 60 * 80 + ' vezes em toda sua vida. \n';
    mostrar.textContent  = calcBatimentos + " \n";
    let codBatimentos = document.createTextNode('Abrir codigo Batimentos em outra página \n \n');
        codigoGithub.innerHTML = '';
        codigoGithub.href = "https://github.com/improgram/casadocodigo/blob/master/Capitulo3/024Topico3.6.html";
        codigoGithub.appendChild(codBatimentos);
    resultado();
}

// Anos de Copa
let buttonCopa = document.getElementsByClassName('copas');
    for(const elementCopas of buttonCopa) {
        elementCopas.onclick = anodeCopa;
    }

function checkWar(ano){       
    let houveGuerra = false;
        if (ano >= 1940 && ano <= 1946) {                  
            houveGuerra = true;
        }
    return houveGuerra;
}

function anodeCopa () {
    let ano;
    let copa;
    let ultimaCopa = 2022;
    /* https://acervolima.com/como-criar-e-aplicar-dinamicamente-a-classe-css-em-javascript/ */
    if (typeof window.mostrar) {
        /*copa.classList.add = ("buttonResult");*/
        copa = '\n Todas as Copas \n \n ';
    }

    for (ano = 1930; ano <= ultimaCopa; ano += 4) {
        if (checkWar(ano)) {          
            copa += 'Em ' + ano + ': nao realizado devido a Guerra. \n';                 
        } else if ( ano > 2018){
            mostrar.textContent = copa += 'Em ' + ano + ': Teremos Copa em 2022. \n';
        } else {
            mostrar.textContent = copa += 'Em ' + ano + ': Teve Copa. \n';
        }
    }

    let codCopas = document.createTextNode('Abrir codigo Anos de copa no Github \n \n');
        codigoGithub.innerHTML = ''; //Limpa o valor antigo (test OK)
        codigoGithub.href = "https://github.com/improgram/casadocodigo/blob/master/Capitulo5/036Topico5.3.html";
        codigoGithub.appendChild(codCopas);
    resultado();
} 
    
//Anos de Olimpiada
let buttonOlimpiadas = document.getElementsByClassName('olimpiadas');
    for(const elementOlimpiadas of buttonOlimpiadas) {
        elementOlimpiadas.onclick = anodeOlimpiadas;
    }

    function anodeOlimpiadas() {
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
                mostrar.textContent = olimpiadas += 'Em ' + ano + ': Teremos Olimpiadas em 2024. \n'
                console.log('2024');               
                break;               
            default:
                mostrar.textContent = olimpiadas += 'Em ' + ano + ': Teve Olimpiadas. \n';             
            }
        }   
        let codOlimpiadas = document.createTextNode('Abrir codigo Olimpiadas no gitHub \n \n');
            codigoGithub.innerHTML = '';    
            codigoGithub.href = "https://github.com/improgram/casadocodigo/blob/master/Capitulo5/038Topico5.5.html";
            codigoGithub.appendChild(codOlimpiadas);
        resultado();   
    }    

//Tabuada
let buttonTabuada = document.getElementsByClassName('tabuada');
    for(const elementTabuada of buttonTabuada) {
        elementTabuada.onclick = tabuada;
    }

    function tabuada (){
        let tabuada2 = document.createElement('button');
            tabuada2.textContent = 'Outro Numero';
            tabuada2.addEventListener("click", tabuada);
            tabuada2.className = 'buttonResult';
        let numero = parseInt(prompt('Tabuada de qual numero ?' ));

        let resposta = 'Numero escolhido: ' + numero + '\n' + '\n';        
            for(let count = 1; count <= 10; count++) {
                resposta += numero + " X " + count + " = " + numero*count + '\n';
            }

            mostrar.textContent = resposta;
            mostrar.appendChild(tabuada2);

        let codTabuada = document.createTextNode('\n Abrir o Codigo Tabuada no GitHub');
            codigoGithub.innerHTML = '';
            codigoGithub.href = "https://github.com/improgram/casadocodigo/blob/master/Capitulo5/039Topico5.6-Tabuada.html";
            codigoGithub.appendChild(codTabuada);
        resultado();
    }

//Comparativo combustiveis
let buttonCombustiveis = document.getElementsByClassName('combustiveis');
    for (const elementCombustiveis of buttonCombustiveis) {
        elementCombustiveis.onclick = combustiveis;
    }   

    function combustiveis (){
        let tanqueCarro = 40;
        let kmcomAlcool;
        let kmcomGas = parseInt(prompt('Quantos kM Percorridos com Gasolina ?'));
        let consumoGasolina = kmcomGas / tanqueCarro;
    
        let buttonComparativo = document.createElement('button');
            buttonComparativo.innerText = "Comparar com Alcool";
            buttonComparativo.addEventListener("click", comparaCombustivel);
            buttonComparativo.className = 'buttonResult';

        mostrar.textContent = '\n Com tanque de ' + tanqueCarro +  ' litros: \n' +
                                '\n' + kmcomGas + ' Km percorridos com Gasolina \n' +
                                'Foram: ' + (kmcomGas / tanqueCarro) + ' KM rodados por litro.\n \n';

        mostrar.appendChild(buttonComparativo);    
        
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

            mostrar.appendChild(buttonComparaValor);

            function valorPorKm() { //https://pt.stackoverflow.com/questions/27919/como-verificar-se-um-n%C3%BAmero-%C3%A9-decimal
                let precoGas = parseFloat(prompt('Digite o valor do litro da Gasolina.'));
                    precoGas.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
                let precoAlcool = parseFloat(prompt('Digite o valor do litro do Alcool.') );
                    precoAlcool.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
                mostrar.textContent = 'Preço por Km de Gasolina: R$ ' + (precoGas / consumoGasolina).toFixed(2) +
                                      '\n Preço por Km de Alcool: R$ ' + (precoAlcool / consumoAlcool).toFixed(2);
            }  
        }     

        let codCombustiveis = document.createTextNode('\n Abrir o Codigo no GitHub');
            codigoGithub.innerHTML = '';
            codigoGithub.href = "https://github.com/improgram/casadocodigo/blob/master/Capitulo2/011Topico2.6_Opcao3.html";
            codigoGithub.appendChild(codCombustiveis);    
    resultado();
    }

//Media de Idade dos familiares 008Topico2.3
let buttonIdade = document.getElementsByClassName('mediaIdade');
    for(const elementIdade of buttonIdade) {
        elementIdade.onclick = mediaIdade;
    }

    function mediaIdade(){
        let familiares = parseInt(prompt('Quantos familiares ?'));
        let somarIdades = 0;
        let numeroInicio = 1;
            while (numeroInicio <= familiares) {
                let idade = parseInt(prompt('Digite a idade do familiar'));         
                somarIdades = somarIdades + idade;
                numeroInicio++
            }

    let calculoIdade = somarIdades / familiares;
        mostrar.textContent = '\n Numero de familiares: ' + familiares + '\n'
            + 'Media de idade dos familiares: ' + Math.round(calculoIdade);

    let codIdade = document.createTextNode('\n Abrir o Codigo Media de Idade no GitHub');
        codigoGithub.innerHTML = '';
        codigoGithub.href = "https://github.com/improgram/casadocodigo/blob/master/Capitulo5/042Topico5.9.html";
        codigoGithub.appendChild(codIdade);
    resultado();
}

//Acertar Numero pensado
let buttonNumero = document.getElementsByClassName('adivinharNumero');
    for(const elementNumero of buttonNumero) {
        elementNumero.onclick = numeroPensado;
    }

    function numeroPensado() {
        //mostrar.textContent = ;
    let codNumero = document.createTextNode('\n Abrir o Codigo Numero Pensado no GitHub');
        codigoGithub.innerHTML = '';
        codigoGithub.href = "https://github.com/improgram/casadocodigo/blob/master/Capitulo5/044Topico5.11_Exerci1_2_3.html";
        codigoGithub.appendChild(codNumero);       
    resultado();
    }

//Linhas e Colunas
let buttonlinhaColuna = document.getElementsByClassName('linhaColuna');
    for(const elementLinhaColuna of buttonlinhaColuna) {
        elementLinhaColuna.onclick = linhaComColuna;
    }

    function linhaComColuna(){
        //mostrar.textContent = ;
        let codLinhasColunas = document.createTextNode('\n Abrir o Codigo Linhas e Colunas no GitHub');
            codigoGithub.innetHTML = '\n Abrir o Codigo no GitHub';
            codigoGithub.href = "https://github.com/improgram/casadocodigo/blob/master/Capitulo5/045Topico5.12.html";
            codigoGithub.appendChild(codLinhasColunas);
    resultado();    
}

// PAREI AQUI
/*

//Mega-Sena
let buttonMegaSena = document.getElementById('megaSena');
    buttonMegaSena.addEventListener("click", megasena);

    function megasena(){
        console.log('teste Mega Sena');
        let codMegasena = document.createElement('a');
            codigoGithub.text = '\n Abrir o Codigo no GitHub';
            codigoGithub.setAttribute('href', "https://github.com/improgram/casadocodigo/blob/master/Capitulo6/051Topico6.4_Opcao2.html");
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
            codigoGithub.setAttribute('href', "https://github.com/improgram/casadocodigo/blob/master/Capitulo7/055Topico7.2.html");
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
            codigoGithub.setAttribute('href', "https://github.com/improgram/casadocodigo/blob/master/Capitulo7/056Topico7.3_Tabuleiro.html");
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
            codigoGithub.setAttribute('href', "https://github.com/improgram/casadocodigo/blob/master/Capitulo7/057Topico7.4_Bandeiras.html");
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
        codigoGithub.setAttribute('href', "https://github.com/improgram/casadocodigo/blob/master/Capitulo7/062Topico7.6_Exercicio4.html");
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
        codigoGithub.setAttribute('href', "https://github.com/improgram/casadocodigo/blob/master/Capitulo7/063Topico7.7.html");
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
        codigoGithub.setAttribute('href', "https://github.com/improgram/casadocodigo/blob/master/Capitulo7/065Topico7.9_Parabola.html");
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
        codigoGithub.setAttribute('href', "https://github.com/improgram/casadocodigo/blob/master/Capitulo7/069Topico7.13_Seno.html");
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
        codigoGithub.setAttribute('href', "https://github.com/improgram/casadocodigo/blob/master/Capitulo8/070Topico8.1_Com_Alert.html");
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
        codigoGithub.setAttribute('href', "https://github.com/improgram/casadocodigo/blob/master/Capitulo8/071Topico8.2_Exercicio1.html");
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
        codigoGithub.setAttribute('href', "https://github.com/improgram/casadocodigo/blob/master/Capitulo8/073Topico8.2_Paint_Canvas_Exerci3.html");
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
        codigoGithub.setAttribute('href', "https://github.com/improgram/casadocodigo/blob/master/Capitulo8/075Topico8.4.html");
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
        codigoGithub.setAttribute('href', "https://github.com/improgram/casadocodigo/blob/master/Capitulo8/079Topico8.5_opcao2.html");
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
        codigoGithub.setAttribute('href', "https://github.com/improgram/casadocodigo/blob/master/Capitulo8/080Topico9.1.html");
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
        codigoGithub.setAttribute('href', "https://github.com/improgram/casadocodigo/blob/master/Capitulo8/081Topico9.1_formulario_array.html");
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
        codigoGithub.setAttribute('href', "https://github.com/improgram/casadocodigo/blob/master/Capitulo8/083_Arrays.html");
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
        codigoGithub.setAttribute('href', "https://github.com/improgram/casadocodigo/blob/master/Capitulo8/084Topico9.2_codigoGithubs.html");
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
        codigoGithub.setAttribute('href', "https://github.com/improgram/casadocodigo/blob/master/Capitulo8/085Topico9.3_IMC.html");
        codigoGithub.setAttribute('target', "_blank");

    buttonImc.insertAdjacentElement("before", codImc);
    resultado();
    }
*/