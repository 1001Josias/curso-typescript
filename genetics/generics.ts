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
