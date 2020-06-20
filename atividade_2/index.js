// ## Importe a biblioteca ##

let rs = require ('readline-sync')

// ## Faça o código ##

let mask = rs.question (console.log('Você está usando máscara quando precisa sair de casa? (S ou N) '))

let mao = rs.question (console.log('Você está lavando as mãos frequentemente? (S ou N)'))

console.log ('====================================================================================== \n')

if (mask == 's' && mao == 's') { 
    console.log ('Parabéns! Você está contribuindo para a contenção do vírus #FiqueEmCasa')
}
else if (mask == 's' && mao == 'n') {
    console.log ('Você tem que lavar a mão com mais frequência, é muito importante fazer isso para a sua e a minha proteção, ok? #LavaAMao')
}
else if (mask == 'n' && mao == 's') {
        console.log ('É obrigatório o uso de máscara quando for sair de casa, você pode estar tirando vidas ao não fazer isso. USE A MÁSCARA! #MascaraSalva')
}
else {
    console.log ('Você precisa seguir a risca os protocolos, já pensou que você pode ter transmitido o vírus para alguem e inclusive ter matado essa pessoa? USE A MÁSCARA E LAVE SUAS MÃOS! #SeCuida #FicaEmCasa')
}