"use strict";
function saldar(pessoa) {
    console.log(pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = "Maria";
}
let pessoa = {
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
//# sourceMappingURL=interfaces.js.map