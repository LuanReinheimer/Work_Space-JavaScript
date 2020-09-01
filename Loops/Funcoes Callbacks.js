const cursos = [
    'Programação para Leigos',
    'Algoritmos e Lógica de Programação',
    'Programação em C',
    'Programação em Java',
    'Programação em Python',
    'Banco de Dados',
    'Programação Web com Django Framework',
    'Programação em JavaScript'
]

function apresentar(curso, indice){
    console.log(`${indice + 1} - ${curso}`);
}
// forEach = para cada elemento
// CALLBACK
cursos.forEach(apresentar); // Aqui está ocorrendo o callback

//Usando lambda
 cursos.forEach(function(curso, indice){
     console.log(`${indice + 1} - ${curso}`);
});

//Usando arrow
cursos.forEach((curso, indice) => console.log(`${indice + 1} - ${curso}`));


// for in
const precos = [23.55, 78.23, 899.43, 12.89, 5.23, 67.45];
let menores = []

for(let p in precos){
    if(precos[p] < 50){
        menores.push(precos[p]);
    }
}


// For antigo
for(let i = 0; i < precos.length; i++){
    if(precos[i] < 50){
        menores.push(precos[i]);
    }
}

console.log(menores);


//Forma 1 e mais simples
menores = precos.filter(function(preco){
    return preco < 50;
});

console.log(menores);

//Forma 2

menores = precos.filter(preco => preco < 50); // callback

console.log(menores);

