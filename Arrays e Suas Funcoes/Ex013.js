
/* Dado uma matriz de numeros inteiros, faça um algotitimo que realize a soma dos elementos na diagonal da mesma

Ex: Entrada: [2,  2, 3]
             [4, -5, 6]
             [7,  8, 9]
Saida:5 */

var matriz = [[2, 2, 3],[4,-5, 6],[7, 8, 9]]
            
function SomaDiagonal(array){
   var valorl3c1 = array[2][0]
   var valorl2c2 = array[1][1]
   var valorl1c3 = array[0][2]
   return valorl3c1 + valorl2c2 + valorl1c3
}

console.log(SomaDiagonal(matriz))