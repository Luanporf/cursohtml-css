var inicio = document.getElementById('txt1');
var fim = document.getElementById('txt2');
var passo = document.getElementById('txt3');
var res = document.getElementById('resultado');

function clicar() {
    var start = Number(inicio.value);
    var end = Number(fim.value);
    var step = Number(passo.value);
    resultado.innerHTML = 'Contando:';
    if (start,end,step == 0) {
        alert('[erro] Digite um número')
    }
    if (start < end) {
        for (let c = start; c <= end; c += step) {
            resultado.innerHTML += ` ${c} \u{1F449}`;
        }
    }else{
        for (let c = start; c >= end; c -= step) {
            resultado.innerHTML (`${c}`)
        }
    }
}