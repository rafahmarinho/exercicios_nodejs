// ## Importe a biblioteca ##

let rs = require ('readline-sync')

// ## Faça o código ##

let numVoo = rs.question (console.log('Qual o número do seu vôo? '))

let fileira = rs.question (console.log('Qual fileira deseja sentar? (A, B, C, D ou F) '))

console.log ('=================================================')

console.log ('O seu número de vôo é ' + numVoo + '.')

console.log ('A sua fileira escolhida é ' + fileira + '.')