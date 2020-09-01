
/* Faça um algoritimo que receba dois parametros, um vetor de inteiros e um numero inteiro, e retorne um vetor
contendo somente os numeros impares menores que o numero inteiro recebido*/


let lista = [5, 17, 1, 8, 15, 11, 4]
let int = 12


function solucao(array,int){
    number = int;
    let arrayImparesMenoresQueInt = []
    for (numero in array) {
        if(array[numero] % 2 !== 0 & array[numero] <= number){
            arrayImparesMenoresQueInt.sort().push(array[numero])
        }
    }
    return arrayImparesMenoresQueInt
}

console.log(solucao(lista, int))

