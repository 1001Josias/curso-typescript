class Data {
  dia: number;
  mes: number;
  ano: number;
  constructor(dia: number, mes: number, ano: number) {
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
  constructor(
    public dia: number = 5,
    public mes: number = 6,
    public ano: number = 2025
  ) {}
}

const casamentoEsperto = new DataEsperta();
console.log(casamentoEsperto);

const aniversarioEsperto = new DataEsperta(1, 1, 1970);
console.log(aniversarioEsperto);
console.log((aniversarioEsperto.dia = 10));
console.log(aniversarioEsperto);

//Desafio Classe Produto
class NovoProduto {
  constructor(
    public nome: string,
    public preco: number,
    public desconto: number = 0
  ) {}

  public resumo(): string {
    const desconto: string =
      this.desconto > 0
        ? `(${this.desconto * 100}% off)`
        : "oferta imperdível!";
    return `${this.nome} custa R$${this.precoComDesconto()} ${desconto}`;
  }

  precoComDesconto(): number {
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
  private velocidadeAtual: number = 0;

  constructor(
    public narca: string,
    public modelo: string,
    public velocidadeMaxima: number = 200
  ) {}

  protected alterarVelocidade(delta: number): number {
    const novaVelocidade = this.velocidadeAtual + delta;
    const velocidadeValida =
      novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;
    if (velocidadeValida) {
      this.velocidadeAtual = novaVelocidade;
    } else {
      this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
    }
    return this.velocidadeAtual;
  }

  public acelerar() {
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
  constructor(modelo: string, velocidadeMaxima: number) {
    super("Ferrari", modelo, velocidadeMaxima);
  }
  public acelerar(): number {
    return this.alterarVelocidade(20);
  }
  public frear(): number {
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
  private _idade: number = 0;

  get idade(): number {
    return this._idade;
  }

  set idade(valor: number) {
    if (valor > 0 && valor <= 120) {
      this._idade = valor;
    }
  }
}

const pessoa1 = new Pessoa();
pessoa1.idade = 50;
console.log(pessoa1.idade);

class Matematica {
  PI: number = 3.1416;
  areaCirc(raio: number): number {
    return this.PI * raio * raio;
  }
}

const m1 = new Matematica();
m1.PI = 4.2;
console.log(m1.areaCirc(4), m1.PI);

class MatematicaStatica {
  static PI: number = 3.1416;
  static areaCirc(raio: number): number {
    return this.PI * raio * raio;
  }
}

const area = MatematicaStatica.areaCirc(4);
const pi = MatematicaStatica.PI;
console.log(area, pi);

// Classe Abstrata
abstract class Calculo {
  protected resultado: number = 0;

  abstract executar(...number: number[]): void;

  getResultado(): number {
    return this.resultado;
  }
}

class Soma extends Calculo {
  executar(...number: number[]): void {
    this.resultado = number.reduce(
      (previousValue, currentValue) => previousValue + currentValue
    );
  }
}

class Multiplicacao extends Calculo {
  executar(...number: number[]): void {
    this.resultado = number.reduce(
      (previousValue, currentValue) => previousValue * currentValue
    );
  }
}

let calc: Calculo = new Soma();
calc.executar(2, 2, 2, 2);
console.log(calc.getResultado());

calc = new Multiplicacao();
calc.executar(2, 2, 2, 2);
console.log(calc.getResultado());
