"use strict";
class Data {
    // JS não aceita sobrecarga
    // Em JS o construtor não leva o nome da classe
    // Necessário o construtor p/ criar a classe
    constructor(dia, mes, ano) {
        //constructor(dia: number = 1, mes: number = 1, ano: number = 1970) { // se eu quiser, posso colocar parametros default
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversario = new Data(3, 11, 1991);
aniversario.dia = 9;
console.log(aniversario);
// Escrevendo a mesma classe de forma mais "esperta" ou enxuta
class DataEsperta {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversarioEsperto = new DataEsperta(3, 11, 1991);
aniversarioEsperto.dia = 9;
console.log(aniversarioEsperto);
// Desafio classe Produto
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    // incrementando a classe. Adicionando métodos
    resumo() {
        // SEMPRE que eu quiser referenciar um atributo da classe usar THIS.
        // Quando vier via parâmetro OU for uma variável do método NÃO USAR o this
        return `${this.nome} custa R$${this.preco} (${this.desconto * 100}% OFF). Preço com desconto: ${this.precoComDesconto()}`;
    }
    // Desafio
    // PODERIA, mas não preciso passar os paramêtros pois já estão contidos no construtor!
    //public precoComDesconto(preco: number, desconto: number): number{
    precoComDesconto() {
        return this.preco * (1 - this.desconto);
    }
}
const prod1 = new Produto('Caneta', 10.40);
console.log(prod1);
const prod2 = new Produto('Lapiseira', 10.40, 0.15);
console.log(prod2);
console.log(prod1.resumo());
console.log(prod2.resumo());
//# sourceMappingURL=classes.js.map