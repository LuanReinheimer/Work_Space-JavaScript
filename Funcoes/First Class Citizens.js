//Funacao é um elemento da programacao de realizer uma acao.


function somar(num1, num2){
    return num1 + num2;
}

let res = somar(4, 6);
//console.log(res);

//console.log(somar(10, 5));

// Exemplo 1

const executar = somar;

//console.log(executar(8, 7));


// Exemplo 2

function subtrair(num1, num2){
    return num1 - num2;
}

function faz_algo(num1, num2, xuxa){
    return xuxa(num1, num2);
}
 
//console.log(faz_algo(5, 5, somar));
//console.log(faz_algo(8, 3, subtrair));

// Exemplo 3

function outra(z){
    return z;
}

const ret = outra(subtrair);
//console.log(ret(8, 2));


/*
Cidadãos de Primeira Classe
First-Class Citizens
Higher-Order Function
*/

function mensagem(){
    console.log('Evolua seu lado geek!');
}

function print(frase){
    console.log(frase);
}

print('Ola mundo!');

function descobrir_Tipo(type){
    console.log(typeof(type))
}

descobrir_Tipo(2);


let valores = [1, 3.4, true, somar];

for(let i = 0; i < valores.length; i++){
    descobrir_Tipo(valores[i]);
}

