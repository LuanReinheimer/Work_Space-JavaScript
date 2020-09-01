let xuxa = 'global'; // pode ser acessada globalmente no nosso projeto

function imprimir(){
    console.log(xuxa);
}

function outra(){
    let xuxa = 'local'; // pode ser acessada localmente no bloco/contexto
    imprimir();
    console.log(xuxa); // local
}

outra(); // ??


// Novo exemplo
let variavel = 'global';

function externa(){
    let variavel = 'local';

    function interna(){
        return variavel; // local, variaveis locais tem precedencia sobre variaveis global.
    }

    return interna;
}

let executa = externa();

console.log(executa()); // local

/*
 Estamos estudando Closures (contexto léxico de uma função)

 Closures chamamos o escopo de uma funcao.

 
*/