namespace Scopo {
  export interface Pessoa {
    nome: string;
    idade?: number;
    [prop: string]: any;
    saldar: (sobrenome: string) => void;
  }
}

function saldar(pessoa: Scopo.Pessoa): void {
  console.log(pessoa.nome);
}

function mudarNome(pessoa: Scopo.Pessoa): void {
  pessoa.nome = "Maria";
}

let pessoa: Scopo.Pessoa = {
  nome: "João",
  idade: 27,
  saldar(sobrenome) {
    console.log(sobrenome);
  },
};

saldar(pessoa);
mudarNome(pessoa);
// saldar({ nome: "Joana", idade: 55 });
pessoa.saldar("Pedro");
