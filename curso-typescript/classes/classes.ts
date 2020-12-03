class Data {
    // Por padrão o acesso é PÚBLICO
    dia: number
    mes: number
    public ano: number // apenas p/ exemplificar explicitando que é público

    // JS não aceita sobrecarga
    // Em JS o construtor não leva o nome da classe
    // Necessário o construtor p/ criar a classe
    constructor(dia: number, mes: number, ano: number) {
    //constructor(dia: number = 1, mes: number = 1, ano: number = 1970) { // se eu quiser, posso colocar parametros default
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }
}

const aniversario = new Data(3,11,1991)
aniversario.dia = 9
console.log(aniversario)


// Escrevendo a mesma classe de forma mais "esperta" ou enxuta
class DataEsperta {
    constructor(public dia: number = 1, public mes: number = 1, public ano: number = 1970) {
    }
}

const aniversarioEsperto = new DataEsperta(3,11,1991)
aniversarioEsperto.dia = 9
console.log(aniversarioEsperto)

// Desafio classe Produto
class Produto {
    constructor(public nome: string, public preco: number, public desconto: number = 0) {
    }

    // incrementando a classe. Adicionando métodos
    public resumo(): string {
        // SEMPRE que eu quiser referenciar um atributo da classe usar THIS.
        // Quando vier via parâmetro OU for uma variável do método NÃO USAR o this
        return `${this.nome} custa R$${this.preco} (${this.desconto * 100}% OFF). Preço com desconto: ${this.precoComDesconto()}`
    }

    // Desafio
    // PODERIA, mas não preciso passar os paramêtros pois já estão contidos no construtor!
    //public precoComDesconto(preco: number, desconto: number): number{
    public precoComDesconto(): number{
        return this.preco * (1 - this.desconto)
    }
}

const prod1 = new Produto('Caneta', 10.40)
console.log(prod1)

const prod2 = new Produto('Lapiseira', 10.40, 0.15)
console.log(prod2)

console.log(prod1.resumo())
console.log(prod2.resumo())