let num  = [1,5,6,7,9,10,20]
/*
num.push(5)
for (let pos=0; pos<num.length;pos++) {
    console.log (`A posição ${pos} tem o valor ${num[pos]}`)
}
*/
for (let pos in num) {
    console.log (`A posição ${pos} tem o valor ${num[pos]}`)
}