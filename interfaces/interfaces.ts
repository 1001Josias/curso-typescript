namespace Scopo {
  export interface Pessoa {
    nome: string;
    idade?: number;
    [prop: string]: any;
  }
}

function saldar(pessoa: Scopo.Pessoa): void {
  console.log(pessoa.nome);
}

function mudarNome(pessoa: Scopo.Pessoa): void {
  pessoa.nome = "Maria";
}

let pessoa = {
  nome: "João",
  idade: 27,
};

saldar(pessoa);
mudarNome(pessoa);
saldar({ nome: "Joana", idade: 55 });
