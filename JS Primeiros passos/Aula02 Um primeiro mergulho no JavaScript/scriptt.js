
// Atribuído um número aleatório entre 1 e 100, calculado usando um algoritmo matemático
var numeroAleatorio = Math.floor(Math.random() * 100) + 1;

/*As próximas três variáveis são criadas para guardar uma referência para os parágrafos resultantes em nosso HTML, 
e são usadas para inserir valores nos parágrafos no código:*/
var palpites = document.querySelector('.palpites');
var ultimoResultado = document.querySelector('.ultimoResultado');
var baixoOuAlto = document.querySelector('.baixoOuAlto');

/*As próximas três variáveis são criadas para guardar uma referência para os parágrafos resultantes em nosso HTML, 
e são usadas para inserir valores nos parágrafos no código:*/
var envioPalpite = document.querySelector('.envioPalpite');
var campoPalpite = document.querySelector('.campoPalpite');

/*As últimas duas variáveis (contagemPalpites e botaoReinicio) são usadas para 
armazenar a contagem dos palpites do usuário, e o outro é uma referência para o botão de reset, que não existe ainda (mas irá existir)*/
var contagemPalpites = 1;
var botaoReinicio;

campoPalpite.focus();

function conferirPalpite() {
    /*A primeira linha (linha 2 no código acima) declara uma variável chamada palpiteUsuario e define seu valor 
    igual ao valor inserido pelo jogador no campo de texto. Nós também rodamos esse valor através do método embutido Number(), 
    apenas para ter certeza de que o valor inserido é um número.*/
    var palpiteUsuario = Number(campoPalpite.value);

    if (contagemPalpites === 1) {
        palpites.textContent = 'Palpites anteriores: ';
    }
    palpites.textContent += palpiteUsuario + ' ';

    if (palpiteUsuario === numeroAleatorio) {
        ultimoResultado.textContent = 'Parabéns! Você acertou!';
        ultimoResultado.style.backgroundColor = 'green';
        baixoOuAlto.textContent = '';
        configFimDeJogo();
    } else if (contagemPalpites === 10) {
        ultimoResultado.textContent = '!!!FIM DE JOGO!!!';
        baixoOuAlto.textContent = '';
        configFimDeJogo();
    } else {
        ultimoResultado.textContent = 'Errado!';
        ultimoResultado.style.backgroundColor = 'red';
        if (palpiteUsuario < numeroAleatorio) {
            baixoOuAlto.textContent = 'Seu palpite está muito baixo!';
        } else if (palpiteUsuario > numeroAleatorio) {
            baixoOuAlto.textContent = 'Seu palpite está muito alto!';
        }
    }
    contagemPalpites++;
    campoPalpite.value = '';
    campoPalpite.focus();
}

function configFimDeJogo() {
/*As primeiras duas linhas desabilitam a entrada de texto do formulário e o clique do botão, definindo a propriedade disabled (desabilitado) 
de cada um como true (verdadeiro). Isso é necessário, pois se não o fizermos, o usuário poderia submeter mais palpites depois do jogo ter terminado, o que iria bagunçar as coisas.*/
    campoPalpite.disabled = true;
    envioPalpite.disabled = true;

/*As próximas três linhas geram um novo elemento <button>, define o texto de seu rótulo como "Iniciar novo jogo", e o adiciona ao final do nosso HTML existente.*/
    botaoReinicio = document.createElement('button');
    botaoReinicio.textContent = 'Iniciar novo jogo';
    document.body.appendChild(botaoReinicio);

/*A linha final define um monitor de evento (event listener) em nosso botão, para que quando seja clicado, uma função chamada reiniciarJogo() seja executada.*/
    botaoReinicio.addEventListener('click', reiniciarJogo);
}

//Esse longo bloco de código redefine completamente tudo do modo como era no início do jogo, para que o jogador possa jogá-lo novamente. Ele:
function reiniciarJogo() {
//Coloca o valor da variável contagemPalpites novamente igual a 1.
    contagemPalpites = 1;

//Limpa todos os parágrafos de informativos.
    var reiniciarParas = document.querySelectorAll('.resultadoParas p');
    for (var i = 0 ; i < reiniciarParas.length ; i++) {
      reiniciarParas[i].textContent = '';
    }

//Remove o botão resete do nosso código.
    botaoReinicio.parentNode.removeChild(botaoReinicio);

/*Habilita os elementos do formulários, esvazia e direciona o foco ao campo de texto, pronto para que um novo palpite seja inserido.*/
    campoPalpite.disabled = false;
    envioPalpite.disabled = false;
    campoPalpite.value = '';
    campoPalpite.focus();

//Remove a cor de fundo do parágrafo ultimoResultado
    ultimoResultado.style.backgroundColor = 'white';
    
/*Gera um novo número aleatório para que o jogador não esteja tentando adivinhar o mesmo número novamente!*/
    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
  }