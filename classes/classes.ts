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
}

const microfone = new NovoProduto("Microfone BM800", 220);

const cama = new NovoProduto("Cama Box Casal", 2500, 0.1);

console.log(microfone);
console.log(cama);
