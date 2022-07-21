namespace Scopo {
  export interface Pessoa {
    nome: string;
  }
}

function saldar(pessoa: Scopo.Pessoa): void {
  console.log(pessoa.nome);
}

let pessoa = {
  nome: "João",
  idade: 27,
};

saldar(pessoa);
