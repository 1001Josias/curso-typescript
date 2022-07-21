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

class Cliente implements Scopo.Pessoa {
  nome = "Maria";
  ultimaCompra: Date = new Date();
  saldar(sobrenome: string): void {
    const message: string = `Olá ${this.nome} ${sobrenome}, seja bem vinda! \n\n Sua última compra foi ${this.ultimaCompra}`;
    console.log(message);
  }
}

const cliente: Cliente = new Cliente();

cliente.saldar("Helena");

// Interface Função
interface FuncaoCalculo {
  (a: number, b: number): number;
}

let potencia: FuncaoCalculo;

potencia = (base: number, exp: number) => Math.pow(base, exp);
console.log(potencia(3, 10));
