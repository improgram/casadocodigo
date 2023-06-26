function todasFunctions() {  
    //let tasks = [batimentos(), anodeCopa(), anodeOlimpiadas() ];
    //https://www.devmedia.com.br/javascript-foreach-executando-uma-funcao-para-cada-elemento-de-um-numerosEscolhidos/39808
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
    codigoGithub.textContent = '';
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
    codigoGithub.textContent = '';
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
            olimpiadas = '\n Todos os Jogos Olimpicos \n \n';
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
                mostrar.textContent = olimpiadas += 'Em ' + ano + ': Teremos Olimpiadas. \n';              
                break;               
            default:
                mostrar.textContent = olimpiadas += 'Em ' + ano + ': Teve Olimpiadas. \n';             
            }
        }   
        codigoGithub.textContent = '';
        codigoGithub.appendChild(document.createTextNode('Abrir codigo Olimpiadas no gitHub \n \n'));
        codigoGithub.href = 'https://github.com/improgram/casadocodigo/blob/master/Capitulo5/038Topico5.5.html \n';
        resultado();   
    }    

//Tabuada
    let buttonTabuada = document.getElementsByClassName('tabuada');
    for (const elementTabuada of buttonTabuada) {
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
            codigoGithub.textContent = '';
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
        mostrar.textContent = '\n Com tanque de: ' + tanqueCarro +  ' litros: \n' +
                                '\n' + kmcomGas + ' Km percorridos com Gasolina \n' +
                                '\n Então: \n' + (kmcomGas / tanqueCarro) + ' KM rodados por litro.\n \n';
        mostrar.insertAdjacentElement('beforeEnd', buttonComparativo);
        
        function comparaCombustivel () {
            kmcomAlcool = parseInt(prompt('Quantos kM Percorridos com Alcool ?'));
            let consumoAlcool = kmcomAlcool / tanqueCarro;           
            mostrar.textContent = '\n Com tanque de ' + tanqueCarro + ' litros: \n' +
                                    '\n' + kmcomGas + ' Km percorridos com Gasolina \n' + 'Então: \n' + 
                                    'Consumo Gasolina: ' + consumoGasolina + ' km por litro.' + '\n' +
                                    '\n' + kmcomAlcool + ' Km precorridos com Alcool \n' + 'Então: \n' +                                  
                                    'Consumo Alcool: ' + consumoAlcool + ' km por litro.';            
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
        codigoGithub.textContent = '';
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

        codigoGithub.textContent = '';
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
            mostrar.textContent = '\n NÚMEROS DIGITADOS AQUI : \n \n';
        let buttoncincoTentativas = document.createElement('button');                     
            buttoncincoTentativas.appendChild(document.createTextNode('5 Tentativas'));  
            buttoncincoTentativas.setAttribute('id','buttoncincoTentativas');
            buttoncincoTentativas.className = 'buttonResult';
            titulo.appendChild(buttoncincoTentativas);  
            buttoncincoTentativas.onclick = cincoTentativas;
        let buttonZeroAteCinco = document.createElement('button');
            buttonZeroAteCinco.appendChild (document.createTextNode('De 0 a 5 '));
            buttonZeroAteCinco.setAttribute('id', 'buttonZeroAteCinco');
            buttonZeroAteCinco.className = 'buttonResult';
            titulo.appendChild(buttonZeroAteCinco);
            buttonZeroAteCinco.onclick = zeroAteCinco;
        let chute;
        let tentativa;
        let listli = document.createElement('p');              
            listli.setAttribute('class', 'combustiveis');                

        function cincoTentativas() {
            let chuteAteNove = Math.round(Math.random() * 9);
                document.getElementById('buttoncincoTentativas').disabled = true;
                document.getElementById('buttoncincoTentativas').className = 'cliques';
                chute = '';
                mostrar.textContent = '';
                listli.textContent = '';
            for (tentativa = 1; tentativa <= 5; tentativa++ ) {
                chute = prompt('DIGITE um numero de 0 a 9' );
                listli.appendChild(document.createTextNode('De 0 a 9 Numero Digitado: ' + chute + '\n'));               
                if (tentativa >= 5) {
                    console.group();
                    console.warn('%c O numero é :  ' + chuteAteNove , 'background: #fff; color: #00F');
                    console.error('%c 5 Chances ESGOTADAS ' , 'background: #FF0000; color: #FFF');
                    console.groupEnd();
                    buttoncincoTentativas.appendChild(document.createTextNode('\n \n ESGOTADAS. '));
                    document.getElementById('buttoncincoTentativas').className = 'batimentos';
                    //listli.insertAdjacentHTML('afterEnd', '<p class="tiroAlvo"> \n \n 5 Tentativas Esgotadas </p>' + '\n \n');
                    
                } else if (chute == chuteAteNove) {                    
                    buttoncincoTentativas.insertAdjacentText('afterEnd', '\n ACERTOU o NÚMERO é : ' + chuteAteNove + '\n \n');
                    listli.insertAdjacentText('afterEnd', '\n De 0 a 9 ACERTOU o numero é :    ' + chuteAteNove + '\n \n');
                    console.warn('%c De 0 a 9 : ACERTOU o numero é : ' + chuteAteNove , 'background: #fff; color: #00F');
                    alert('Parabens, ACERTOU');               
                    break;
                } else if (chute > chuteAteNove) {
                    alert('Chute foi maior que o numero pensado ');               
                } else if (chute < chuteAteNove) {
                    alert('Chute foi menor que o numero pensado ' );                                        
                } else if (isNaN(chute)) {
                    alert('Voce digitou : ' + chute + ' . Digite apenas numeros.');
                } else 
                    console.log('CHUTE : ' + chute);               
            }
            mostrar.textContent = ' De 0 a 9 Em 5 Tentativas : \n \n';  
            mostrar.insertAdjacentElement('beforeEnd', listli);
            //listli.appendChild(document.createTextNode('Número Digitado : ' + chute + '\n') );                      
        }   
        // https://www.javascripttutorial.net/javascript-dom/javascript-insertadjacenthtml/

        function zeroAteCinco() {
            let chuteAteCinco = Math.round(Math.random() * 5);
            document.getElementById('buttonZeroAteCinco').disabled = true;
            document.getElementById('buttonZeroAteCinco').className = 'cliques';
            chute = '';
            mostrar.textContent = '';
            listli.textContent = '';
            while(chute != chuteAteCinco) {
                chute = prompt('ESCOLHA um numero de 0 ate 5');
                if (isNaN(chute)) {
                    alert('Voce digitou : ' + chute + ' . Digite apenas numeros.'); 
                } else if(chute == chuteAteCinco) {
                    buttonZeroAteCinco.insertAdjacentText('afterEnd', '\n ACERTOU o NÚMERO é : ' + chuteAteCinco + '\n \n');
                    listli.insertAdjacentText('beforeEnd', '\n DE 0 a 5 ACERTOU o NÚMERO é : ' + chuteAteCinco + '\n \n');
                    console.warn('%c De 0 a 5 : ACERTOU o numero é : ' + chuteAteCinco , 'background: #fff; color: #00F');
                    alert('Parabens, ACERTOU');
                    break;
                } else if (chute > chuteAteCinco) {
                    alert('Chute foi maior que o numero pensado');              
                } else if (chute < chuteAteCinco) {
                    alert('Chute foi menor que o numero pensado');
                } else {
                    tentativa++;
                }
                mostrar.textContent = 'De 0 a 5 Numero Pensado \n \n' + 
                                        'Tentativas ilimitadas \n \n';
                mostrar.insertAdjacentElement('beforeEnd', listli);
                listli.appendChild(document.createTextNode('\n Numero Digitado : ' + chute + '\n'));
            }
        }       
        codigoGithub.textContent = '';
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
            buttonCrescente.appendChild(document.createTextNode('Adiciona mais uma por Linha'));
            buttonCrescente.setAttribute('id', 'buttonCrescente');
            buttonCrescente.className = 'buttonResult';
            buttonCrescente.addEventListener('click', crescente);
            titulo.appendChild(buttonCrescente);
        let buttonV = document.createElement('button');
            buttonV.appendChild(document.createTextNode('Desenhar V'));
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
        let criarElemento = document.createElement('p');
            criarElemento.setAttribute('id', 'criarElemento');          
        let conteudo = '';
        let estrela = '&#9733';

        function desenharQuadrado () {
            document.getElementById('buttonQuadrado').disabled = true;
            document.getElementById('buttonQuadrado').className = 'imc';
            let lin = Number (prompt('Numero de Linhas') );
            let col = Number (prompt('Numero de Colunas') );
            let quadrado = '\n Linhas: ' + lin + '\n' +
                            'Colunas: ' + col + '\n';
            conteudo = "";                                // Limpar valor da variavel ja utilizada antes.
            mostrar.textContent = quadrado + '\n';
            for (let linha = 1; linha <= lin; linha++){
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
            let linhaTabela = prompt('Digite a quantidade de linha');
            let colunaTabela = prompt('Digite a quantidade de coluna');
            let tamanho = ' Quantidade de linhas : ' + linhaTabela + '\n' +
                          ' Quantidade de colunas : ' + colunaTabela + '\n \n';
            if (isNaN(linhaTabela, colunaTabela)) {
                alert('ERRO : Digite apenas numeros.');
                console.error('Nao foi digitado um Numero.');               
                mostrar.textContent = '\n Não foi digitado um numero: \n' + linhaTabela + '\n' + colunaTabela;
            }  
            for (let i = 0; i < linhaTabela; i++) {
                let tr = document.createElement('tr');   // tr => linha da tabela 
                    tr.style = 'border: 1px solid #00FF00';
                for (let j = 0; j < colunaTabela; j++) {
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
        
        function crescente () {                                // Desafio Coluna crescente até 6
            document.getElementById('buttonCrescente').disabled = true;
            document.getElementById('buttonCrescente').className = 'imc';
            conteudo = "";                                     // Limpar valor da variavel ja utilizada antes.
            let caracter = estrela;                            // Caracter que deseja imprimir.
            criarElemento.textContent = "";                      // Elemento utilizado em outra function tem seu conteudo zerado
            mostrar.textContent = 'Adiciona uma: ';
            mostrar.insertAdjacentHTML('beforeEnd', caracter + '\n por Linha \n \n');
            mostrar.insertAdjacentElement('beforeEnd', criarElemento);   // Insere o elemento antes do final
            criarElemento.setAttribute('style', 'text-align: left; font-size: 18px; color: gold');
            // => criarElemento.style.cssText = "text-align: left; font-size: 20px;"; (Para I.E usar propriedade cssText)
            // => document.getElementById("criarElemento").style.textAlign = "left";                      
            for (let i = 0; i < 6; i++) {                 
                conteudo += caracter; 
                console.log(conteudo + " + ");               
                document.getElementById('criarElemento').textContent += conteudo + '<br>';
            }           
        }

        function desenharV () {
            document.getElementById('buttonV').disabled = true;
            document.getElementById('buttonV').className = 'imc';
            mostrar.textContent = 'Desenho de um V \n \n';
            criarElemento.textContent = "";                   // Elemento utilizado em outra function tem seu conteudo zerado          
            mostrar.insertAdjacentElement('beforeEnd', criarElemento);
            criarElemento.setAttribute('style', 'text-align: center; font-size: 20px; color: red');
            let v = '||';
            let t = '_';
            for (let linhaV = 1; linhaV <= 5; linhaV++) {
                for (let colunaV = 1; colunaV < 10; colunaV++) {
                  if (linhaV == colunaV || linhaV == 10 - colunaV) { // Se linha = coluna ou linha = 10 menor que coluna
                      document.getElementById("criarElemento").textContent += v;   // linha = coluna entao ID igual a ||
                  } else                                      
                  document.getElementById("criarElemento").textContent += t;       // linha nao igual a coluna entao ID sera igual a _
                }
                document.getElementById("criarElemento").textContent += '<br/>';  // finalizado loop em 10 colunas pula até linha limite: 5
            }
        }

        function desenharPiramide () {
            document.getElementById('buttonPiramide').disabled = true;
            document.getElementById('buttonPiramide').className = 'imc';
            mostrar.textContent = 'Desenho de uma Piramide \n \n';
            conteudo = "";                                   // Limpar valor da variavel ja utilizada antes.
            criarElemento.textContent = "";                    // Elemento utilizado em outra function tem seu conteudo zerado           
            mostrar.insertAdjacentElement('beforeEnd', criarElemento);
            criarElemento.setAttribute('style', 'font-size: 18px; color: gold');
            for (let linha = 1; linha <= 5; linha++) {
                for(let coluna = 1; coluna <= linha; coluna++) {
                    if (coluna == linha) {         
                        conteudo += estrela;
                        console.log('piramide');
                        document.getElementById("criarElemento").textContent += conteudo + '<br>';
                    } else {
                        console.log('pular Linha');
                    }   
                }
            }
        }
        mostrar.insertAdjacentText('afterBegin', '\n RESULTADO AQUI \n \n' );

        codigoGithub.textContent = '';
        codigoGithub.appendChild(document.createTextNode('\n Abrir o Codigo Linhas e Colunas no GitHub \n'));    
        codigoGithub.href = 'https://github.com/improgram/casadocodigo/blob/master/Capitulo5/045Topico5.12.html \n';
    resultado();    
}

// Mega-Sena
let buttonMegaSena = document.getElementsByClassName('megaSena');
    for (let elementMegaSena of buttonMegaSena) {
        elementMegaSena.onclick = megaSena;
    }
// https://pt.stackoverflow.com/questions/420659/como-varrer-um-array-e-inserir-os-elementos-no-html-com-js 
// Método indexOf() retorna o primeiro índice em que o elemento pode ser encontrado no array,
// Retorna -1 caso o mesmo não esteja presente, se numeros.indexOf resultar -1 
// para o número que acabamos de gerar, ele não está presente no array e deve ser adicionado.    
    function megaSena() {
        titulo.textContent = 'Mega-Sena';
        mostrar.textContent = "Sorteio de 6 Numeros \n \n";
        let sorteio = [];
        let acerto = 0;
        let ulNumbers =  document.createElement('ul');
            ulNumbers.setAttribute('class', 'ulNumbers');
        mostrar.insertAdjacentElement('beforeEnd', ulNumbers);       

        function numero_aleatorio() {
            while (sorteio.length < 6) {
                let aleatorio = Math.floor(Math.random () * 60 + 1);
                let listaNumbers = document.createElement('li'); // Deve ficar dentro da function
                    listaNumbers.setAttribute('class', 'liNumbers');            
                if (sorteio.indexOf(aleatorio) == -1) {     // Evitar duplicidade
                    sorteio.push(aleatorio);
                    for (let element of sorteio) {
                        console.log(' => ' + sorteio);
                        let currentNumber = element;                   
                        listaNumbers.textContent = currentNumber;                                                           
                    }
                }               
                ulNumbers.appendChild(listaNumbers);
            }
            console.log('%c Sorteados: ' + sorteio, 'background: #000; color: #FF0'); // => criaria mais um LOOP
            ulNumbers.insertAdjacentHTML('afterBegin', 'Numeros Sorteados: \n \n');
            sorteio.sort (function(a, b){
                return a - b;
            })       
            console.log('%c Sorteados Ordenados : ' + sorteio, 'background: #FCFC; color: #0000FF'); // color: #00FFFF'
        }       
        numero_aleatorio ();

// Usuario digita numeros
        let numerosEscolhidos = [];
        let elementEscolhidos = document.createElement('ul');
            elementEscolhidos.setAttribute('class', 'ulNumbers');
        mostrar.insertAdjacentElement('beforeEnd', elementEscolhidos);
        let liNumbers = document.createElement('li');
            liNumbers.setAttribute('class', 'liNumbers');
        for (let i = 0; i < 2; i++) {                 // mudar para 6                                          
            let num = prompt('Digite 6 numeros ate 60.');
                liNumbers.textContent = num;
                // console.log('Digitado: ' + num);
                numerosEscolhidos.push(num);
                // console.log('Escolhido: ' + numerosEscolhidos);
        }
        elementEscolhidos.appendChild(liNumbers);
        elementEscolhidos.insertAdjacentHTML('afterBegin', '\n Numeros Escolhidos: \n' + numerosEscolhidos + '\n');        
            numerosEscolhidos.sort (function(a, b) {
                return a - b;
            });
        // console.log ('%c Digitados ordenados : ' + numerosEscolhidos, 'background: #0F0F; color: #000');
        // ulNumbers.insertAdjacentElement('afterEnd', elementEscolhidos);
        // ulNumbers.insertAdjacentElement('afterEnd', liNumbers);
        elementEscolhidos.insertAdjacentHTML('beforeend', '\n Ordem crescente: \n' + numerosEscolhidos + '\n');
        
// Comparativo
        for (let i = 0; i < 6; i++) {            
            for (let j = 0; j < 6; j++) {        
                if (numerosEscolhidos[i] == sorteio[j]) {
                    acerto++;
                    console.log('Acertou o numero : ' + numerosEscolhidos[i] );
                }
            }
        }
        if (acerto > 0) {
            console.log('Quantidade de Acertos: ' + acerto);
            mostrar.insertAdjacentHTML('beforeEnd', '\n Você acertou o numero: ' + numerosEscolhidos + '\n');        
        } else {
            mostrar.insertAdjacentHTML('beforeEnd', '\n Voce errou todos Numeros. \n');
            console.error('Voce Errou Todos numeros.');         
        }

        codigoGithub.textContent = '';
        codigoGithub.appendChild(document.createTextNode('\n Abrir o Codigo Mega Sena no GitHub \n'));
        codigoGithub.href = 'https://github.com/improgram/casadocodigo/blob/master/Capitulo6/051Topico6.4_Opcao2.html \n';
        resultado();
    }

// PAREI AQUI

// Introducao Canvas
let buttonCanvas = document.getElementsByClassName('canvasLearning');
    for (let elementIntroCanvas of buttonCanvas) {
        elementIntroCanvas.onclick = introCanvas;
    }
    function introCanvas() {
        titulo.textContent = 'Canvas Learning';
        mostrar.textContent = 'Learning \n';

        codigoGithub.textContent = '';
        codigoGithub.appendChild(document.createTextNode('\n Abrir o Codigo Canvas Learning no GitHub \n'));
        codigoGithub.href = 'https://github.com/improgram/casadocodigo/blob/master/Capitulo7/055Topico7.2.html \n';
    resultado();
    }

// Tabuleiro Damas
let buttonDamas = document.getElementsByClassName('damas');
    for (let elementButtonDamas of buttonDamas){
        elementButtonDamas.onclick = damas;
    }
    function damas(){
        titulo.textContent = 'Tabuleiro de Damas';
        mostrar.textContent = 'Criar um tabuleiro com Canvas \n';

        codigoGithub.textContent = '';
        codigoGithub.appendChild(document.createTextNode('\n Abrir o Codigo --- no GitHub \n'));
        codigoGithub.href = 'https://github.com/improgram/casadocodigo/blob/master/Capitulo7/056Topico7.3_Tabuleiro.html \n';
    resultado();
    }

// Bandeiras com Canvas
let buttonBandeiras = document.getElementsByClassName('bandeiras');
    for (let elementBandeiras of buttonBandeiras) {
        elementBandeiras.onclick = bandeiras;
    }
    function bandeiras() {
        titulo.textContent = 'Bandeiras';
        mostrar.textContent = 'Desenhar Bandeiras com Canvas \n';

        codigoGithub.textContent = '';
        codigoGithub.appendChild(document.createTextNode('\n Abrir o Codigo --- no GitHub \n'));
        codigoGithub.href = 'https://github.com/improgram/casadocodigo/blob/master/Capitulo7/057Topico7.4_Bandeiras.html \n';
    resultado();
    }

//Canvas com Condicionais
let buttonCondicionais = document.getElementsByClassName('canvasCondicionais');
    for (let elementCondicionais of buttonCondicionais){
        elementCondicionais.onclick = canvasCondicionais;
    }    
    function canvasCondicionais(){
        titulo.textContent = 'Trabalho com Canvas';
        mostrar.textContent = 'Canvas Condicionais \n';

        codigoGithub.textContent = '';
        codigoGithub.appendChild(document.createTextNode('\n Abrir o Codigo --- no GitHub \n'));
        codigoGithub.href = 'https://github.com/improgram/casadocodigo/blob/master/Capitulo7/062Topico7.6_Exercicio4.html \n';
    resultado();
    }

//Canvas Ordem crescente
let buttonCrescente = document.getElementsByClassName('canvasCrescente');
    for (let elementCanvasCrescente of buttonCrescente) {
        elementCanvasCrescente.onclick = canvasCrescente;
    }
    function canvasCrescente(){
        titulo.textContent = 'Trabalho com Canvas';
        mostrar.textContent = 'Canvas crescente \n';

        codigoGithub.textContent = '';
        codigoGithub.appendChild(document.createTextNode('\n Abrir o Codigo --- no GitHub \n'));
        codigoGithub.href = 'https://github.com/improgram/casadocodigo/blob/master/Capitulo7/063Topico7.7.html \n';
    resultado();    
    }

//Canvas Parabola
let buttonParabola = document.getElementsByClassName('canvasParabola');
    for (let elementCanvasParabola of buttonParabola) {
        elementCanvasParabola.onclick = canvasParabola;
    }
    function canvasParabola(){
        titulo.textContent = 'Trabalho com Canvas';
        mostrar.textContent = 'Canvas Parabola \n';

        codigoGithub.textContent = '';
        codigoGithub.appendChild(document.createTextNode('\n Abrir o Codigo --- no GitHub \n'));
        codigoGithub.href = 'https://github.com/improgram/casadocodigo/blob/master/Capitulo7/065Topico7.9_Parabola.html \n';
    resultado();
    }

//Calculo do Seno com Canvas
let buttonSeno = document.getElementsByClassName('seno');
    for (let elementSeno of buttonSeno) {
        elementSeno.onclick = seno;
    }
    function seno(){
        titulo.textContent = 'Trabalho com Canvas';
        mostrar.textContent = 'Canvas Seno \n';

        codigoGithub.textContent = '';
        codigoGithub.appendChild(document.createTextNode('\n Abrir o Codigo --- no GitHub \n'));
        codigoGithub.href = 'https://github.com/improgram/casadocodigo/blob/master/Capitulo7/069Topico7.13_Seno.html \n';
    resultado();
    }

// Detecta cliques:
let buttonClique = document.getElementsByClassName('cliques');
    for (let elementDetectaClique of buttonClique) {
        elementDetectaClique.onclick = detectaClique;
    }
    function detectaClique(){
        titulo.textContent = 'Detectar Cliques';
        mostrar.textContent = 'Posição dos cliques \n';

        codigoGithub.textContent = '';
        codigoGithub.appendChild(document.createTextNode('\n Abrir o Codigo --- no GitHub \n'));
        codigoGithub.href = 'https://github.com/improgram/casadocodigo/blob/master/Capitulo8/070Topico8.1_Com_Alert.html \n';
    resultado();
    }

// Detecta botao Mouse:
let buttonMouse = document.getElementsByClassName('botaoMouse');
    for (let elementMouse of buttonMouse) {
        elementMouse.onclick = mouse;
    }
    function mouse(){
        titulo.textContent = 'Detecta movimentos';
        mostrar.textContent = 'Mouse \n';

        codigoGithub.textContent = '';
        codigoGithub.appendChild(document.createTextNode('\n Abrir o Codigo --- no GitHub \n'));
        codigoGithub.href = 'https://github.com/improgram/casadocodigo/blob/master/Capitulo8/071Topico8.2_Exercicio1.html \n';
    resultado();
    }

// Paint com Canvas:
let buttonPaint = document.getElementsByClassName('paint');
    for(let elementPaint of buttonPaint) {
        elementPaint.onclick = paint;
    }
    function paint(){
        titulo.textContent = 'Trabalho com Canvas';
        mostrar.textContent = 'Paint \n';

        codigoGithub.textContent = '';
        codigoGithub.appendChild(document.createTextNode('\n Abrir o Codigo --- no GitHub \n'));
        codigoGithub.href = 'https://github.com/improgram/casadocodigo/blob/master/Capitulo8/073Topico8.2_Paint_Canvas_Exerci3.html \n';
    resultado();
    }

// CanvasaAnimacoes:
let buttonAnimacoes = document.getElementsByClassName('animacoes');
    for (let elementCanvasAnimacoes of buttonAnimacoes) {
        elementCanvasAnimacoes.onclick = canvasAnimacoes;
    }
    function canvasAnimacoes(){
        titulo.textContent = 'Trabalho com Canvas';
        mostrar.textContent = 'Animações \n';

        codigoGithub.textContent = '';
        codigoGithub.appendChild(document.createTextNode('\n Abrir o Codigo --- no GitHub \n'));
        codigoGithub.href = 'https://github.com/improgram/casadocodigo/blob/master/Capitulo8/075Topico8.4.html \n';
    resultado();
    }

// CODIGO Tiro ao alvo:
let buttonAlvo = document.getElementsByClassName('tiroAlvo');
    for (let elementTiroAlvo of buttonAlvo) {
        elementTiroAlvo.onclick = tiroAlvo;
    }
    function tiroAlvo(){
        titulo.textContent = 'Trabalho com Canvas';
        mostrar.textContent = 'Tiro ao alvo \n';

        codigoGithub.textContent = '';
        codigoGithub.appendChild(document.createTextNode('\n Abrir o Codigo --- no GitHub \n'));
        codigoGithub.href = 'https://github.com/improgram/casadocodigo/blob/master/Capitulo8/079Topico8.5_opcao2.html \n';
    resultado();
    }

// CODIGO Formulario com Eventos:
let buttonFormEventos = document.getElementsByClassName('formEventos');
    for (let elementFormEventos of buttonFormEventos) {
        elementFormEventos.onclick = formEventos;
    }
    function formEventos(){
        titulo.textContent = 'Formulário';
        mostrar.textContent = 'Eventos \n';

        codigoGithub.textContent = '';
        codigoGithub.appendChild(document.createTextNode('\n Abrir o Codigo --- no GitHub \n'));
        codigoGithub.href = 'https://github.com/improgram/casadocodigo/blob/master/Capitulo8/080Topico9.1.html \n';
    resultado();
    }

//Formulario com numerosEscolhidos:
let buttonFormArray = document.getElementsByClassName('formArray');
    for (let elementFormArray of buttonFormArray) {
        elementFormArray.onclick = formArray;
    }

    function formArray(){
        titulo.textContent = 'Formulario com numeros';
        mostrar.textContent = 'Numeros na Array \n';

        codigoGithub.textContent = '';
        codigoGithub.appendChild(document.createTextNode('\n Abrir o Codigo --- no GitHub \n'));
        codigoGithub.href = 'https://github.com/improgram/casadocodigo/blob/master/Capitulo8/081Topico9.1_formulario_numerosEscolhidos.html \n';
    resultado();
    }

// Codigo Objetos:
let buttonObjetos = document.getElementsByClassName('objetos');
    for (let elementObjetos of buttonObjetos) {
        elementObjetos.onclick = objetos;
    }
    function objetos(){
        titulo.textContent = 'Objetos';
        mostrar.textContent = 'Objetos JS \n';

        codigoGithub.textContent = '';
        codigoGithub.appendChild(document.createTextNode('\n Abrir o Codigo --- no GitHub \n'));
        codigoGithub.href = 'https://github.com/improgram/casadocodigo/blob/master/Capitulo8/083_numerosEscolhidoss.html \n';
    resultado();
    }


// CODIGO DOM:
let buttonDom = document.getElementsByClassName('dom');
    for (let elementDom of buttonDom) {
        elementDom.onclick = dom;
    }
    function dom(){
        titulo.textContent = 'DOM';
        mostrar.textContent = 'Manipular DOM \n';

        codigoGithub.textContent = '';
        codigoGithub.appendChild(document.createTextNode('\n Abrir o Codigo --- no GitHub \n'));
        codigoGithub.href = 'https://github.com/improgram/casadocodigo/blob/master/Capitulo8/084Topico9.2_codigoGithubs.html \n';
    resultado();
    }

// CODIGO IMC:
let buttonImc = document.getElementsByClassName('imc');
    for (let elementImc of buttonImc) {
        elementImc.onclick = imc;
    }

    function imc(){
        titulo.textContent = 'I M C';
        mostrar.textContent = 'Calcular IMC \n';

        codigoGithub.textContent = '';
        codigoGithub.appendChild(document.createTextNode('\n Abrir o Codigo --- no GitHub \n'));
        codigoGithub.href = 'https://github.com/improgram/casadocodigo/blob/master/Capitulo8/085Topico9.3_IMC.html \n';
    resultado();
    }


    /*
    Sim eu criei alguma coisa diferente de tudo que ja vi.
    Utilizei Html, Css e JavaScript e GitHub, aprofundando conhecimentos na manipulação do DOM.
    Incessante buscando:
        - Reutilização de código o script possui mais de 1000 linhas;
        - Regras de clean code, identação, diminuir a utilização de variavel global;
        - Maximizar a performance das páginas;
        - As buscas no Stackoverflow foi utilizada com ética e absorvendo o significado dos códigos.
        -  

    Buscar == e substituir por ===
http://opensource.locaweb.com.br/locawebstyle-v2/manual/praticas-padroes/javascript/
    */