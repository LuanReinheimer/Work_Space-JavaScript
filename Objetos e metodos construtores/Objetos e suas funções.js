
const curso = {
    nome: 'Programação em JavaScript',
    horas: 25,
    preco: 27.99
}

// console.log(curso);

// console.log(typeof(curso)); Mostra o tipo no caso um object.

// console.log(Object.keys(curso));  Mostra as chaves do objeto.

// console.log(Object.values(curso)); Mostra os valores repassados.

// console.log(Object.entries(curso)); Mostra a chave e valor do objeto.

//============================================================================
// iterando sobre um objeto.

// Object.entries(curso).forEach(par => {
//     console.log(`${par[0]}: ${par[1]}`);
// }); 

// Object.entries(curso).forEach(([chave, valor]) => {
//     console.log(`${chave}: ${valor}`);
// });

//============================================================================
// Modificando e adicionando um novo atributo.

// curso.nome = 'Criação de APIs Rest com Django Rest Framework';
// console.log(curso);

// Adicionando um novo atributo ao objeto que nao pode ser modificado apenas 'read only'.

// Object.defineProperty(curso, 'publicacao', {
//     enumerable: true,   // Estando como True o atributo vai aparecer como uma chave normal do nosso objeto, se for false ele ficara invisivel.
//     writable: false,    // Se ele pode ser sobre escrito neste caso não pode pois esta False.
//     value: '07/12/2019' // E por fim o valor da chave 'publicacao'.
// });

// Tentando modificar o atributo estatico.

// curso.publicacao = '01/01/2020';
// console.log(curso);

// console.log(curso.publicacao);

//============================================================================
// Criando um objeto vazio

// const outro = {}

// Object.defineProperty(outro, '', {

// });

//============================================================================

// Object.freeze(curso); // Congelando o objeto para que nao possa ser modificado.

// curso.nome = 'Dança da Garrafa';

// console.log(curso);

//============================================================================

// Criando um array de objetos.

const usuarios = [
    {nome: 'Aline Moraes', empresa: 'Geek University'},
    {nome: 'Ricardo Brandão', empresa: 'Google'},
    {nome: 'Felipe Xavier', empresa: 'Sony'}
]

//console.log(usuarios);

//console.table(usuarios);

console.table(usuarios); // Construindo uma tabela com uma funcionalidade do proprio JS.
console.table(curso);
