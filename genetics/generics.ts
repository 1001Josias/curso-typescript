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
