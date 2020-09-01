//====================================================================
// ETAPA 1 Anotacoes de referencias para montar a aplicacao.

// 1) Temos que referenciar o input.
let input = document.querySelector('input[name=tarefa]');


// 2) Temos que referenciar o button.
let btn = document.querySelector('#botao');


// 3) Temos que referenciar a lista.
let lista = document.querySelector('#lista');

// Variavel global.
let card = document.querySelector('.card'); // recupera os card pos os span são filho de card

//======================================================================
/* JS Tenta acessar o local Storage, procura o banco de dados 'tarefas' se tiver 
transforma em um array e coloca aqui caso nao exista coloque um array vazio.*/
let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

function renderizarTarefas() {
    // Limpar a listagem de itens antes de renderizar novamente a tela
    lista.innerHTML = '';

    for (tarefa of tarefas) {
        // criar o item da lista
        let itemLista = document.createElement('li');

        // Adicionar classe nos item da lista
        itemLista.setAttribute('class', 'list-group-item list-group-item-action');

        // Adicionar evento de click no item da lista

        itemLista.onclick = function(){
            deletarTarefa(this);
        }

        // Criar um texto.
        let itemTexto = document.createTextNode(tarefa);

        // Adicionar o texto no item da lista
        itemLista.appendChild(itemTexto);

        // Adicionar o item da lista na lista
        lista.appendChild(itemLista);
    }
}

// Executando a funcao para renderizar as tarefas
    renderizarTarefas();

//====================================================================

//ETAPA 2 Anotacoes de referencias para montar a aplicacao.

// 1) Precisamos "escutar" o evento de clique no botão
btn.onclick = function () {
    // 2) Precisamos capturar o valor digitado pelo user no input
    let novaTarefa = input.value;
    // Condicional onde verifica se o campo do input esta vazio.
    if (novaTarefa !== "") {
        // 3) Precisamos atualizar a nova tarefa na lista (array) de tarefas e renderizar a tela.
        tarefas.push(novaTarefa);

        // Executando a funcao para renderizar
        renderizarTarefas();

        // 4) Limpando o input.
        input.value = ''

        // Executando a funcao para remover as mensagens de span.
        removerSpans();

        // Salva os novos dados no storage;
        salvarDadosNoStorage();
        
    }else{
        // Executando a funcao para remover as mensagens de span.
        removerSpans();


        let span = document.createElement('span');
        span.setAttribute('class', 'alert alert-warning');

        let msg = document.createTextNode('Você precisa informar a tarefa!');
        
        span.appendChild(msg);
        card.appendChild(span);
    }
}

//====================================================================
// Remover spans da tela.

function removerSpans(){
    let spans = document.querySelectorAll('span'); // recupera os spans, para removelos.

    //iterando dentro do array de spans para remover 1 a 1.
    // for(let i in spans) {
    //    card.removeChild(spans[i]);
    // }

    for(let i = 0; i < spans.length; i++){
        card.removeChild(spans[i]);
    }
}

//====================================================================

function deletarTarefa(tar){
    // Remove a tarefa do array
    tarefas.splice(tarefas.indexOf(tar.textContent), 1);
    // renderizar novamente a tela
    renderizarTarefas();

    // Salva os novos dados no storage;
    salvarDadosNoStorage();
}

//====================================================================

function salvarDadosNoStorage(){
    // todo navegador Web possui esta capacidade.
    // Precisa passar um JSON pois nao pode inserir o array direto.
    localStorage.setItem('tarefas', JSON.stringify(tarefas));

}






