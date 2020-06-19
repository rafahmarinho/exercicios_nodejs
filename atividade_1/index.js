// ## Importe a biblioteca ##

let rs = require ('readline-sync')

// ## Faça o código ##

let numVoo = rs.question ('Qual o número do seu vôo? \n')

let fileira = rs.question ('Qual fileira deseja sentar? (A, B, C, D ou F) \n')

console.log ('=================================================')

console.log ('O seu número de vôo é ' +numVoo '.')

console.log ('A sua fileira escolhida é ' +fileira '.')