var idade = Math.floor(Math.random() *  100)
console.log(`Você tem ${idade} anos`)
if (idade < 16) {
    console.log ('Não vota')
}else if (idade < 18 || idade > 67) {
        console.log ('Voto opcional')
}else {
    console.log ('voto obrigátorio')
}