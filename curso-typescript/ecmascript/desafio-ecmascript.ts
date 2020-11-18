// Exercicio 1
// var dobro = function(valor) {
//     return valor * 2
// }
// console.log(dobro(10))

// modo 1
// const dobro = function(valor: number): number {
//     return valor * 2
// }
// modo 2 com arrow function
const dobro = (valor: number): number => valor * 2
console.log(dobro(10))
 
// Exercicio 2
// var dizerOla = function (nome) {
//     if (nome === undefined) { nome = "Pessoa" }
//     console.log("Ola, " + nome)
// }

const dizerOla = function (nome: string = 'Pessoa'): void {
    console.log(`Olá ${nome}`)
}

dizerOla()
dizerOla("Anna")
 
// Exercicio 3 // imprimir o menor valor
// var nums = [-3, 33, 38, 5]
// console.log('???')
 
const nums: number[] = [-3, 33, 38, 5]
console.log(Math.min(...nums))

// Exercicio 4 // adicionar os elementos no array
//var array = [55, 20]
const array: number[] = [55, 20]
array.push(...nums)
console.log(array)
 
// Exercicio 5
// var notas = [8.5, 6.3, 9.4]
// var notas1 = notas[0]
// var notas2 = notas[1]
// var notas3 = notas[2] 
// console.log(nota1, nota2, nota3)

const notas: number[] = [8.5, 6.3, 9.4]
console.log(...notas)
 
// Exercicio 6
// var cientista = {primeiroNome: "Will", experiencia: 12}
// var primeiroNome = cientista.primeiroNome
// var experiencia = cientista.experiencia
// console.log(primeiroNome, experiencia)

const cientista = {
    primeiroNome: "Will", 
    experiencia: 12
}

const {primeiroNome, experiencia} = cientista
console.log(primeiroNome, experiencia)
