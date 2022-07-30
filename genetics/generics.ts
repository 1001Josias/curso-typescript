function echo(objeto: any) {
  return objeto;
}

console.log(echo("João").length);
console.log(echo(27).length);
console.log(echo({ nome: "João", idade: 27 }).length);

// Usando generics
function echoMelhorado<T>(objeto: T): T {
  return objeto;
}

console.log(echoMelhorado("João").length);
console.log(echoMelhorado(27));
console.log(echoMelhorado({ nome: "João", idade: 27 }));

// Usando generics com array
const avaliacoes: Array<number> = [2, 10, 9.3, 7.7];
avaliacoes.push(8.5);
// avaliacoes.push("54");
console.log(avaliacoes);

function imprimir<T>(args: T[]): void {
  args.forEach((value) => console.log(value));
}

imprimir([1, 2, 3]);
imprimir<number>([1, 2, 3]);
imprimir<string>(["a", "b", "c"]);
imprimir<{ nome: string; idade: number }>([
  { idade: 15, nome: "Fulano" },
  //   { idade: '17', nome: 55 },
  { idade: 16, nome: "Fulano" },
]);

type Aluno = { nome: string; idade: number };

imprimir<Aluno>([{ idade: 22, nome: "qlq nome" }]);

// Tipo função com generics
type Echo = <T>(object: T) => T;
let chamarEcho: Echo;

chamarEcho = echoMelhorado;
chamarEcho<number>(5);

// Class com generics
abstract class OperacaoBinaria<T, R> {
  constructor(public operando1: T, public operando2: T) {}

  abstract executar(): R;
}

class SomaBinaria extends OperacaoBinaria<number, number> {
  executar(): number {
    return this.operando1 * this.operando2;
  }
}

console.log(new SomaBinaria(5, 6).executar());

class DiferencaEntreDatas extends OperacaoBinaria<Date, string> {
  getTime(date: Date): number {
    return new Date(date).getTime();
  }
  executar(): string {
    const time1 = this.getTime(this.operando1);
    const time2 = this.getTime(this.operando2);
    return `${Math.ceil(Math.abs(time1 - time2) / 1000 / 60 / 60 / 24)} dias`;
  }
}

console.log(
  new DiferencaEntreDatas(
    new Date("07/06/2022"),
    new Date("07/16/2022")
  ).executar()
);

// console.log(new OperacaoBinaria(5, 6).executar());
// console.log(new OperacaoBinaria("Bom ", "dia").executar());
// console.log(new OperacaoBinaria({}, {}).executar());

class Fila<T extends number | string> {
  private fila: Array<T>;
  constructor(...args: T[]) {
    this.fila = args;
  }

  entrar(elemento: T): void {
    this.fila.push(elemento);
  }
  proximo(): T | undefined {
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

// const filaErrada = new Fila(false, true);

// Desafio Mapa
// Array de objetos (chave/valor) -> itens
// Métodos: obter(chave), colocar({C,V}), limpar(), imprimir()

type Par<C, V> = { chave: C; valor: V };

class Mapa<C, V> {
  mapa: Array<Par<C, V>> = new Array<Par<C, V>>();
  imprimir() {
    console.log(this.mapa);
  }

  limpar() {
    this.mapa;
  }

  colocar(item: Par<C, V>) {
    const resultado = this.obter(item.chave);
    if (resultado) {
      resultado.valor = item.valor;
    } else {
      this.mapa.push(item);
    }
  }

  obter(chave: C): Par<C, V> | null {
    return this.mapa.filter((item) => item.chave === chave)[0] || null;
  }
}

const mapa = new Mapa<number, string>();
mapa.colocar({ chave: 1, valor: "Pedro" });
mapa.imprimir();
mapa.colocar({ chave: 2, valor: "Rebeca" });
mapa.colocar({ chave: 3, valor: "Maria" });
mapa.colocar({ chave: 1, valor: "Gustavo" });

console.log(mapa.obter(2));
mapa.limpar();
mapa.imprimir();
