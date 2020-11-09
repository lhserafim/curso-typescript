// O compilador JS faz a INFERÊNCIA dos tipos quando a variável é criada e inicializada

// EXEMPLOS
// String
let nome = 'João'
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