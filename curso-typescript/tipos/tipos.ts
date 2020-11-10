// O compilador JS faz a INFERÊNCIA dos tipos quando a variável é criada e inicializada

// EXEMPLOS
// String
let nome = 'Luiz Serafim'
console.log(nome  +  ' - ' + typeof(nome))
//nome = 10 // não é permitido fazer isso

let numero = 10.1
console.log(numero  +  ' - ' + typeof(numero))

let boolean = true
console.log(boolean  +  ' - ' + typeof(boolean))

// Quando a variável não é inicializada o JS transforma a variável de forma dinâmica
let variavelDinamica

variavelDinamica = 10
console.log(variavelDinamica  +  ' - ' + typeof(variavelDinamica))

variavelDinamica = 'Luiz'
console.log(variavelDinamica +  ' - ' + typeof(variavelDinamica))


// Declarando os tipos de forma explicita
let varString: string
varString = 'Teste de variável do tipo string'
console.log(varString +  ' - ' + typeof(varString))

// o tipo any, suporta qualquer tipo
let varAny: any
varAny = 'Teste de variável do tipo any'
console.log(varAny +  ' - ' + typeof(varAny))

varAny = 20
console.log(varAny +  ' - ' + typeof(varAny))

varAny = true
console.log(varAny +  ' - ' + typeof(varAny))

// Arrays são "object" em JS
let varArray: any[]
varArray = ['Luiz', 'Henrique', 'Sanches', 'Serafim', 37]
console.log(varArray[0] + ' - ' + varArray[4])
varArray = [true]
console.log(varArray[0])

// Tuplas
// É um array de tipos em uma quantidade pré-definida
let varTupla: [string, number, string]
varTupla = ['Av. Paulista', 1500, 'apto 1000']
console.log(varTupla +  ' - ' + typeof(varTupla))

// Enums
enum Cor {
    Cinza, // 0 
    Verde, // 1
    Vermelho = 100, // 100 // Atribuição explicita de valor
    Preto, // 101
    Amarelo
}

let minhaCor: Cor = Cor.Amarelo
console.log(minhaCor) // Vai imprimir 102, que é o valor de amarelo

// funções passando tipo
function retornaMeuNome(): String {
    return nome
}

console.log(retornaMeuNome())

// Quando a função não retornar nada, posso deixar explicito o void

function semRetorno(): void {
    console.log('Função sem retorno')
}
semRetorno()

// colocando tipos nos parametros

function multiplicar(numA: number, numB: number): number {
    return numA * numB
}

console.log(multiplicar(10, 5.2))

// 20. Funções Como Tipos
// Vou atribuir a uma variável uma função com os tipos
let calculo: (x: number, y: number) => number // usar o => como se fosse uma arrow function
calculo = multiplicar
console.log(calculo(5,6))
// resumindo, é como se eu tivesse " transformado " a variável calculo na função multiplicar

//21. Objetos e Tipos
let usuario = {
    nome: 'Daniela',
    idade: 37
}
console.log(usuario)

// Com tipo
let usuarioComTipo: {nome: string, idade: number} = {
    nome: 'Daniela',
    idade: 37
}

console.log(usuarioComTipo)