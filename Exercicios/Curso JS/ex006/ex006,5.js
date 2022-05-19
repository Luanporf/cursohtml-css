var agora = new Date()
var hora = agora.getHours()
console.log (`${hora} é a hora atual`)
if (hora <= 11){
    console.log ('Bom dia!')
}else if (hora < 18){
    console.log('Boa tarde!')
}else if (hora >= 18){
    console.log ('Boa noite!')
}