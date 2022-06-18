// let & const

// console.log(seraQuePode)
let seraQuePode = "?";
console.log(seraQuePode);

let estaFrio = true;

if (estaFrio) {
  let acao = "Colocar casaco";
  console.log(acao);
}
// console.log(acao)

const cpf: string = "123.456.007-89";

// cpf = '155.555.666-55'

console.log(cpf);

function somar(a: number, b: number): number {
  return a + b;
}
console.log(somar(1, 5));

const subtrair = (a: number, b: number): number => a - b;
console.log(subtrair(1, 5));

const saldacao = () => console.log("Olá!");
saldacao();

// const falarCom = pessoa: string => console.log('Olá ' + pessoa)
const falarCom = (pessoa: string) => console.log("Olá " + pessoa);
falarCom("João");

// function normalComThis(){
//     console.log(this)
// }
// normalComThis()

// const normalComThisEspecial = normalComThis.bind({nome: 'José'})
// normalComThisEspecial()

// // contexto lexico
// console.log(this)
// const  arrowComThis = () => console.log(this)
// arrowComThis()

// const  arrowComThisEspecial = arrowComThis.bind({nome: 'Maria'})
// arrowComThisEspecial()

function contagemRegressiva(
  inicio: number = 5,
  fim: number = inicio - 5
): void {
  console.log(inicio);
  while (inicio > fim) {
    inicio--;
    console.log(inicio);
  }
}

contagemRegressiva();
contagemRegressiva(3);

//rest & spread
const numbers = [1, 10, 55, -5];

console.log(Math.max(...numbers));

const turmaA: string[] = ["Maria", "João", "José"];
const turmaB: string[] = ["Priscila", "Carla", ...turmaA, "Fernanda"];

console.log(turmaA);
console.log(turmaB);

function retornaArray(...args: number[]): number[] {
  return args;
}
const numeros: number[] = retornaArray(5, 6, 8, 1, 22, 79, 23, 589);
console.log(numeros);

console.log(retornaArray(...numbers));

// rest & spread (tupla)
const tupla: [number, string, boolean] = [1, "abc", true];

function tuplaParam1(a: number, b: string, c: boolean): void {
  console.log(`1) ${a} ${b} ${c}`);
}
tuplaParam1(...tupla);

function tuplaParam2(...params: [number, string, boolean]): void {
  console.log(Array.isArray(params));
  console.log(`2) ${params[0]} ${params[1]} ${params[2]}`);
}
tuplaParam2(...tupla);

// destructuring (array)
const caracteristicas = ["Motor Zetec 1.8", 2020];

// const motor = caracteristicas[0]
// const ano = caracteristicas[1]

const [motor, ano] = caracteristicas;

console.log(motor);
console.log(ano);

// destructuring (object)
const item = {
  nome: "Placa de vídeo 3060",
  preco: 2000,
  caracteristica: {
    w: 555,
  },
};

const {
  nome: descricao,
  preco: valor,
  caracteristica: { w },
} = item;

console.log(descricao);
console.log(valor);

// template string
const usuarioId: string = "Usuário";

const notificacoes: number = 9;

// const boasVindas = "Boas vindas " + usuarioId + " Notificações: " + notificacoes;

// console.log(boasVindas)

const boasVindas = `Boas vindas ${usuarioId} Notificações: ${notificacoes}`;
console.log(boasVindas);

// callback
function esperar3s(callback: (dado: string) => void) {
  setTimeout(() => {
    callback("3s depois...");
  }, 3000);
}

esperar3s((resuldado: string) => {
  console.log(resuldado);
});

// Promise
function esperar3sPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("3s depois promise...");
    }, 3000);
  });
}

esperar3sPromise().then(console.log);

fetch("https:swapi.dev/api/people/1")
  .then((res) => res.json())
  .then((personagens) => personagens.films)
  .then((films) => fetch(films[0]))
  .then((resFilm) => resFilm.json())
  .then(console.log)
  .catch(console.error);
