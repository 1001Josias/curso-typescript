"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const circunferencia_1 = require("./circunferencia");
const retangulo_1 = __importDefault(require("./retangulo"));
const { digaOi } = require("./commonJS");
digaOi();
console.log((0, circunferencia_1.areaCircunferencia)(2));
console.log((0, retangulo_1.default)(7, 8));
//# sourceMappingURL=modulos.js.map