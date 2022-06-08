"use strict";
const nome = 'João';
console.log(nome);
const idade = 30;
console.log(idade);
const gostaDeSalada = true;
console.log(gostaDeSalada);
// array
const listaDeCompra = ['feijão', 'arroz', 'açucar'];
console.log(listaDeCompra);
// tupla
const testeTupla = ['gol quadrado', 4, true];
console.log(testeTupla);
// enum
var Cor;
(function (Cor) {
    Cor[Cor["azul"] = 0] = "azul";
    Cor[Cor["amarelo"] = 1] = "amarelo";
    Cor[Cor["preto"] = 2] = "preto";
    Cor[Cor["branco"] = 3] = "branco";
    Cor[Cor["cinza"] = 4] = "cinza";
})(Cor || (Cor = {}));
let carro = 'bmw';
console.log(carro);
carro = { marca: 'bmw', ano: 2022, };
console.log(carro);
// funções
function retornaMeuNome() {
    // return idade
    return nome;
}
console.log(retornaMeuNome());
function digaOi() {
    console.log('oi');
    // return nome
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
// console.log(multiplicar(10, '5'))
console.log(multiplicar(10, 5));
// tipo função
let calculo;
// calculo = digaOi
// calculo()
// calculo = 1
// calculo = []
// calculo = '1'
calculo = multiplicar;
console.log(calculo(10, 3));
// objetos
let usuário = {
    nome: 'Fulano',
    idade: 30
};
// usuário = {}
// usuário = {
//     name: 'De Tal',
//     age: 500
// }
console.log(usuário);
usuário = {
    idade: 100,
    nome: 'Maria'
};
console.log(usuário);
let funcionarios = {
    supervisores: ['Maria', 'João', 'José', 'Marta'],
    baterPonto: (hora) => {
        if (hora <= 8) {
            return 'Ponto normal';
        }
        else {
            return 'Fora do horário';
        }
    }
};
console.log(funcionarios.supervisores);
console.log(funcionarios.baterPonto(15));
// funcionarios = {}
let funcionarios2 = {
    supervisores: ['Fulano', 'De', 'Tal'],
    baterPonto: (hora) => {
        if (hora <= 8) {
            return 'Ponto normal';
        }
        else {
            return 'Fora do horário';
        }
    }
};
console.log(funcionarios2.supervisores);
console.log(funcionarios2.baterPonto(2));
// Union Types
let nota;
nota = 10;
console.log(`Minha nota é ${nota}`);
nota = '10';
console.log(`Minha nota é ${nota}`);
// nota = true
if (typeof nota === 'number') {
    console.log('É um número!');
}
else {
    console.log(typeof nota);
}
// never
function falhar(msg) {
    throw new Error(msg);
}
const produtoA = {
    nome: 'Sabão',
    preco: 5,
    validarProduto() {
        if (!this.nome || this.nome.trim().length == 0) {
            falhar('Precisa ter um nome');
        }
        if (this.preco < 0) {
            falhar('Preço inválido');
        }
    }
};
produtoA.validarProduto();
let altura = 12;
// altura = null
let alturaOpcional = 12;
alturaOpcional = null;
const contato1 = {
    nome: 'Fulano',
    tel1: '98765432',
    tel2: null
};
console.log(contato1.nome);
console.log(contato1.tel1);
console.log(contato1.tel2);
let podeSerNulo = null;
podeSerNulo = 12;
console.log(podeSerNulo);
podeSerNulo = 'abc';
console.log(podeSerNulo);
let contaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor;
    }
};
let correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
correntista.contaBancaria.depositar(4);
console.log(correntista);
