// ## Importe a biblioteca ##
let rs = require('readline-sync')

// ## Faça o código ##
console.log('\n \n \n@@@@@@@@@@@@@ GAME DAS TECLAS @@@@@@@@@@@@@ by Rafael Marinho')
let players = rs.questionInt (console.log('Informe quantos jogadores irão participar. (Máx.4)'))
if (players == 1) {
    console.log ('= Jogador único =')
    let user1 = rs.question (console.log('Qual é o seu nome? '))

    let texto = rs.question("Digite um texto qualquer para contarmos os caracteres. \n \n \n")
    console.log("Parabéns! Seu texto possui " + texto.length + " caracteres.") 
}
else if (players == 2) {
    console.log('= Primeiro Jogador =')

    let user1 = rs.question (console.log('Qual é o seu nome? '))

        let texto1 = rs.question("Digite um texto qualquer para contarmos os caracteres. \n")

     console.log('\n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n = Segundo Jogador =')

    let user2 = rs.question (console.log('Qual é o seu nome? '))
    
        let texto2 = rs.question("Digite um texto qualquer para contarmos os caracteres. \n")

    if (texto1.length > texto2.length){
        console.log ('\n O '+ user1 +' é o vencedor com ' +texto1.length + ' caracteres digitados! O ' + user2 + ' digitou ' + texto2.length + ' caracteres!' )
    }
    else if (texto1.length < texto2.length){
        console.log ('\n O '+ user2 +' é o vencedor com ' +texto2.length + ' caracteres digitados! O ' + user1 + ' digitou ' + texto1.length + ' caracteres!' )
    }
    else {
        console.log('Vocês empataram! Ambos com ' + texto1.length + ' caracteres digitados!')
    }
}

else if (players == 3) {
    console.log('= Primeiro Jogador =')

    let user1 = rs.question (console.log('Qual é o seu nome? '))

        let texto1 = rs.question("Digite um texto qualquer para contarmos os caracteres. \n ")

     console.log('\n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n= Segundo Jogador =')

    let user2 = rs.question (console.log('Qual é o seu nome? '))
    
        let texto2 = rs.question("Digite um texto qualquer para contarmos os caracteres. \n  ")

    console.log('\n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n= Terceiro Jogador =')

    let user3 = rs.question (console.log('Qual é o seu nome? '))
    
        let texto3 = rs.question("Digite um texto qualquer para contarmos os caracteres. \n \n \n")


    if (texto1.length > texto2.length && texto3.length){
        console.log ('O '+ user1 +' é o vencedor com ' +texto1.length + ' caracteres digitados! O ' + user2 + ' digitou ' + texto2.length + ' caracteres e o '+user3+ ' digitou '+texto3.length+ ' caracteres!' )
    }
    else if (texto2.length > texto1.length && texto3.length){
        console.log ('O '+ user2 +' é o vencedor com ' +texto2.length + ' caracteres digitados! O ' + user1 + ' digitou ' + texto1.length + ' caracteres e o '+user3+ ' digitou '+texto3.length+ ' caracteres!' )
    }
    else if (texto3.length > texto1.length && texto2.length) {
        console.log ('O '+ user3 +' é o vencedor com ' +texto3.length + ' caracteres digitados! O ' + user1 + ' digitou ' + texto1.length + ' caracteres e o '+user2+ ' digitou '+texto2.length+ ' caracteres!' )
    }
    else {
        console.log('Vocês empataram! Todos com ' + texto1.length + ' caracteres digitados!')
    }
}

else if (players == 4) {
    console.log('= Primeiro Jogador =')

    let user1 = rs.question (console.log('Qual é o seu nome? '))

        let texto1 = rs.question("Digite um texto qualquer para contarmos os caracteres. \n ")

     console.log('\n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n= Segundo Jogador =')

    let user2 = rs.question (console.log('Qual é o seu nome? '))
    
        let texto2 = rs.question("Digite um texto qualquer para contarmos os caracteres. \n  ")

    console.log('\n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n= Terceiro Jogador =')

    let user3 = rs.question (console.log('Qual é o seu nome? '))
    
        let texto3 = rs.question("Digite um texto qualquer para contarmos os caracteres. \n \n \n")

        console.log('\n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n= Quarto Jogador =')

        let user4 = rs.question (console.log('Qual é o seu nome? '))
        
            let texto4 = rs.question("Digite um texto qualquer para contarmos os caracteres. \n \n \n")
        
    if (texto1.length > texto2.length && texto3.length && texto4.length){
        console.log ('O '+ user1 +' é o vencedor com ' +texto1.length + ' caracteres digitados! O ' + user2 + ' digitou ' + texto2.length + ' caracteres, o '+user3+ ' digitou '+texto3.length+ ' caracteres e o '+ user4 + 'digitou ' + texto4.length + 'caracteres!')
    }
    else if (texto2.length > texto1.length && texto3.length && texto4.length){
        console.log ('O '+ user2 +' é o vencedor com ' +texto2.length + ' caracteres digitados! O ' + user1 + ' digitou ' + texto1.length + ' caracteres, o '+user3+ ' digitou '+texto3.length+ ' caracteres e o '+ user4 + 'digitou ' + texto4.length + 'caracteres!' )
    }
    else if (texto3.length > texto1.length && texto2.length && texto4.length) {
        console.log ('O '+ user3 +' é o vencedor com ' +texto3.length + ' caracteres digitados! O ' + user1 + ' digitou ' + texto1.length + ' caracteres, o '+user2+ ' digitou '+texto2.length+ ' caracteres e o '+ user4 + 'digitou ' + texto4.length + 'caracteres!' )
    }
    else if (texto4.length > texto1.length && texto2.length && texto3.length) {
        console.log ('O '+ user4 +' é o vencedor com ' +texto3.length + ' caracteres digitados! O ' + user1 + ' digitou ' + texto1.length + ' caracteres e o '+user2+ ' digitou '+texto2.length+ ' caracteres e o '+ user3 + 'digitou ' + texto4.length + 'caracteres!' )
    }
    else {
        console.log('Vocês empataram! Todos com ' + texto1.length + ' caracteres digitados!')
    }
}

else {
    console.log('Desculpe o número máximo de players sãos 4.')
}
console.log("\n `-~ OBRIGADO POR JOGAR ~-´") 