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
/* https://medium.com/@caualoewen1/manipulando-a-dom-usando-javascript-para-p%C3%A1ginas-mais-din%C3%A2micas-328a467b4fb */
/* https://www.w3schools.com/jsref/dom_obj_all.asp */               // Atributos
/* http://devfuria.com.br/javascript/dom-create-element/ */

let intro = document.querySelector('.intro'); // Igual a document.getElementsByClassName('intro')[0];
let mostrar = document.createElement('object');
let titulo = document.createElement('H3');
let codigoGithub = document.createElement('a');

    function resultado() {      
        intro.appendChild(titulo);                                // intro.insertAdjacentElement("beforeEnd", titulo);
        titulo.appendChild(mostrar).className = ('mostrar');      // mostrar.setAttribute("class", "mostrar");       
        mostrar.insertAdjacentElement('afterEnd', codigoGithub);       
        codigoGithub.title = 'Abrir o codigo no Github em outra página';  // mostra o titulo ao posicionar mouse
        codigoGithub.target = '_blank';
        codigoGithub.rel = "noopener";
        codigoGithub.id = 'linkcodigo';
        function createButtons() {
            let buttonPrevious = document.createElement('button'); 
                buttonPrevious.className = 'buttonResult';  
                buttonPrevious.textContent = 'Anterior';
                buttonPrevious.addEventListener('click', todasFunctions);
                codigoGithub.appendChild(buttonPrevious);               
            let buttonNext = document.createElement('button');                                              
                buttonNext.className = 'buttonResult';
                buttonNext.textContent = 'Próximo';
                buttonNext.addEventListener('click', todasFunctions);
                buttonPrevious.insertAdjacentElement('afterEnd', buttonNext); //Previous pai no Next   
                buttonPrevious.addEventListener('click', todasFunctions);
        }                      
        createButtons();
        document.getElementsByClassName('mostrar')[0].focus();      // VALIDAR
    }

// Calculo Batimentos
    let buttonBatimentos = document.getElementsByClassName('batimentos');
    for(const elementBatimentos of buttonBatimentos) {
        elementBatimentos.onclick = batimentos;
    }
function batimentos() {
    titulo.textContent = 'Calculo de Batimentos \n';
    let idade = prompt('Quantos anos voce tem ?');
    if (isNaN(idade)) {
        alert('ERRO : Digite apenas numeros.');
        console.log('Nao foi digitado um Numero.');
    }
    let diasdevida = idade * 365;   
    let calcBatimentos = '\n Idade: ' + idade + ' anos.\n' + '\n Seu Coração bateu: \n \n' 
                            + diasdevida * 24 * 60 * 80 + ' vezes em toda sua vida. \n';
    mostrar.textContent  = calcBatimentos + ' \n';
    codigoGithub.innerHTML = '';
    codigoGithub.appendChild(document.createTextNode('Abrir codigo Batimentos em outra página \n \n'));
    codigoGithub.href = 'https://github.com/improgram/casadocodigo/blob/master/Capitulo3/024Topico3.6.html \n';
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
            let ano;
            let ultimaCopa = 2026;
            let copa = '\n Todas as Copas \n \n';
            for (ano = 1930; ano <= ultimaCopa; ano += 4) {
                if (checkWar(ano)) {          
                    copa += 'Em ' + ano + ': nao realizado devido a Guerra. \n';                 
                } else if ( ano > 2022) {
                    mostrar.textContent = copa += 'Em ' + ano + ': Teremos Copa. \n';
                } else {
                    mostrar.textContent = copa += 'Em ' + ano + ': Teve Copa. \n';
                }
            }
    codigoGithub.innerHTML = '';
    codigoGithub.appendChild(document.createTextNode('Abrir codigo Anos de copa no Github \n \n'));
    codigoGithub.href = 'https://github.com/improgram/casadocodigo/blob/master/Capitulo5/036Topico5.3.html \n';
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
        codigoGithub.href = 'https://github.com/improgram/casadocodigo/blob/master/Capitulo5/038Topico5.5.html \n';
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
            for (let count = 1; count <= 10; count++ ) {
                resposta += numero + ' X ' + count + ' = ' + numero*count + '\n';
            }
        let tabuada2 = document.createElement('button');
            tabuada2.textContent = 'Outro Numero';
            tabuada2.addEventListener('click', tabuada);
            tabuada2.className = 'buttonResult';
            mostrar.textContent = resposta + '\n';
            mostrar.appendChild(tabuada2);
            codigoGithub.innerHTML = '';
            codigoGithub.appendChild(document.createTextNode('Abrir o Codigo Tabuada no GitHub \n'));
            codigoGithub.href = 'https://github.com/improgram/casadocodigo/blob/master/Capitulo5/039Topico5.6-Tabuada.html \n';
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
            buttonComparativo.textContent = 'Comparar com Alcool';
            buttonComparativo.addEventListener('click', comparaCombustivel);
            buttonComparativo.className = 'buttonResult';
        mostrar.textContent = '\n Com tanque de ' + tanqueCarro +  ' litros: \n' +
                                '\n' + kmcomGas + ' Km percorridos com Gasolina \n' +
                                'Foram: ' + (kmcomGas / tanqueCarro) + ' KM rodados por litro.\n \n';
        mostrar.insertAdjacentElement('beforeEnd', buttonComparativo);
        
        function comparaCombustivel () {
            kmcomAlcool = parseInt(prompt('Quantos kM Percorridos com Alcool ?'));
            let consumoAlcool = kmcomAlcool / tanqueCarro;           
            mostrar.textContent = '\n Com tanque de : ' + tanqueCarro + ' litros: \n' +
                                    '\n Consumo Gasolina: ' + consumoGasolina + ' km por litro.' +
                                    '\n Consumo Alcool: ' + consumoAlcool + ' km por litro.';            
            let buttonComparaValor = document.createElement('button');
                buttonComparaValor.innerText = 'Comparar preço: \n  Gasolina e Alcool';
                buttonComparaValor.addEventListener("click", valorPorKm);
                buttonComparaValor.className = 'buttonResult';
            mostrar.insertAdjacentElement('beforeEnd', buttonComparaValor);

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
            codigoGithub.href = 'https://github.com/improgram/casadocodigo/blob/master/Capitulo2/011Topico2.6_Opcao3.html \n';
    resultado();
    }

// Media de Idade dos familiares 008Topico2.3
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
        codigoGithub.href = 'https://github.com/improgram/casadocodigo/blob/master/Capitulo5/042Topico5.9.html \n';
    resultado();
    }

//Acertar Numero pensado
    let buttonNumero = document.getElementsByClassName('adivinharNumero');
    for(const elementNumero of buttonNumero) {
        elementNumero.onclick = numeroPensado;
    }
    function numeroPensado () {                          
            titulo.textContent = 'Adivinhar Numero Pensado \n \n';
        let buttoncincoTentativas = document.createElement('button');                     // cria botao  
            buttoncincoTentativas.appendChild(document.createTextNode('5 Tentativas'));   // Adiciona texto ao botao
            buttoncincoTentativas.setAttribute('id','buttoncincoTentativas');
            buttoncincoTentativas.className = 'buttonResult';
            titulo.appendChild(buttoncincoTentativas);  
            buttoncincoTentativas.onclick = cincoTentativas;
        let buttonAteAcertar = document.createElement('button');
            buttonAteAcertar.appendChild (document.createTextNode('De 1 a 6 '));
            buttonAteAcertar.setAttribute('id', 'buttonAteAcertar');
            buttonAteAcertar.className = 'buttonResult';
            titulo.appendChild(buttonAteAcertar);
            buttonAteAcertar.onclick = ateAcertar;
        let chute;
        let tentativa = 1;
        let listul = document.createElement('ul');              // Cria lista UL
            listul.setAttribute('id', 'listul');                // Atributo id adicionado
        let listli = document.createElement('li');              // Cria elemento Li
            listli.setAttribute('id', 'listli');                // Atributo id adicionado
            listul.appendChild(listli);                         // UL pai do listli(Li)

        function cincoTentativas(){
            let segredo = Math.round(Math.random() * 9);
            document.getElementById('buttoncincoTentativas').disabled = true;
            document.getElementById('buttoncincoTentativas').className = 'objetos';
            while(tentativa <= 5) {
                    chute = prompt('DIGITE um numero de 1 a 9 ' );
                if (isNaN(chute)) {
                    alert('Voce digitou : ' + chute + ' . Digite apenas numeros.');                   
                } else if (chute == segredo) {                    
                    buttoncincoTentativas.insertAdjacentText('afterEnd', '\n ACERTOU o NÚMERO é : ' + segredo + '\n \n');
                    alert('Parabens, ACERTOU');               
                    break;
                } else if (chute > segredo) {
                    alert('Chute foi maior que o numero pensado ');               
                } else if (chute < segredo) {
                    alert('Chute foi menor que o numero pensado ' );                                            
                } else
                    console.log(chute);
                    tentativa ++;
                if (tentativa >= 6 ) {
                    console.group();
                    console.warnr('%c O numero é : ' + segredo , 'background: #fff; color: #00F');
                    console.error('%c 5 Chances ESGOTADAS ' , 'background: #FF0000; color: #FFF');
                    console.groupEnd();
                    buttoncincoTentativas.appendChild(document.createTextNode(' ESGOTADAS. '));
                }                                           
                listli.appendChild(document.createTextNode('Você Digitou : ' + chute + '\n'));
                mostrar.insertAdjacentElement('beforeEnd', listli);                            
            }
        }

        function ateAcertar() {
            let deumaseis = Math.round(Math.random() * 6);
            document.getElementById('buttonAteAcertar').disabled = true;
            document.getElementById('buttonAteAcertar').className = 'objetos';
            while(chute != deumaseis) {
                    chute = prompt('ESCOLHA um numero de 0 ate 6' );
                if(chute == deumaseis) {
                    console.log('%c ACERTOU : O numero é : ' + deumaseis, 'background: #000; color: #FF0');
                    buttonAteAcertar.insertAdjacentText('afterEnd', '\n ACERTOU o NÚMERO é : ' + deumaseis + '\n \n');
                    alert('Parabens, ACERTOU');
                    break;
                } else if (chute > deumaseis) {
                    alert('Chute foi maior que o numero pensado ');              
                } else if (chute < deumaseis) {
                    alert('Chute foi menor que o numero pensado ' );
                } else if (isNaN(chute)) {
                chute = ' Voce digitou : ' + chute;
                alert('Voce digitou : ' + chute + ' >  Digite apenas numeros.');
                } else {
                    tentativa++;
                }                            
                listli.appendChild(document.createTextNode('Número Digitado : ' + chute + '\n'));
                mostrar.insertAdjacentElement('beforeEnd', listli);
            }
        }      
        mostrar.insertAdjacentText('afterBegin', '\n NÚMEROS DIGITADOS : \n \n' );
        codigoGithub.innerHTML = '';
        codigoGithub.appendChild(document.createTextNode('Abrir o Codigo Numero Pensado no GitHub \n'));
        codigoGithub.href = 'https://github.com/improgram/casadocodigo/blob/master/Capitulo5/044Topico5.11_Exerci1_2_3.html \n';
        resultado();
    }                                                           
    
    
//Linhas e Colunas
    let buttonlinhaColuna = document.getElementsByClassName('linhaColuna');
    for(const elementLinhaColuna of buttonlinhaColuna) {
        elementLinhaColuna.onclick = linhaComColuna;
    }
    function linhaComColuna() {
        titulo.textContent = 'Linhas e Colunas \n';
        let buttonQuadrado = document.createElement('button');
            buttonQuadrado.appendChild(document.createTextNode('Criar Quadrado'));
            buttonQuadrado.setAttribute('id', 'buttonQuadrado');
            buttonQuadrado.className = 'buttonResult';
            buttonQuadrado.addEventListener('click', desenharQuadrado);
            titulo.appendChild(buttonQuadrado);
        let buttonTabela = document.createElement('button');
            buttonTabela.appendChild(document.createTextNode('Criar Tabela'));
            buttonTabela.setAttribute('id', 'buttonTabela');
            buttonTabela.className = 'buttonResult';
            buttonTabela.addEventListener('click', criarTabela);
            titulo.appendChild(buttonTabela);
        let buttonCrescente = document.createElement('button');
            buttonCrescente.appendChild(document.createTextNode('Coluna Crescente'));
            buttonCrescente.setAttribute('id', 'buttonCrescente');
            buttonCrescente.className = 'buttonResult';
            buttonCrescente.addEventListener('click', crescente);
            titulo.appendChild(buttonCrescente);
        let buttonV = document.createElement('button');
            buttonV.appendChild(document.createTextNode('V de Vingança'));
            buttonV.setAttribute('id', 'buttonV');
            buttonV.className = 'buttonResult';
            buttonV.addEventListener('click', desenharV);
            titulo.appendChild(buttonV);
        let buttonPiramide = document.createElement('button');
            buttonPiramide.appendChild(document.createTextNode('Piramide'));
            buttonPiramide.setAttribute('id', 'buttonPiramide');
            buttonPiramide.className = 'buttonResult';
            buttonPiramide.addEventListener('click', desenharPiramide);
            titulo.appendChild(buttonPiramide);
        let createColuna = document.createElement('p');
            createColuna.setAttribute('id', 'createColuna');
            
        let conteudo = '';
        let estrela = '&#9733';

        function desenharQuadrado () {
            document.getElementById('buttonQuadrado').disabled = true;
            document.getElementById('buttonQuadrado').className = 'imc';
            let lin = Number (prompt('Numero de Linhas') );
            let col = Number (prompt('Numero de Colunas') );
            let quadrado = '\n Quantidade de linhas: ' + lin + '\n' +
                            'Quantidade de Colunas: ' + col + '\n';
            mostrar.textContent = quadrado + '\n';
            for (let linha=1; linha<= lin; linha++){
                for (let coluna=1; coluna<= col; coluna++){
                    conteudo += estrela + ' ';
                }
                conteudo += '\n';    
            }
            mostrar.insertAdjacentHTML('beforeEnd', conteudo);
        }            
            
        function criarTabela () {
            document.getElementById('buttonTabela').disabled = true;
            document.getElementById('buttonTabela').className = 'imc';
            let tabela = document.createElement('table');
                tabela.setAttribute('border', '4');
                tabela.style = 'border: 1px solid #5882FA';
            let tbody = document.createElement('tbody');
            let imgTabela = document.createElement('img');
                imgTabela.className = 'imgtabela';
            let linha1 = prompt('Digite a quantidade de linha');
            let coluna1 = prompt('Digite a quantidade de coluna');
            let tamanho = ' Quantidade de linhas : ' + linha1 + '\n' +
                          ' Quantidade de colunas : ' + coluna1 + '\n \n';       
            if (isNaN(linha1, coluna1)) {
                alert('ERRO : Digite apenas numeros.');
                console.error('Nao foi digitado um Numero.');               
                mostrar.textContent = '\n Não foi digitado um numero: \n' + linha1 + '\n' + coluna1;
            }  
            for (let i = 0; i < linha1; i++) {
                let tr = document.createElement('tr');   // tr => linha da tabela 
                    tr.style = 'border: 1px solid #00FF00';
                for (let j = 0; j < coluna1; j++) {
                    let td = document.createElement('td');  // td => celula
                    let cellText = document.createTextNode(`linha ${i}, coluna ${j}`);
                    td.appendChild(cellText);
                    tr.appendChild(td);
                }
                tbody.appendChild(tr);               
            }
            mostrar.textContent = tamanho + 'TABELA \n \n';            
            mostrar.insertAdjacentElement('beforeEnd', tabela);
            tabela.appendChild(tbody);
            tabela.insertAdjacentElement('afterEnd', imgTabela);
        }       
        
        function crescente () {                                         // Desafio Coluna crescente até 6
            document.getElementById('buttonCrescente').disabled = true;
            document.getElementById('buttonCrescente').className = 'imc';
            mostrar.textContent = ' Cria Coluna Crescente \n \n';
            mostrar.insertAdjacentElement('beforeEnd', createColuna);   // Insere o elemento antes do final
            let caracter = estrela;                                     // Caracter que deseja imprimir.
            let resultado = '';                                         // Variável para armazenar o resultado e imprimir.            
            for (let i = 0; i < 6; i++) {     
                resultado += caracter; 
                console.log(resultado + " + ");
                createColuna.setAttribute('style', 'text-align: left; font-size: 18px; color: gold');
            // = createColuna.style.cssText = "text-align: left; font-size: 20px;"; (Para I.E usar propriedade cssText)
            // = document.getElementById("createColuna").style.textAlign = "left";
                document.getElementById('createColuna').innerHTML += resultado + '<br>';
            }
        }

        function desenharV () {
            document.getElementById('buttonV').disabled = true;
            document.getElementById('buttonV').className = 'imc';
            mostrar.textContent = 'Desenho de um V \n \n';
            mostrar.insertAdjacentElement('beforeEnd', createColuna);
            createColuna = "";
            let v = '||';
            let t = '_';
            for (let linhaV = 1; linhaV <= 5; linhaV++) {
                for (let colunaV = 1; colunaV < 10; colunaV++) {
                  if (linhaV == colunaV || linhaV == 10 - colunaV) { // Se linha = coluna ou linha = 10 menor que coluna
                      document.getElementById("createColuna").innerHTML += v;   // linha = coluna entao ID igual a ||
                  } else                                      
                  document.getElementById("createColuna").innerHTML += t;       // linha nao igual a coluna entao ID sera igual a _
                }
                document.getElementById("createColuna").innerHTML += '<br/>';  // finalizado loop em 10 colunas pula até linha limite: 5
            }
        }

        function desenharPiramide () {
            document.getElementById('buttonPiramide').disabled = true;
            document.getElementById('buttonPiramide').className = 'imc';
            mostrar.textContent = 'Desenho de uma Piramide \n';
            let aux = '';
            for (let linha = 1; linha <= 5; linha++) {
                for(let coluna = 1; coluna <= linha; coluna++) {
                    if (coluna == linha) {         
                    aux += estrela;
                    console.log('piramide');
                    document.getElementById('piramide').innerHTML += aux + '<br />'; // '\n' -> NAO
                    } else {
                    console.log('pular Linha');
                    }   
                }
            }
        }

        mostrar.insertAdjacentText('afterBegin', '\n RESULTADO AQUI \n \n' );
        codigoGithub.innerHTML = '';
        codigoGithub.appendChild(document.createTextNode('\n Abrir o Codigo Linhas e Colunas no GitHub \n'));    
        codigoGithub.href = 'https://github.com/improgram/casadocodigo/blob/master/Capitulo5/045Topico5.12.html \n';
    resultado();    
}

/* PAREI AQUI Mega-Sena

let buttonMegaSena = document.getElementByClassName('megaSena');
    for (let elementMegaSena of buttonMegaSena) {
        elementMegaSena.onclick = megaSena;
    }
    function megaSena(){
        titulo.textContent = 'Mega-Sena';
        mostrar.textContent = 'Mega-Sena \n';
        
        codigoGithub.innerHTML = '';
        codigoGithub.appendChild(document.createTextNode('\n Abrir o Codigo Mega Sena no GitHub \n'));
        codigoGithub.href = 'https://github.com/improgram/casadocodigo/blob/master/Capitulo6/051Topico6.4_Opcao2.html \n';
    resultado();
    }


// Introducao Canvas
let buttonCanvas = document.getElementByClassName('canvasLearning');
    for (let elementIntroCanvas of buttonCanvas) {
        elementIntroCanvas.onclick = introCanvas;
    }
    function introCanvas() {
        titulo.textContent = 'Canvas Learning';
        mostrar.textContent = 'Canvas Learning \n';
        codigoGithub.innerHTML = '';
        codigoGithub.appendChild(document.createTextNode('\n Abrir o Codigo Canvas Learning no GitHub \n'));
        codigoGithub.href = 'https://github.com/improgram/casadocodigo/blob/master/Capitulo7/055Topico7.2.html \n';
    resultado();
    }


// Tabuleiro Damas
let buttonDamas = document.getElementByClassName('damas');
    for (let elementButtonDamas of buttonDamas){
        elementButtonDamas.onclick = damas;
    }
    function damas(){
        titulo.textContent = '';
        mostrar.textContent = ' \n';
        codigoGithub.innerHTML = '';
        codigoGithub.appendChild(document.createTextNode('\n Abrir o Codigo --- no GitHub \n'));
        codigoGithub.href = 'https://github.com/improgram/casadocodigo/blob/master/Capitulo7/056Topico7.3_Tabuleiro.html \n';
    resultado();
    }

// Bandeiras com Canvas
let buttonBandeiras = document.getElementByClassName('bandeiras');
    for (let elementBandeiras of buttonBandeiras) {
        elementBandeiras.onclick = bandeiras;
    }
    function bandeiras() {
        titulo.textContent = '';
        mostrar.textContent = ' \n';
        codigoGithub.innerHTML = '';
        codigoGithub.appendChild(document.createTextNode('\n Abrir o Codigo --- no GitHub \n'));
        codigoGithub.href = 'https://github.com/improgram/casadocodigo/blob/master/Capitulo7/057Topico7.4_Bandeiras.html \n';
    resultado();
    }

//Canvas com Condicionais
let buttonCondicionais = document.getElementByClassName('canvasCondicionais');
    for (let elementCondicionais of buttonCondicionais){
        elementCondicionais.onclick = canvasCondicionais;
    }    
    function canvasCondicionais(){
        titulo.textContent = '';
        mostrar.textContent = ' \n';
        codigoGithub.innerHTML = '';
        codigoGithub.appendChild(document.createTextNode('\n Abrir o Codigo --- no GitHub \n'));
        codigoGithub.href = 'https://github.com/improgram/casadocodigo/blob/master/Capitulo7/062Topico7.6_Exercicio4.html \n';
    resultado();
    }

//Canvas Ordem crescente
let buttonCrescente = document.getElementByClassName('canvasCrescente');
    for (let elementCanvasCrescente of buttonCrescente) {
        elementCanvasCrescente.onclick = canvasCrescente;
    }
    function canvasCrescente(){
        titulo.textContent = '';
        mostrar.textContent = ' \n';
        codigoGithub.innerHTML = '';
        codigoGithub.appendChild(document.createTextNode('\n Abrir o Codigo --- no GitHub \n'));
        codigoGithub.href = 'https://github.com/improgram/casadocodigo/blob/master/Capitulo7/063Topico7.7.html \n';
    resultado();    
    }

//Canvas Parabola
let buttonParabola = document.getElementByClassName('canvasParabola');
    for (let elementCanvasParabola of buttonParabola) {
        elementCanvasParabola.onclick = canvasParabola;
    }
    function canvasParabola(){
        titulo.textContent = '';
        mostrar.textContent = ' \n';
        codigoGithub.innerHTML = '';
        codigoGithub.appendChild(document.createTextNode('\n Abrir o Codigo --- no GitHub \n'));
        codigoGithub.href = 'https://github.com/improgram/casadocodigo/blob/master/Capitulo7/065Topico7.9_Parabola.html \n';
    resultado();
    }

//Calculo do Seno com Canvas
let buttonSeno = document.getElementByClassName('seno');
    for (let elementSeno of buttonSeno) {
        elementSeno.onclick = seno;
    }
    function seno(){
        titulo.textContent = '';
        mostrar.textContent = ' \n';
        codigoGithub.innerHTML = '';
        codigoGithub.appendChild(document.createTextNode('\n Abrir o Codigo --- no GitHub \n'));
        codigoGithub.href = 'https://github.com/improgram/casadocodigo/blob/master/Capitulo7/069Topico7.13_Seno.html \n';
    resultado();
    }

// Detecta cliques:
let buttonClique = document.getElementByClassName('cliques');
    for (let elementDetectaClique of buttonClique) {
        elementDetectaClique.onclick = detectaClique;
    }
    function detectaClique(){
        titulo.textContent = '';
        mostrar.textContent = ' \n';
        codigoGithub.innerHTML = '';
        codigoGithub.appendChild(document.createTextNode('\n Abrir o Codigo --- no GitHub \n'));
        codigoGithub.href = 'https://github.com/improgram/casadocodigo/blob/master/Capitulo8/070Topico8.1_Com_Alert.html \n';
    resultado();
    }

// Detecta botao Mouse:
let buttonMouse = document.getElementByClassName('botaoMouse');
    for (let elementMouse of buttonMouse) {
        elementMouse.onclick = mouse;
    }
    function mouse(){
        titulo.textContent = '';
        mostrar.textContent = ' \n';
        codigoGithub.innerHTML = '';
        codigoGithub.appendChild(document.createTextNode('\n Abrir o Codigo --- no GitHub \n'));
        codigoGithub.href = 'https://github.com/improgram/casadocodigo/blob/master/Capitulo8/071Topico8.2_Exercicio1.html \n';
    resultado();
    }

// Paint com Canvas:
let buttonPaint = document.getElementByClassName('paint');
    for(let elementPaint of buttonPaint) {
        elementPaint.onclick = paint;
    }
    function paint(){
        titulo.textContent = '';
        mostrar.textContent = ' \n';
        codigoGithub.innerHTML = '';
        codigoGithub.appendChild(document.createTextNode('\n Abrir o Codigo --- no GitHub \n'));
        codigoGithub.href = 'https://github.com/improgram/casadocodigo/blob/master/Capitulo8/073Topico8.2_Paint_Canvas_Exerci3.html \n';
    resultado();
    }


// CanvasaAnimacoes:
let buttonAnimacoes = document.getElementByClassName('animacoes');
    for (let elementCanvasAnimacoes of buttonAnimacoes) {
        elementCanvasAnimacoes.onclick = canvasAnimacoes;
    }
    function canvasAnimacoes(){
        titulo.textContent = '';
        mostrar.textContent = ' \n';
        codigoGithub.innerHTML = '';
        codigoGithub.appendChild(document.createTextNode('\n Abrir o Codigo --- no GitHub \n'));
        codigoGithub.href = 'https://github.com/improgram/casadocodigo/blob/master/Capitulo8/075Topico8.4.html \n';
    resultado();
    }


// CODIGO Tiro ao alvo:
let buttonAlvo = document.getElementByClassName('tiroAlvo');
    for (let elementTiroAlvo of buttonAlvo) {
        elementTiroAlvo.onclick = tiroAlvo;
    }
    function tiroAlvo(){
        titulo.textContent = '';
        mostrar.textContent = ' \n';
        codigoGithub.innerHTML = '';
        codigoGithub.appendChild(document.createTextNode('\n Abrir o Codigo --- no GitHub \n'));
        codigoGithub.href = 'https://github.com/improgram/casadocodigo/blob/master/Capitulo8/079Topico8.5_opcao2.html \n';
    resultado();
    }


// CODIGO Formulario com Eventos:
let buttonFormEventos = document.getElementByClassName('formEventos');
    for (let elementFormEventos of buttonFormEventos) {
        elementFormEventos.onclick = formEventos;
    }
    function formEventos(){
        titulo.textContent = '';
        mostrar.textContent = ' \n';
        codigoGithub.innerHTML = '';
        codigoGithub.appendChild(document.createTextNode('\n Abrir o Codigo --- no GitHub \n'));
        codigoGithub.href = 'https://github.com/improgram/casadocodigo/blob/master/Capitulo8/080Topico9.1.html \n';
    resultado();
    }

//Formulario com Array:
let buttonFormArray = document.getElementByClassName('formArray');
    for (let elementFormArray of buttonFormArray) {
        elementFormArray.onclick = formArray;
    }

    function formArray(){
        titulo.textContent = '';
        mostrar.textContent = ' \n';
        codigoGithub.innerHTML = '';
        codigoGithub.appendChild(document.createTextNode('\n Abrir o Codigo --- no GitHub \n'));
        codigoGithub.href = 'https://github.com/improgram/casadocodigo/blob/master/Capitulo8/081Topico9.1_formulario_array.html \n';
    resultado();
    }

// Codigo Objetos:
let buttonObjetos = document.getElementByClassName('objetos');
    for (let elementObjetos of buttonObjetos) {
        elementObjetos.onclick = objetos;
    }
    function objetos(){
        titulo.textContent = '';
        mostrar.textContent = ' \n';
        codigoGithub.innerHTML = '';
        codigoGithub.appendChild(document.createTextNode('\n Abrir o Codigo --- no GitHub \n'));
        codigoGithub.href = 'https://github.com/improgram/casadocodigo/blob/master/Capitulo8/083_Arrays.html \n';
    resultado();
    }


// CODIGO DOM:
let buttonDom = document.getElementByClassName('dom');
    for (let elementDom of buttonDom) {
        elementDom.onclick = dom;
    }
    function dom(){
        titulo.textContent = '';
        mostrar.textContent = ' \n';
        codigoGithub.innerHTML = '';
        codigoGithub.appendChild(document.createTextNode('\n Abrir o Codigo --- no GitHub \n'));
        codigoGithub.href = 'https://github.com/improgram/casadocodigo/blob/master/Capitulo8/084Topico9.2_codigoGithubs.html \n';
    resultado();
    }

// CODIGO IMC:
let buttonImc = document.getElementByClassName('imc');
    for (let elementImc of buttonImc) {
        elementImc.onclick = imc;
    }

    function imc(){
        titulo.textContent = '';
        mostrar.textContent = ' \n';
        codigoGithub.innerHTML = '';
        codigoGithub.appendChild(document.createTextNode('\n Abrir o Codigo --- no GitHub \n'));
        codigoGithub.href = 'https://github.com/improgram/casadocodigo/blob/master/Capitulo8/085Topico9.3_IMC.html \n';
    resultado();
    }

*/