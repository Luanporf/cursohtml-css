function carregar () {
var mensagem = document.getElementById('msg')
var mensagem2 = document.getElementById('msg2')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
mensagem.innerHTML = `Agora são ${hora} horas.`
if (hora <= 11){
    img.src = 'manha.png'
    document.body.style.backgroundColor = '#e2cd9f'
    mensagem2.innerHTML = 'Bom Dia!'
}else if (hora < 18){
    img.src = 'tarde.png'
    document.body.style.backgroundColor = '#B78F73'
    mensagem2.innerHTML = 'Boa Tarde!'
}else if (hora >= 18){
    img.src = 'noite.png'
    document.body.style.backgroundColor = '#043062'
    mensagem2.innerHTML = 'Boa noite!'
}
}