const dobro = (valor: number): number => valor * 2;

console.log(dobro(10));

const dizerOla = (nome: string): string => `Olá ${nome || "Pessoa"}`;

console.log(dizerOla("Anna"));

const nums: number[] = [-3, 33, 38, 5];
console.log(Math.min(...nums));

const array: number[] = [55, 20];
array.push(...nums);
console.log(array);

const notas: number[] = [8.5, 6.3, 9.4];
const [nota1, nota2, nota3] = notas;
console.log(nota1, nota2, nota3);

const cientista: { primeiroNome: string; experiencia: number } = {
  primeiroNome: "Will",
  experiencia: 12,
};
const { experiencia, primeiroNome } = cientista;
console.log(primeiroNome, experiencia);
