// import { areaRetangulo } from './retangulo'
// import { areaCircunferencia } from './circunferencia'
import retangulo from './retangulo' // aqui eu estou importando sem {} pq eu exportei usando o default export default function areaRetangulo
import { areaCircunferencia as circ } from './circunferencia'

console.log('Módulo carregado...')
console.log(retangulo(7, 8))
console.log(circ(2))

const { digaOi } = require('./novo') // Usando a exportação no padrão commonJS
console.log(digaOi('Ana'))