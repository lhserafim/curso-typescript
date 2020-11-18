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
// Rest & Spread
const numeros = [1, 10, 99, -5];
// Sem usar o SPREAD (...)
console.log(Math.max(numeros[0], numeros[1], numeros[2], numeros[3]));
// Usand o SPREAD (...)
console.log(Math.max(...numeros));
// Passando o SPREAD como union de arrays
const alfabetoA = ['A', 'B', 'C'];
const alfabetoB = [...alfabetoA, 'D', 'E', 'F'];
console.log(alfabetoB);
// Usando o REST como argumento de uma função
// É útil pois flexíbiliza o número de argumentos
function retornarArray(...args) {
    return args;
}
console.log(retornarArray(1, 2, 3, 4, 5, 6));
console.log(retornarArray(...numeros));
// Usando o conceito de TUPLA com REST & SPREAD
// Tupla é um array de tipos em uma quantidade pré-definida
const tupla = [1, 'abc', false];
function tuplaParam1(a, b, c) {
    console.log(`1) ${a} ${b} ${c}`);
}
tuplaParam1(...tupla);
function tuplaParam2(...params) {
    console.log(`2) ${params[0]} ${params[1]} ${params[2]}`);
}
tuplaParam2(...tupla);
// Operador Destructuring (array)
const caracteristicas = ['Motor Zetec 1.8', 2020];
const [motor, ano] = caracteristicas;
console.log(motor);
console.log(ano);
// Operador Destructuring (objeto)
const item = {
    tipo: 'SSD 480GB',
    preco: 200,
    caracteristica: {
        xpto: 'Importado'
    }
};
const { tipo, preco, caracteristica: { xpto } } = item;
console.log(tipo, preco, xpto);
// Template String
const texto1 = 'string';
const templateString = `
    Este é um teste de template ${texto1}

    Inclusive posso usar quebra de linhas no template ${texto1}
`;
console.log(templateString);
//# sourceMappingURL=ecmascript.js.map