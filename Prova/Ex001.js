
/*Crie um algoritmo que recebe uma frase (string) e retorna uma nova palavra formada pela união das iniciais de cada palavra desta frase, como no exemplo a seguir:

solucao(frase) → solucao("Comprei rapadura e salsa com entusiasmo raríssimo") retorna "Crescer"

Exemplos
Para a entrada frase = "Comprei rapadura e salsa com entusiasmo raríssimo", temos a saída "Crescer".
Para a entrada frase = "Compute World Information", temos a saída "CWI".
Para a entrada frase = "world wide web", temos a saída "www".*/


// A que funcionou

function solucao(frase) {
    var testeDois= frase.split(" ");        // Divide um objeto String em um array de strings a frase inteira e separar por espacos
    var resultado;                          // Variavel declarada para receber e retornar o resultado
    console.log(testeDois)
    console.log(resultado)
    
    testeDois.forEach(function(val, i){     // iterar sobre a frase, passando uma fucao anonima que realiza as condicoes passadas
      if(resultado === undefined){
        resultado = val.substring(0,1);     /* O método substring() retorna um subconjunto de uma string entre um indice e outro, ou até o final da string, neste caso é para Pegar sempre a primeira letra da string*/
      } else {
        resultado += val.substring(0,1);    // Pegar sempre a primeira letra da string
      }
    });
      return resultado;
}

console.log(solucao('Comprei rapadura e salsa com entusiasmo raríssimo'))  // Imprimir no console a funcao com a frase passada


