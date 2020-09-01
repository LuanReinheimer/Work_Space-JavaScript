// Usando a API DOM, para nos acessar o documento .html e manipulalo.

let a = document.querySelector('.link'); // Acessando o Document .html, Obtendo o primeiro elemento do documento com a class .link.

//console.log(a.innerText); // Obtenha o texto interno de um elemento, neste caso da variavel a.

//console.log(a.parentNode); //Retorna o elemento pai o body


//console.log(a.parentNode.parentNode); // Retorna o elemento pai o html

//console.log(a.parentNode.parentNode.parentNode); // Retorna o elemento pai o Document

//console.log(a.parentNode.parentNode.parentNode.parentNode); // null

//console.log(a.parentNode.parentNode.childNodes); // Retorna o elemento pai o Document, e retorna os seus filhos.

//console.log(a.parentNode.parentNode.firstChild); // Retorna o primeiro filho o head

//console.log(a.firstChild); // Retorna o primeiro filho do a.

//console.log(a.parentNode.parentNode.lastChild); // body

//console.log(a.parentNode.parentNode.firstChild.nextSibling.firstChild.nextSibling);

console.log(a.parentNode.parentNode.firstChild.nextSibling.previousSibling);  // proximo irmao nextSibling irmao anterior previousSibling
               //body      HTML        head        body         head  
