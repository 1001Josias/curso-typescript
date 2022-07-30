"use strict";
function echo(objeto) {
    return objeto;
}
console.log(echo("João").length);
console.log(echo(27).length);
console.log(echo({ nome: "João", idade: 27 }).length);
// Usando generics
function echoMelhorado(objeto) {
    return objeto;
}
console.log(echoMelhorado("João").length);
console.log(echoMelhorado(27));
console.log(echoMelhorado({ nome: "João", idade: 27 }));
// Usando generics com array
const avaliacoes = [2, 10, 9.3, 7.7];
avaliacoes.push(8.5);
// avaliacoes.push("54");
console.log(avaliacoes);
function imprimir(args) {
    args.forEach((value) => console.log(value));
}
imprimir([1, 2, 3]);
imprimir([1, 2, 3]);
imprimir(["a", "b", "c"]);
imprimir([
    { idade: 15, nome: "Fulano" },
    //   { idade: '17', nome: 55 },
    { idade: 16, nome: "Fulano" },
]);
imprimir([{ idade: 22, nome: "qlq nome" }]);
let chamarEcho;
chamarEcho = echoMelhorado;
chamarEcho(5);
// Class com generics
class OperacaoBinaria {
    constructor(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
}
class SomaBinaria extends OperacaoBinaria {
    executar() {
        return this.operando1 * this.operando2;
    }
}
console.log(new SomaBinaria(5, 6).executar());
class DiferencaEntreDatas extends OperacaoBinaria {
    getTime(date) {
        return new Date(date).getTime();
    }
    executar() {
        const time1 = this.getTime(this.operando1);
        const time2 = this.getTime(this.operando2);
        return `${Math.ceil(Math.abs(time1 - time2) / 1000 / 60 / 60 / 24)} dias`;
    }
}
console.log(new DiferencaEntreDatas(new Date("07/06/2022"), new Date("07/16/2022")).executar());
// console.log(new OperacaoBinaria(5, 6).executar());
// console.log(new OperacaoBinaria("Bom ", "dia").executar());
// console.log(new OperacaoBinaria({}, {}).executar());
class Fila {
    constructor(...args) {
        this.fila = args;
    }
    entrar(elemento) {
        this.fila.push(elemento);
    }
    proximo() {
        return this.fila.shift();
    }
    imprimir() {
        console.log(this.fila);
    }
}
const fila = new Fila("Ana", "Marta", "João", "Juliana");
fila.imprimir();
console.log(fila.proximo());
fila.imprimir();
console.log(fila.proximo());
fila.imprimir();
console.log(fila.proximo());
fila.imprimir();
console.log(fila.proximo());
fila.imprimir();
const novaFila = new Fila(1, 2, 3, 4, 5);
novaFila.imprimir();
class Mapa {
    constructor() {
        this.mapa = new Array();
    }
    imprimir() {
        console.log(this.mapa);
    }
    limpar() {
        this.mapa;
    }
    colocar(item) {
        const resultado = this.obter(item.chave);
        if (resultado) {
            resultado.valor = item.valor;
        }
        else {
            this.mapa.push(item);
        }
    }
    obter(chave) {
        return this.mapa.filter((item) => item.chave === chave)[0] || null;
    }
}
const mapa = new Mapa();
mapa.colocar({ chave: 1, valor: "Pedro" });
mapa.imprimir();
mapa.colocar({ chave: 2, valor: "Rebeca" });
mapa.colocar({ chave: 3, valor: "Maria" });
mapa.colocar({ chave: 1, valor: "Gustavo" });
console.log(mapa.obter(2));
mapa.limpar();
mapa.imprimir();
//# sourceMappingURL=generics.js.map