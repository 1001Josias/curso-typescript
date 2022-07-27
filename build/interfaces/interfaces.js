"use strict";
function saldar(pessoa) {
    console.log(pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = "Maria";
}
let pessoa = {
    nome: "João",
    idade: 27,
    saldar(sobrenome) {
        console.log(sobrenome);
    },
};
saldar(pessoa);
mudarNome(pessoa);
// saldar({ nome: "Joana", idade: 55 });
pessoa.saldar("Pedro");
class Cliente {
    constructor() {
        this.nome = "Maria";
        this.ultimaCompra = new Date();
    }
    saldar(sobrenome) {
        const message = `Olá ${this.nome} ${sobrenome}, seja bem vinda! \n\n Sua última compra foi ${this.ultimaCompra}`;
        console.log(message);
    }
}
const cliente = new Cliente();
cliente.saldar("Helena");
let potencia;
potencia = (base, exp) => Math.pow(base, exp);
console.log(potencia(3, 10));
class RealA {
    a() { }
}
class RealAB {
    a() { }
    b() { }
}
class RealABC {
    a() { }
    b() { }
    c() { }
}
function test(abc) {
    console.log(abc);
}
test(new RealABC());
class AbstrataABD {
    a() { }
    b() { }
}
Object.prototype.log = function () {
    console.log(this.toString());
};
let x = 2;
let y = 3;
let z = 4;
x.log();
y.log();
z.log();
let cli = {
    nome: "Pedro",
    toString() {
        return this;
    },
};
cli.log();
//# sourceMappingURL=interfaces.js.map