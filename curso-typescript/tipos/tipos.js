"use strict";
// O compilador JS faz a INFERÊNCIA dos tipos quando a variável é criada e inicializada
// EXEMPLOS
// String
var nome = 'João';
console.log(nome + ' - ' + typeof (nome));
//nome = 10 // não é permitido fazer isso
var numero = 10.1;
console.log(numero + ' - ' + typeof (numero));
var boolean = true;
console.log(boolean + ' - ' + typeof (boolean));
// Quando a variável não é inicializada o JS transforma a variável de forma dinâmica
var variavelDinamica;
variavelDinamica = 10;
console.log(variavelDinamica + ' - ' + typeof (variavelDinamica));
variavelDinamica = 'Luiz';
console.log(variavelDinamica + ' - ' + typeof (variavelDinamica));
// Declarando os tipos de forma explicita
var varString;
varString = 'Teste de variável do tipo string';
console.log(varString + ' - ' + typeof (varString));
// o tipo any, suporta qualquer tipo
var varAny;
varAny = 'Teste de variável do tipo any';
console.log(varAny + ' - ' + typeof (varAny));
varAny = 20;
console.log(varAny + ' - ' + typeof (varAny));
varAny = true;
console.log(varAny + ' - ' + typeof (varAny));
// Arrays são "object" em JS
var varArray;
varArray = ['Luiz', 'Henrique', 'Sanches', 'Serafim', 37];
console.log(varArray[0] + ' - ' + varArray[4]);
varArray = [true];
console.log(varArray[0]);
// Tuplas
// É um array de tipos em uma quantidade pré-definida
var varTupla;
varTupla = ['Av. Paulista', 1500, 'apto 1000'];
console.log(varTupla + ' - ' + typeof (varTupla));
// Enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 1] = "Verde";
    Cor[Cor["Vermelho"] = 100] = "Vermelho";
    Cor[Cor["Preto"] = 101] = "Preto";
    Cor[Cor["Amarelo"] = 102] = "Amarelo";
})(Cor || (Cor = {}));
var minhaCor = Cor.Amarelo;
console.log(minhaCor); // Vai imprimir 102, que é o valor de amarelo
