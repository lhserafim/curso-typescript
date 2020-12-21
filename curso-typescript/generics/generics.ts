// sem generics
function echo(objeto: any) {
    return objeto
}

console.log(echo('Luiz').length)
console.log(echo(27).length)
console.log(echo({
    nome: 'Luiz',
    idade: 37
}))

// com generics
// Vantagens do generics, me antecipar a alguns "erros", como o UNDEFINED, como no uso acima do 27
//<T> é usado p/ indicar que a função faz uso de um tipo genérico (poderia ser qualquer letra)

function echoMelhorado<T>(objeto: T): T { // o <T> GENERALIZA
    return objeto
}

console.log(echoMelhorado('Luiz').length) // o generics faz a inferência do tipo
console.log(echoMelhorado<string>('Luiz').length) // definindo o tipo do generics tardiamente. EXPLICITAMENTE
//console.log(echoMelhorado(27).length) // ele automaticamente passa a criticar o length, pois a função não está presente em number!
console.log(echoMelhorado({
    nome: 'Luiz',
    idade: 37
}).nome)

// Generics disponíveis na API
// interface Array<T> var Array: ArrayConstructor
// A interface Array tem o tipo genérico <T>, portanto posso usá-lo e informar seu tipo

const avaliacoes: Array<number> = [10, 9, 8.2, 7.2]
avaliacoes.push(5.2)
console.log(avaliacoes)

// Array

function imprimir<T>(args: T[]) {
    args.forEach(e => console.log(e))
}

imprimir([1,2,3])
imprimir<number>([1,2,3])
imprimir<string>(['Luiz', 'Henrique', 'Sanches'])
imprimir<{nome: string, idade: number}>([
    {nome: 'Fulano', idade: 22},
    {nome: 'Cicrano', idade: 32},
    {nome: 'Beltrano', idade: 40}
])

// Tipo genérico no contexto de função
// Criando um tipo
type Echo = <T>(data: T) => T // O que eu fiz aqui. Criei um tipo, para ser usado depois, que é uma função genérica
const chamarEcho: Echo = echoMelhorado // aqui eu dou o tipo Echo a constante e atribuo a função para RESOLVER o generics
console.log(chamarEcho<string>('Alguma coisa'))

// Usando generics em classes

// Classe sem generics
class OperacaoBinaria {
    constructor(public operando1: any, public operando2: any) {}

    excecutar() {
        return this.operando1 + this.operando2
    }
}
console.log(new OperacaoBinaria('Bom ', 'dia').excecutar())
console.log(new OperacaoBinaria(3, 7).excecutar())

// Classe com generics
// Neste exemplo, como é uma classe genérica não tenho como saber o que será feito no executar. Desta forma transformei classe e função em abstract para
// que quem usar a classe DEFINA os tipos e a função executar.
abstract class OperacaoBinariaGenerics<T, R> {
    constructor(public operando1: T, public operando2: T) {}

    abstract excecutar(): R // Esto usando R por "capricho". Poderia usar o tipo T mesmo, mas aqui quis retornar o R 
}

// Usando a classe abstrata com generics
class SomaBinaria extends OperacaoBinariaGenerics<number, number> { // defini que T e R são number
    excecutar(): number { // Como extendi classe abstrata, preciso implementar os métodos abstratos
        return this.operando1 + this.operando2
    }
}

console.log(new SomaBinaria(3,8).excecutar())

// neste exemplo estou definindo os tipos T e R da classe extendida e estou usando uma classe que foi criada anteriormente em outra package
class DiferencaEntreDatas extends OperacaoBinariaGenerics<Data, string> {
    getTime(data: Data): number {
        // let dia = data.dia
        // let mes = data.mes
        // let ano = data.ano
        // fazendo o destructuring da classe Data ao invés de ir item a item como acima
        let { dia, mes, ano } = data
        return new Date(`${mes}/${dia}/${ano}`).getTime()
    }

    excecutar(): string {
        const t1 = this.getTime(this.operando1)
        const t2 = this.getTime(this.operando2)
        // a conta é feita em cima dos milisegundos
        const diferenca = Math.abs(t1 - t2) // pego o absoluto, para evitar diferença negativa!
        const dia = 1000 * 60 * 60 * 24 // representação da quantidade de milisegundos em 1 dia 
        return `${Math.ceil(diferenca / dia)} dia(s)`
    }
}

const d1 = new Data(1, 2, 2020)
const d2 = new Data(5, 2, 2020)
console.log(new DiferencaEntreDatas(d1, d2).excecutar())

// Desafio classe genérica
class Fila<T extends string> { // definindo a classe como genérica  e adicionando CONSTRAINT p/ que apenas tipos STRING sejam utilizados
    // tmb posso colocar constraints com OU <T extends string | number >
    private fila: Array<T> // criando atributo do tipo Array genérico e privado
    constructor(...args: T[]) { // criando o construtor p/ inicializar a classe e ainda recebendo os args para fazer o rest (ajuntar)
        this.fila = args
    }

    entrar(elemento: T) {
        this.fila.push(elemento)
    }

    proximo(): T | null { // posso retornar T ou null
        if(this.fila.length >= 0 && this.fila[0]) {
            const primeiro = this.fila[0] // pega o primeiro elemento do array
            this.fila.splice(0, 1) // o 1 corresponde ao param opcional deleteCount?
            return primeiro
        } else {
            return null
        }
    }

    imprimir() {
        console.log(this.fila)
    }
}

const fila = new Fila<string>('Gui', 'Pedro', 'Ana')
fila.imprimir()
fila.entrar('Rafael')
fila.imprimir()
console.log(fila.proximo())
console.log(fila.proximo())
console.log(fila.proximo())
console.log(fila.proximo())
console.log(fila.proximo())


// Desafio Mapa
// Array de Objetos (Chave/Valor) -> itens
// Métodos: obter(Chave), colocar({ C, V })
// limpar(), imprimir()

type Par<C, V> = {chave: C, valor: V} 

class Mapa<C, V> { // poderia ser qualquer letra
    // private itens: Array<{chave: C, valor: V}> CASO EU NÃO TIVESSE CRIADO O TYPE OU 
    private itens: Array<Par<C, V>> = new Array<Par<C, V>>() // inicializei, p/ não criar o construtor

    // método obeter, recebe apenas a chave como parâmetro
    obter(chave: C): Par<C, V> | null { // a partir da chave, retorno o objeto Par<C, V> 
        const resultado = this.itens.filter(i => i.chave === chave)
        return resultado ? resultado[0] : null
    }

    colocar(par: Par<C, V>) {
        const encontrado = this.obter(par.chave)
        if(encontrado) {
            encontrado.valor = par.valor
        } else {
            this.itens.push(par)
        }
    }

    limpar() {
        this.itens = new Array<Par<C, V>>()
    }

    imprimir() {
        console.log(this.itens)
    }
}
 
const mapa = new Mapa<number, string>()
mapa.colocar({ chave: 1, valor: 'Pedro' })
mapa.colocar({ chave: 2, valor: 'Rebeca' })
mapa.colocar({ chave: 3, valor: 'Maria' })
mapa.colocar({ chave: 1, valor: 'Gustavo' })
 
console.log(mapa.obter(2))
mapa.imprimir()
mapa.limpar()
mapa.imprimir()