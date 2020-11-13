"use strict";
// let & const 
//console.log(seraQuePode)
//var seraQuePode = '?' // Exemplo de hoisting só funciona em var
// o Var tem escopo global e o let e const tem escopo de bloco
// Exemplo escopo global, a variável do laço for, se declarada com var, pode ser acessada externamente ao bloco
console.log('Escopo local');
for (let i = 0; i < 10; i++) {
    console.log(i);
}
// Não é permitido fazer o console.log abaixo, pois o i não foi declarado
// console.log(i)
console.log('Escopo global');
for (var i = 0; i < 10; i++) {
    console.log(i);
}
// Usando var, o valor de i é 10, pois ele é global
console.log(i);
// ARROW FUNCTION
console.log('Arrow Function:');
// Exemplo "tradicional" com função anônima
const somar = function (n1, n2) {
    return n1 + n2;
};
console.log(somar(2, 2));
const subtrair = (n1, n2) => n1 - n2;
console.log(subtrair(2, 2));
const saudacao = () => console.log('Olá!');
saudacao();
const falarCom = (nome) => console.log(`Falar com ${nome}`);
falarCom('Luiz');
// Em uma função arrow o this nunca varia. Ele fica no escopo do arrow, 
//diferente do uso do this fora da função arrow, que vai variar de acordo com a chamada
// const arrowComThis = () => console.log(this) // aponta p/ a window
// arrowComThis()
// const arrowComThisEspecial = arrowComThis.bind('ABC')
// arrowComThisEspecial()
console.log('Parametro Padrão');
function contagemRegressiva(inicio = 3) {
    console.log(inicio);
    while (inicio > 0) {
        inicio--;
        console.log(inicio);
    }
    console.log('FIM');
}
contagemRegressiva();
contagemRegressiva(5);
//# sourceMappingURL=ecmascript.js.map