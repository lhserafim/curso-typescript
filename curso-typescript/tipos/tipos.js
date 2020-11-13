"use strict";
// O compilador JS faz a INFERÊNCIA dos tipos quando a variável é criada e inicializada
// EXEMPLOS
// String
let nome = 'Luiz Serafim';
console.log(nome + ' - ' + typeof (nome));
//nome = 10 // não é permitido fazer isso
let numero = 10.1;
console.log(numero + ' - ' + typeof (numero));
let boolean = true;
console.log(boolean + ' - ' + typeof (boolean));
// Quando a variável não é inicializada o JS transforma a variável de forma dinâmica
let variavelDinamica;
variavelDinamica = 10;
console.log(variavelDinamica + ' - ' + typeof (variavelDinamica));
variavelDinamica = 'Luiz';
console.log(variavelDinamica + ' - ' + typeof (variavelDinamica));
// Declarando os tipos de forma explicita
let varString;
varString = 'Teste de variável do tipo string';
console.log(varString + ' - ' + typeof (varString));
// o tipo any, suporta qualquer tipo
let varAny;
varAny = 'Teste de variável do tipo any';
console.log(varAny + ' - ' + typeof (varAny));
varAny = 20;
console.log(varAny + ' - ' + typeof (varAny));
varAny = true;
console.log(varAny + ' - ' + typeof (varAny));
// Arrays são "object" em JS
let varArray;
varArray = ['Luiz', 'Henrique', 'Sanches', 'Serafim', 37];
console.log(varArray[0] + ' - ' + varArray[4]);
varArray = [true];
console.log(varArray[0]);
// Tuplas
// É um array de tipos em uma quantidade pré-definida
let varTupla;
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
let minhaCor = Cor.Amarelo;
console.log(minhaCor); // Vai imprimir 102, que é o valor de amarelo
// funções passando tipo
function retornaMeuNome() {
    return nome;
}
console.log(retornaMeuNome());
// Quando a função não retornar nada, posso deixar explicito o void
function semRetorno() {
    console.log('Função sem retorno');
}
semRetorno();
// colocando tipos nos parametros
function multiplicar(numA, numB) {
    return numA * numB;
}
console.log(multiplicar(10, 5.2));
// 20. Funções Como Tipos
// Vou atribuir a uma variável uma função com os tipos
let calculo; // usar o => como se fosse uma arrow function
calculo = multiplicar;
console.log(calculo(5, 6));
// resumindo, é como se eu tivesse " transformado " a variável calculo na função multiplicar
// 21. Objetos e Tipos
let usuario = {
    nome: 'Daniela',
    idade: 37
};
console.log(usuario);
// Com tipo
let usuarioComTipo = {
    nome: 'Daniela',
    idade: 37
};
console.log(usuarioComTipo);
// 22. Desafio Tipo Objetos
// function baterPonto(hora: number): string {
//     let ponto: string
//     if (hora <= 8) {
//         ponto = 'Ponto normal'
//     } else {
//         ponto = 'Fora do horário'
//     }
//     return ponto
// }
//console.log(baterPonto(9))
let funcionario = {
    nomeSupervisor: ['Paulo', 'Luiz', 'João'],
    baterPonto(hora) {
        let ponto;
        if (hora <= 8) {
            ponto = 'Ponto normal';
        }
        else {
            ponto = 'Fora do horário';
        }
        return ponto;
    }
};
console.log(funcionario);
console.log(funcionario.nomeSupervisor);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(9));
let funcionario2 = {
    nomeSupervisor: ['Paulo', 'Luiz', 'João'],
    baterPonto(hora) {
        let ponto;
        if (hora <= 8) {
            ponto = 'Ponto normal';
        }
        else {
            ponto = 'Fora do horário';
        }
        return ponto;
    }
};
console.log(funcionario2);
// 25. Múltiplos Tipos com Union Types
// Permitir usar mais de que 1 tipo na mesma variável! 
let nota = 10;
console.log(`Minha nota é ${nota}`);
nota = '10';
console.log(`Minha nota é ${nota}`);
// 27. O Tipo "Never"
// O never é uma função que nunca "termina", geralmente é usado p/ erro
function falha(msg) {
    throw new Error(msg);
}
const contato1 = {
    nome: 'Luiz',
    tel1: '939423240',
    tel2: null
};
console.log(contato1);
let contaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor;
    }
};
let correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
};
console.log(contaBancaria);
correntista.contaBancaria.depositar(100000);
console.log(correntista);
console.log(`Saldo do correntista R$ ${contaBancaria.saldo}`);
//# sourceMappingURL=tipos.js.map