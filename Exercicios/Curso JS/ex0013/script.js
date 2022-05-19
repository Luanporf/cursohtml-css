function gerar() {
    let numero = document.getElementById('num')
    let tabel = document.getElementById('tabela') 
    if (numeResizeObserver.value.length == 0) {
        alert ('[erro] digite um número FDP')
    }else {
        let num1 = Number(numero.value)
        let mul = 1
        while (mul <= 10) {
            let item = document.createElement('option');
            item.text = `${num} X ${mul} = ${num * mul}`;
            tabel.appendChild(item)
            mul++
        }
    }
}