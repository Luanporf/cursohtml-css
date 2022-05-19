function verificar () {
    var data = new Date
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    
    if (fano.value.length == 0 || fano.value > ano) {
        alert ('[ERRO] Verifique os valores e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade  < 10) {
                img.setAttribute('src', 'criançah.png')
                res.innerHTML = 'Criança'
            } else if (idade < 21) {
                img.setAttribute ('src', 'jovemh.png')
                res.innerHTML = 'Jovem'
            } else if (idade < 50) {
                img.setAttribute ('src', 'adultoh.png')
                res.innerHTML = 'Adulto'
            } else if (idade < 100) {
                img.setAttribute ('src', 'idosoh.png')
                res.innerHTML = 'Idoso'
            } else if (idade > 100) {
                img.setAttribute ('src', 'olavo.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade  < 10) {
                img.setAttribute('src', 'criançam.png')
                res.innerHTML = 'Criança'
            } else if (idade < 21) {
                img.setAttribute('src', 'jovemM.png')
                res.innerHTML = 'Jovem'
            } else if (idade < 50) {
                img.setAttribute('src', 'adultom.png')
                res.innerHTML = 'Adulto'
            } else if (idade < 100) {
                img.setAttribute('src', 'idosom.png')
                res.innerHTML = 'Idoso'
            } else if (idade < 200) {
                img.setAttribute('src', 'olavo.png')
                res.innerHTML = 'Olavo de carvalho'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos que você é ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}