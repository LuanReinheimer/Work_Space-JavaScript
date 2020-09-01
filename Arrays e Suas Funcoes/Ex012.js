
/* Escreva um algoritimo que receba dois array e retorne um terceiro array com os elementos em comum elementos com mais 
de uma ocorrencia nao devem se repetir no array de saida

Ex: entrada:[1, 4, 6, 9, 9] e [2, 4, 7, 9]
    saida: [4, 9]*/

let arr1 = [1, 4, 6, 9, 9];

let arr2 = [2, 4, 7, 9];


// forma 1

// function numerosRepetidos(arr1, arr2){

//     return [...new Set(arr1.filter(e => arr2.indexOf(e)!== -1))];
// }

// console.log(numerosRepetidos(arr1, arr2))

// forma 2

// function numerosiguais(array1, array2){
//     let array3 = [];
//     for(num in array1) {
//         if(array1[num] == array2[num]){
//             array3.push(array1[num] && array2[num])
//             console.log(array2[num])
//         }
//     }
//     return array3
// }

// console.log(numerosiguais(arr1, arr2))

//forma 3

// function numerosIdenticos(array1, array2){
//     let array3 = [];
//     let todosNumeros = array1.concat(array2);
//     for(i in todosNumeros) {
//         if(todosNumeros.indexOf(todosNumeros[i]) != i) {
//             array3.sort().push(todosNumeros[i])
//     }   
// }
// let mySet = [...new Set(array3)]
// return mySet
// }

// console.log(numerosIdenticos(arr1, arr2))

// forma 4

// function arrayParaVerificarIgualdade(array){
//     let array3 = [];
//     for(i in array) {
//         if(array.indexOf(array[i]) != i) {
//             array3.sort().push(array[i])
//     }
// }
//     return array3
// }

// function juntarDoisArray(array1, array2){
//     let arrayJuntado = array1.concat(array2);
//     return arrayJuntado
// }

// function verificaNumerosiguaisDoisArray(array1, array2){
//    let array = juntarDoisArray(array1, array2);
//    return [... new Set (arrayParaVerificarIgualdade(array))];
   
// }


// console.log(verificaNumerosiguaisDoisArray(arr1, arr2))

// teste

