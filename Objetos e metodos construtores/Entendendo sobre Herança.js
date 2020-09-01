
// Exemplo de como criar as classes antes de crialas realmente.
/*
funcionarios
    nome,       --  
    sobrenome,  -- Repeticao
    email,      --
    cpf,        --
    função,
    registro

clientes
    nome,       --
    sobrenome,  -- Repeticao
    email,      --
    cpf,        --
    renda

funções
    descrição
    salário
*/

// Criando as classes conforme levantado os requisitos.

class Funcao{
    constructor(descricao, salario){
        this._descricao = descricao;
        this._salario = salario;
    }

    get descricao(){
        return this._descricao;
    }

    set descricao(descricao){
        this._descricao = descricao;
    }

    get salario(){
        return this._salario;
    }

    set salario(salario){
        this._salario = salario;
    }
}

// Classe que pode representar um funcionario quanto um cliente, neste caso sao 'PESSOA'.

class Pessoa{
    constructor(nome, sobrenome, email, cpf){
        this._nome = nome;
        this._sobrenome = sobrenome;
        this._email = email;
        this._cpf = cpf;
    }

    get nome(){
        return this._nome;
    }

    set nome(nome){
        this._nome = nome;
    }

    get sobrenome(){
        return this._sobrenome;
    }

    set sobrenome(sobrenome){
        this._sobrenome = sobrenome;
    }

    get email(){
        return this._email;
    }

    set email(email){
        this._email = email;
    }

    get cpf(){
        return this._cpf;
    }

    set cpf(cpf){
        this._cpf = cpf;
    }

    // Métodos extras.
    get nome_completo(){
        return this._nome + ' ' + this._sobrenome;
    }

    set nome_completo(nome_completo){
        nome_completo = nome_completo.split(' '); // transforma a string em um array onde cada elemento do array será as partes da string separadas por espaço
        this._nome = nome_completo.shift();       // Remove e retorna o elemento da posição 0 do array
        this._sobrenome = nome_completo.join(' ');// junta os elementos do array em uma string separando cada elemento por espaço
    }

    imprimir_dados(){
        console.log(`${this.nome} ${this.sobrenome}`);
    }

    imprimir_contato(){
        console.log(`${this.nome_completo} ${this._email}`);
    }


}
// Entrando na parte da HERANÇA.

class Funcionario extends Pessoa{ // CLASSE FUNCIONARIO HERDA DA CLASSE PESSOA, um funcionario é uma pessoa desta maneira irar herdar todos os atributos da classe PESSOA.
    constructor(nome, sobrenome, email, cpf, funcao, registro){
        super(nome, sobrenome, email, cpf); // Extencao os atributos.
        this._funcao = funcao;
        this._registro = registro;
    }

    get funcao(){
        return this._funcao;
    }

    set funcao(funcao){
        this._funcao = funcao;
    }

    get registro(){
        return this._registro;
    }

    set registro(registro){
        this._registro = registro;
    }
}

class Cliente extends Pessoa{
    constructor(nome, sobrenome, email, cpf, renda){
        super(nome, sobrenome, email, cpf);
        this._renda = renda;
    }
    get renda(){
        return this._renda;
    }

    set renda(renda){
        this._renda = renda;
    }
}
// Estanciando os objetos.

const c1 = new Cliente('Felicity', 'Jones', 'felicity@gmail.com', '123.456.789.00', 6789.44);
const c2 = new Cliente('Angelina', 'Jolie', 'angelina@gmail.com', '987.654.321-11', 8974.34);

console.table(c1);
console.table(c2);

//console.log(c1.nome_completo);
//console.log(c2.nome_completo);

//c1.nome_completo = 'Xuxa Meneguel';

//console.log(c1);

//c2.imprimir_dados();

const programador = new Funcao('Programador', 4899.54);
const suporte = new Funcao('Suporte', 2799.34);
const comprador = new Funcao('Comprador', 2300.20)

//console.log(programador);
//console.log(suporte);

const f1 = new Funcionario('Pedro', 'Silva', 'pedro@gmail.com','983.235.123.22', programador, 'F90er3');
const f2 = new Funcionario('Maria', 'Siqueira', 'maria@gmail.com', '345.322.987.35', suporte, 'FiduO9');


console.log(f1);
console.log(f2);

console.log(f1.funcao.salario);

f1.imprimir_dados();
c1.imprimir_contato();
