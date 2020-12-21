"use strict";
// sem generics
function echo(objeto) {
    return objeto;
}
console.log(echo('Luiz').length);
console.log(echo(27).length);
console.log(echo({
    nome: 'Luiz',
    idade: 37
}));
// com generics
// Vantagens do generics, me antecipar a alguns "erros", como o UNDEFINED, como no uso acima do 27
//<T> é usado p/ indicar que a função faz uso de um tipo genérico (poderia ser qualquer letra)
function echoMelhorado(objeto) {
    return objeto;
}
console.log(echoMelhorado('Luiz').length); // o generics faz a inferência do tipo
console.log(echoMelhorado('Luiz').length); // definindo o tipo do generics tardiamente. EXPLICITAMENTE
//console.log(echoMelhorado(27).length) // ele automaticamente passa a criticar o length, pois a função não está presente em number!
console.log(echoMelhorado({
    nome: 'Luiz',
    idade: 37
}).nome);
// Generics disponíveis na API
// interface Array<T> var Array: ArrayConstructor
// A interface Array tem o tipo genérico <T>, portanto posso usá-lo e informar seu tipo
const avaliacoes = [10, 9, 8.2, 7.2];
avaliacoes.push(5.2);
console.log(avaliacoes);
// Array
function imprimir(args) {
    args.forEach(e => console.log(e));
}
imprimir([1, 2, 3]);
imprimir([1, 2, 3]);
imprimir(['Luiz', 'Henrique', 'Sanches']);
imprimir([
    { nome: 'Fulano', idade: 22 },
    { nome: 'Cicrano', idade: 32 },
    { nome: 'Beltrano', idade: 40 }
]);
const chamarEcho = echoMelhorado; // aqui eu dou o tipo Echo a constante e atribuo a função para RESOLVER o generics
console.log(chamarEcho('Alguma coisa'));
// Usando generics em classes
// Classe sem generics
class OperacaoBinaria {
    constructor(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
    excecutar() {
        return this.operando1 + this.operando2;
    }
}
console.log(new OperacaoBinaria('Bom ', 'dia').excecutar());
console.log(new OperacaoBinaria(3, 7).excecutar());
// Classe com generics
// Neste exemplo, como é uma classe genérica não tenho como saber o que será feito no executar. Desta forma transformei classe e função em abstract para
// que quem usar a classe DEFINA os tipos e a função executar.
class OperacaoBinariaGenerics {
    constructor(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
}
// Usando a classe abstrata com generics
class SomaBinaria extends OperacaoBinariaGenerics {
    excecutar() {
        return this.operando1 + this.operando2;
    }
}
console.log(new SomaBinaria(3, 8).excecutar());
// neste exemplo estou definindo os tipos T e R da classe extendida e estou usando uma classe que foi criada anteriormente em outra package
class DiferencaEntreDatas extends OperacaoBinariaGenerics {
    getTime(data) {
        // let dia = data.dia
        // let mes = data.mes
        // let ano = data.ano
        // fazendo o destructuring da classe Data ao invés de ir item a item como acima
        let { dia, mes, ano } = data;
        return new Date(`${mes}/${dia}/${ano}`).getTime();
    }
    excecutar() {
        const t1 = this.getTime(this.operando1);
        const t2 = this.getTime(this.operando2);
        // a conta é feita em cima dos milisegundos
        const diferenca = Math.abs(t1 - t2); // pego o absoluto, para evitar diferença negativa!
        const dia = 1000 * 60 * 60 * 24; // representação da quantidade de milisegundos em 1 dia 
        return `${Math.ceil(diferenca / dia)} dia(s)`;
    }
}
const d1 = new Data(1, 2, 2020);
const d2 = new Data(5, 2, 2020);
console.log(new DiferencaEntreDatas(d1, d2).excecutar());
// Desafio classe genérica
class Fila {
    constructor(...args) {
        this.fila = args;
    }
    entrar(elemento) {
        this.fila.push(elemento);
    }
    proximo() {
        if (this.fila.length >= 0 && this.fila[0]) {
            const primeiro = this.fila[0]; // pega o primeiro elemento do array
            this.fila.splice(0, 1); // o 1 corresponde ao param opcional deleteCount?
            return primeiro;
        }
        else {
            return null;
        }
    }
    imprimir() {
        console.log(this.fila);
    }
}
const fila = new Fila('Gui', 'Pedro', 'Ana');
fila.imprimir();
fila.entrar('Rafael');
fila.imprimir();
console.log(fila.proximo());
console.log(fila.proximo());
console.log(fila.proximo());
console.log(fila.proximo());
console.log(fila.proximo());
class Mapa {
    constructor() {
        // private itens: Array<{chave: C, valor: V}> CASO EU NÃO TIVESSE CRIADO O TYPE OU 
        this.itens = new Array(); // inicializei, p/ não criar o construtor
    }
    // método obeter, recebe apenas a chave como parâmetro
    obter(chave) {
        const resultado = this.itens.filter(i => i.chave === chave);
        return resultado ? resultado[0] : null;
    }
    colocar(par) {
        const encontrado = this.obter(par.chave);
        if (encontrado) {
            encontrado.valor = par.valor;
        }
        else {
            this.itens.push(par);
        }
    }
    limpar() {
        this.itens = new Array();
    }
    imprimir() {
        console.log(this.itens);
    }
}
const mapa = new Mapa();
mapa.colocar({ chave: 1, valor: 'Pedro' });
mapa.colocar({ chave: 2, valor: 'Rebeca' });
mapa.colocar({ chave: 3, valor: 'Maria' });
mapa.colocar({ chave: 1, valor: 'Gustavo' });
console.log(mapa.obter(2));
mapa.imprimir();
mapa.limpar();
mapa.imprimir();
//# sourceMappingURL=generics.js.map