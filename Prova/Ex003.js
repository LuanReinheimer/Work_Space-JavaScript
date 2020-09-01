/*
Crie um algoritmo que recebe uma palavra (string) e retorne o tamanho do prefixo mais longo que também é um sufixo, se a resposta for zero o algoritmo deve retornar -1:

solucao("abcdcba") → retorna 3 (O maior prefixo == sufixo é "abc")
solucao("abcda") → retorna 1 (O maior prefixo == sufixo é "a")
solucao("abbd") → retorna -1 (Nenhum prefixo == sufixo)
O prefixo não deve sobrepor o sufixo:

solucao("aaaa") → retorna 2 (O maior prefixo == sufixo é "aa")
solucao("aa") → retorna 1 (O maior prefixo == sufixo é "a")
solucao("a") → retorna -1 (Nenhum prefixo == sufixo)*/




let palavra = 'aaaa'

function solucao(palavra) {
    for (let letra = Math.floor(palavra.length / 2); letra > 0; letra--) {
        let prefixo = palavra.slice(0, letra);
        let suffixo = palavra.slice(-letra).split('').reverse().join('');
        console.log(prefixo)
        console.log(suffixo)
        if (prefixo === suffixo) {
            return letra;
        }
    }
    return -1;
}

console.log(solucao(palavra))

