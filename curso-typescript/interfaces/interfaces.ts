// A interface funciona como um contrato
interface Humano {
    nome: string
    idade?: number // aqui estou dizendo que o atributo idade é opcional (por isso o simbolo ?)
    [prop: string]: any // criando um atributo dinâmico (quando não sei o nome nem o tipo)
    saudar(sobrenome: string): void // definição de um método
}

function saudarComOla(pessoa: Humano) { // uso a interface para definir o tipo de pessoa
    console.log('Olá, ' + pessoa.nome)
}

function mudarNome(pessoa: Humano) {
    pessoa.nome = 'Joana'
}

const pessoa: Humano = {
    nome: 'João',
    idade: 27,
    saudar(sobrenome: string) {
        console.log('Olá, meu nome é ' + this.nome + ' ' + sobrenome)
    }
}

saudarComOla(pessoa)
mudarNome(pessoa)
saudarComOla(pessoa)

// saudarComOla({
//     nome: 'Paulo',
//     idade: 10,// usando o opcional
//     xpto: true, // usando o atributo dinâmico
// })

pessoa.saudar('Serafim')

// Usando classes. Similar ao JAVA
// ou seja, necessário implementar os atributos obrigatórios da interface
class Cliente implements Humano {
    nome: string = ''
    data: Date = new Date; // posso colocar novos atributos e métodos
    saudar(sobrenome: string) {
        console.log('Olá, meu nome é ' + this.nome + ' ' + sobrenome)
    }
}

const meuCliente = new Cliente()
meuCliente.nome = 'Han'
saudarComOla(meuCliente)
meuCliente.saudar('Solo')
console.log(meuCliente.data)

// Unsando uma interface com função
// é um conceito similar ao JAVA (interfaces e classes abstratas) onde eu posso ter apenas a declaração do metodo
// e quem implementa a interface é que "cria" a função/método

interface FuncaoCalculo {
    (param1: number, param2: number): number // definição apenas
}

let potencia: FuncaoCalculo // implementar a interface
// não importa o nome dos parametros e sim a ordem e o tipo 
potencia = function(base: number, exp: number): number {
    return Math.pow(base,exp)
}

console.log(potencia(3,10))

// Herança
interface A {
    a(): void
}

interface B {
    b(): void
}

interface ABC extends A, B {
    c(): void
}

class RealA implements A {
    a(): void {}
}

class RealAB implements A, B {
    a(): void {}
    b(): void {}
}

class RealABC implements ABC {
    a(): void {}
    b(): void {}
    c(): void {}
}

abstract class AbstrataABD implements A, B {
    a(): void {}
    b(): void {}
    abstract d(): void
}

interface Object {
    log(): void
}

Object.prototype.log = function() {
    console.log(this.toString())
}

const x = 2
const y = 3
const z = 4

x.log()
y.log()
z.log()

const cli = {
    nome: 'Pedro',
    toString() {
        return  this.nome
    }
}
cli.log()