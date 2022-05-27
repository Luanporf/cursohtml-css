let num = document.getElementById ('num')
let tabela = document.getElementById ('tabel')
let numero = Number(num.value)
let res = document.getElementById ('txt')
let vet =  []

function isnumero (n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inlista (n, l) {
    if  (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        false
    }
}

function adicionar() {
    if (isnumero(num.value) && !inlista(num.value,vet)) {
        vet.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `O valor ${num.value} foi adicionado`
        tabela.appendChild(item)
        res.innerHTML = ''
    }else {
        alert ('valor invalido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar () {
    if (vet.length == 0) {
        alert ('adicione valores antes de finalzar')
    }else {
        let txt = vet.length
        let maior = vet[0]
        let menor = vet[0]
        let soma = 0
        let media = 0
        for(let pos in vet) {
            soma += vet[pos]
            if (vet[pos] > maior) {
                maior = vet[pos]
            }
            if (vet[pos] < menor) {
                menor = vet[pos]
            }
        }
        media = soma / txt
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${txt} Número(s) cadrastados`
        res.innerHTML = `Somando todos os valores temos ${soma}`
        res.innerHTML = `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML = `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML =  `<p>A média dos valores digitados é ${media}</p>`
    }
}