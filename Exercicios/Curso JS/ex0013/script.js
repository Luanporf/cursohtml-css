function gerar() {
    let numero = document.getElementById('num')
    var resultado = document.getElementById('tabuada') 

    if (num.value == 0) {
        alert ('[erro] digite um número FDP')
    }else {
        let num = Number(numero.value)
        var mul = 1
        for (mul;mul <= 10;mul++) {
            let item = document.createElement('option')
            item.text = `${num} X ${mul} = ${num*mul}`;
            resultado.appendChild(item)

        }
    }
}