"use strict";
var Area;
(function (Area) {
    const PI = 3.14;
    function circunferencia(raio) {
        return PI * Math.pow(raio, 2);
    }
    Area.circunferencia = circunferencia;
    function retangulo(base, altura) {
        return base * altura;
    }
    Area.retangulo = retangulo;
})(Area || (Area = {}));
const PI = 2.99;
console.log(Area.circunferencia(10));
console.log(Area.retangulo(10, 20));
console.log(PI);
//# sourceMappingURL=namespaces.js.map