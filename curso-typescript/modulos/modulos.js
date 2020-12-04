"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { areaRetangulo } from './retangulo'
// import { areaCircunferencia } from './circunferencia'
const retangulo_1 = __importDefault(require("./retangulo")); // aqui eu estou importando sem {} pq eu exportei usando o default export default function areaRetangulo
const circunferencia_1 = require("./circunferencia");
console.log('Módulo carregado...');
console.log(retangulo_1.default(7, 8));
console.log(circunferencia_1.areaCircunferencia(2));
const { digaOi } = require('./novo'); // Usando a exportação no padrão commonJS
console.log(digaOi('Ana'));
//# sourceMappingURL=modulos.js.map