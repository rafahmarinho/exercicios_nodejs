// ## Importe a biblioteca ##
let rs = require ('readline-sync')


// ## Faça o código ##

let mes = rs.questionInt (console.log('Em que mês você nasceu ?'))

let dia = rs.questionInt (console.log('E qual o dia? '))

/* Áries: de 21 março a 20 abril
Touro: de 21 abril a 20 maio
Gêmeos: de 21 maio a 20 junho
Câncer: de 21 junho a 22 julho
Leão: de 23 julho a 22 agosto
Virgem: de 23 agosto a 22 setembro
Libra: de 23 setembro a 22 outubro
Escorpião: de 23 outubro a 21 novembro
Sagitário: de 22 novembro a 21 dezembro
Capricórnio: de 22 dezembro a 20 janeiro
Aquário: de 21 janeiro a 18 fevereiro
Peixes: de 19 fevereiro a 20 março */   


if (mes == 1) {
    if (dia <= 20 ){
        console.log('Seu signo é Capricórnio!')
    }
    else {
        console.log('Seu signo é Aquário!')
    }
}
else if (mes == 2) {
    if (dia <= 18){
        console.log('Seu signo é Aquário!')
    }
    else {
        console.log ('Seu signo é Peixes!')
    }
}
else if (mes == 3) {
    if (dia <= 20){
        console.log('Seu signo é Peixes!')
    }
    else {
        console.log ('Seu signo é Áries!')
    }
}
else if (mes == 4) {
    if (dia <= 20){
        console.log('Seu signo é Áries!')
    }
    else {
        console.log ('Seu signo é Touro!')
    }
}
else if (mes == 5) {
    if (dia <= 20){
        console.log('Seu signo é Touro!')
    }
    else {
        console.log ('Seu signo é Gemêos!')
    }
}
else if (mes == 6) {
    if (dia <= 20){
        console.log('Seu signo é Gemêos!')
    }
    else {
        console.log ('Seu signo é Câncer!')
    }
}
else if (mes == 7) {
    if (dia <= 22){
        console.log('Seu signo é Câncer!')
    }
    else {
        console.log ('Seu signo é Leão!')
    }
}
else if (mes == 8) {
    if (dia <= 22){
        console.log('Seu signo é Leão!')
    }
    else {
        console.log ('Seu signo é Virgem!')
    }
}
else if (mes == 9) {
    if (dia <= 22){
        console.log('Seu signo é Virgem!')
    }
    else {
        console.log ('Seu signo é Libra!')
    }
}
else if (mes == 10) {
    if (dia <= 22){
        console.log('Seu signo é Libra!')
    }
    else {
        console.log ('Seu signo é Escorpião!')
    }
}
else if (mes == 11) {
    if (dia <= 21){
        console.log('Seu signo é Escorpião!')
    }
    else {
        console.log ('Seu signo é Sagitário!')
    }
}
else if (mes == 12) {
    if (dia <= 21){
        console.log('Seu signo é Sagitário!')
    }
    else {
        console.log ('Seu signo é Capricórnio!')
    }
}