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


// Modificadores de acesso
// PUBLIC, PRIVATE E PROTECTED (o protected é tipo o privado mas permite que quem herde a classe use os métodos)
class Carro {
    // Criei um atributo privado
    private velocidadeAtual: number = 0

    // Criei um atributo privado tmb dentro do construtor
    constructor(public marca: string, public modelo: string, private velocidadeMaxima: number = 200) {
    }

    private alterarVelocidade(delta: number): number {
        const novaVelocidade = this.velocidadeAtual + delta
        const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima

        if(velocidadeValida) {
            this.velocidadeAtual = novaVelocidade
        } else {
            // operação ternária
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0 
        }

        return this.velocidadeAtual
    }
    // Para acessar os métodos privados, utilizar métodos públicos!!! encapsulamento
    public acelerar(): number {
        return this.alterarVelocidade(5)
    }

    public desacelerar(): number {
        return this.alterarVelocidade(-5)
    }
}

const carro1 = new Carro('Ford', 'Ka', 185)

// Fazendo uma gambiarra p/ não precisar ficar escrevendo o código várias vezes
Array(50).fill(0).forEach(() => carro1.acelerar())
console.log(carro1.acelerar())

//Array(50).fill(0).forEach(() => carro1.desacelerar())
console.log(carro1.desacelerar())

// PILARES DA OO
// 1. Encapsulamento (modificadores de acesso: public, private, etc)
// 2. Herança (relação é 1. Utilizar o extends)
// 3. Polimorfismo (Uma variável tendo comportamentos diferentes, dependendo da instanciação da classe)
// 4. Abstração

// HERANÇA
// Diferença entre COMPOSIÇÃO e HERANÇA
// Sempre que você tem uma relação TEM 1 é uma composição. o Carro tem 1 motor
// Quando você tem uma relação É 1 normalmente é uma relação de herança. o Ká é 1 carro

class Ferrari extends Carro {
    // Criando um construtor personalizado
    constructor(modelo: string, velocidadeMaxima: number) {
        super('Ferrari', modelo, velocidadeMaxima)
    } 
    // herdei os atributos de carro
}

//const f40 = new Ferrari('Ferrari', 'F40', 324)
const f40 = new Ferrari('F40', 324)
console.log(f40)


// Getters & Setters
// Interessante usar get e set quando o dado precisar de algum tipo de validação
// _nomeAtributo -> é uma convenção para identificar que meu atributo é privado

// os get e set apesar de serem métodos, são acessados como atributos 
class Pessoa {
    private _idade: number = 0

    get idade(): number{
        return this._idade
    }

    set idade(valor: number) {
        if(valor >= 18) {
            this._idade = valor // exemplo, de PORQUE USAR get e set. Estou colocando uma verificação no meu set
        }
    }   
}

const pessoa1 = new Pessoa
pessoa1.idade = 18 // chamou o set
console.log(pessoa1) // chamou o get

// Membros estáticos
// Uma classe pode ter atributos e métodos estáticos
// membros estáticos pertencem a classe e não a instancia

// Por exemplo, eu posso ter uma classe que eu não precise de várias instancias dela, pois quero usar ela para calcular algo por exemplo
class Matematica {
    static PI: number = 3.1416

    static areaCirc(raio: number): number {
        return this.PI * raio * raio // Usando o this p/ acessar um atributo da classe
    }
}

// Sendo assim não preciso criar uma instancia da classe
// const m1 = new Calculo()
// console.log(Calculo.areaCirc(4))

// Posso acessar direto
console.log(Matematica.areaCirc(4))


// Classes abstratas
// Não permite criar instancias de classes abstratas
// Geralmente usamos classes abstratas p/ que outras classes herdem os atributos e métodos desta classe

// Classe abstrata
abstract class Calculo {
    protected resultado: number = 0 // usei protected p/ que outras classes possam herdar o atributo
    abstract executar(...numeros: number[]):void

    getResultado(): number {
        return this.resultado
    }
}

class Soma extends Calculo {
    // Implementar o método abstrato da classe abstrata
    executar(...numeros: number[]): void {
        // usando this, p/ acessar atributos da classe. Neste caso atributo herdado
        this.resultado = numeros.reduce((valorTotal, valorAtual) => valorTotal + valorAtual)
    }
}

class Multiplicar extends Calculo {
    // Implementar o método abstrato da classe abstrata
    executar(...numeros: number[]): void {
        // usando this, p/ acessar atributos da classe. Neste caso atributo herdado
        this.resultado = numeros.reduce((valorTotal, valorAtual) => valorTotal * valorAtual)
    }
}

// Exemplo de polimorfismo
let c1 = new Soma()
c1.executar(2,3,5)
console.log(c1.getResultado())

c1 = new Multiplicar()
c1.executar(2,3,5)
console.log(c1.getResultado())

// Construtor privado e singleton

class Unico {
    private static instancia: Unico = new Unico
    private constructor(){} 

    static getInstancia(): Unico {
        return Unico.instancia // uso a classe ao invés de this. Pq this é instancia e aqui não estamos trabalhando com instancias
    }

    agora() {
        return new Date
    }
}

// como usar
console.log(Unico.getInstancia().agora())


// Atributos somente leitura
class Aviao {
    // usar o readonly p/ deixar como somente leitura
    public readonly modelo: string
    constructor(modelo: string, public readonly prefixo: string) {
        this.modelo = modelo
    }
}

const turboHelice = new Aviao('Tu-114', 'PT-ABC')
// Não consigo alterar
// turboHelice.modelo = 'DC-8'
console.log(turboHelice)