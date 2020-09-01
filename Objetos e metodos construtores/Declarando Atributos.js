// Toda classe tem que possuir o metodo constructor para definir os atributos.
// Em js tudo é publico, podemos fazer acesso ao atributo etc.. mesmo fora da classe, podemos simular um atributo privado.


class Pessoa {
    constructor(nome, sobrenome){ // metodo informativo para a construçao de um objeto e os repassando como parametro.
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

class Carro {
    constructor(modelo){
        this.marca = 'Honda'; // atributo fixo na construcao do objeto
        this.modelo = modelo;
    }    
}
