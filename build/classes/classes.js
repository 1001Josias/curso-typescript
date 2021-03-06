"use strict";
class Data {
    constructor(dia, mes, ano) {
        this.ano = ano;
        this.dia = dia;
        this.mes = mes;
    }
}
const aniversario = new Data(19, 5, 2005);
console.log(aniversario.ano);
console.log(aniversario);
const casamento = new Data(5, 6, 2025);
console.log(casamento.mes);
console.log(casamento);
class DataEsperta {
    constructor(dia = 5, mes = 6, ano = 2025) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const casamentoEsperto = new DataEsperta();
console.log(casamentoEsperto);
const aniversarioEsperto = new DataEsperta(1, 1, 1970);
console.log(aniversarioEsperto);
console.log((aniversarioEsperto.dia = 10));
console.log(aniversarioEsperto);
//Desafio Classe Produto
class NovoProduto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    resumo() {
        const desconto = this.desconto > 0
            ? `(${this.desconto * 100}% off)`
            : "oferta imperdível!";
        return `${this.nome} custa R$${this.precoComDesconto()} ${desconto}`;
    }
    precoComDesconto() {
        return this.preco * (1 - this.desconto);
    }
}
const microfone = new NovoProduto("Microfone BM800", 200);
microfone.desconto = 0.05;
const cama = new NovoProduto("Cama Box Casal", 2500, 0.1);
// console.log(microfone);
// console.log(cama);
console.log(microfone.resumo());
console.log(cama.resumo());
class Carro {
    constructor(narca, modelo, velocidadeMaxima = 200) {
        this.narca = narca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }
    alterarVelocidade(delta) {
        const novaVelocidade = this.velocidadeAtual + delta;
        const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;
        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade;
        }
        else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }
        return this.velocidadeAtual;
    }
    acelerar() {
        return this.alterarVelocidade(5);
    }
    frear() {
        return this.alterarVelocidade(-5);
    }
}
const carro1 = new Carro("Fork", "Ka", 185);
Array(50)
    .fill(0)
    .map(() => console.log(carro1.acelerar()));
Array(50)
    .fill(0)
    .map(() => console.log(carro1.frear()));
class Ferrari extends Carro {
    constructor(modelo, velocidadeMaxima) {
        super("Ferrari", modelo, velocidadeMaxima);
    }
    acelerar() {
        return this.alterarVelocidade(20);
    }
    frear() {
        return this.alterarVelocidade(-15);
    }
}
const f40 = new Ferrari("F40", 324);
console.log(f40.modelo);
console.log(f40.narca);
console.log(f40.velocidadeMaxima);
console.log(f40.acelerar());
console.log(f40.frear());
class Pessoa {
    constructor() {
        this._idade = 0;
    }
    get idade() {
        return this._idade;
    }
    set idade(valor) {
        if (valor > 0 && valor <= 120) {
            this._idade = valor;
        }
    }
}
const pessoa1 = new Pessoa();
pessoa1.idade = 50;
console.log(pessoa1.idade);
class Matematica {
    constructor() {
        this.PI = 3.1416;
    }
    areaCirc(raio) {
        return this.PI * raio * raio;
    }
}
const m1 = new Matematica();
m1.PI = 4.2;
console.log(m1.areaCirc(4), m1.PI);
class MatematicaStatica {
    static areaCirc(raio) {
        return this.PI * raio * raio;
    }
}
MatematicaStatica.PI = 3.1416;
const area = MatematicaStatica.areaCirc(4);
const pi = MatematicaStatica.PI;
console.log(area, pi);
// Classe Abstrata
class Calculo {
    constructor() {
        this.resultado = 0;
    }
    getResultado() {
        return this.resultado;
    }
}
class Soma extends Calculo {
    executar(...number) {
        this.resultado = number.reduce((previousValue, currentValue) => previousValue + currentValue);
    }
}
class Multiplicacao extends Calculo {
    executar(...number) {
        this.resultado = number.reduce((previousValue, currentValue) => previousValue * currentValue);
    }
}
let calc = new Soma();
calc.executar(2, 2, 2, 2);
console.log(calc.getResultado());
calc = new Multiplicacao();
calc.executar(2, 2, 2, 2);
console.log(calc.getResultado());
// Construtor Privado & Singleton
class Unico {
    constructor() { }
    static getInstance() {
        return Unico.instance;
    }
    agora() {
        return new Date();
    }
}
Unico.instance = new Unico();
// const errado = new Unico()
console.log(Unico.getInstance().agora());
// Atributos Somente Leitura
class Aviao {
    constructor(modelo, prefixo) {
        this.prefixo = prefixo;
        this.modelo = modelo;
    }
}
const turboHelice = new Aviao("Tu-114", "PT-ABC");
// turboHelice.modelo = "Test";
// turboHelice.prefixo = "Test 2";
console.log(turboHelice);
//# sourceMappingURL=classes.js.map