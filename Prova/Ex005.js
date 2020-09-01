/*A figura abaixo mostra um circuito elétrico chamado divisor de tensão, utilizando uma tensão de entrada v 
in e um número n de resistores é possível criar novos valores para as tensões de saída v out.

O número de tensões resultante é sempre uma unidade menor que a quantidade de resistores.
Os resistores podem ter valores diferentes.

Para calcular as tensões de saída é usada sempre a mesma equação, onde o numerador é a soma de todos os resistores abaixo da 
saída que se está calculando e o denominador é sempre a soma total dos resistores. Abaixo são mostradas as equações que seriam 
usadas para calcular as 3 saídas do circuito.


//Imagem


Objetivo
Crie um algoritmo utilizando estes dois atributos:

A tensão v in (número inteiro).
Um array de inteiros, representando os valores dos resistores.

Este algoritmo deve calcular todas as tensões de saída (v out) possíveis. Por exemplo, se no array de entrada existirem dois valores, o array de saída terá apenas um valor, se o array de entrada possuir 3 valores, o array de saída terá 2 valores, e assim por diante.

Exemplos
Para a entrada v in = 10 e resistores = [100, 100] temos a saída [5].
Para a entrada v in = 6 e resistores = [1000, 1000, 1000] temos a saída [4, 2].
Para a entrada v in = 12 e resistores = [1500, 100, 100, 1500] temos a saída [6.375, 6, 5.625].
*/

