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
};
saldar(pessoa);
mudarNome(pessoa);
saldar({ nome: "Joana", idade: 55 });
//# sourceMappingURL=interfaces.js.map