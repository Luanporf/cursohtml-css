let amigo =  {nome:'luan'
,sexo:'Masculino'
,peso:'76kg'
,engordar(p=0){
    console.log ('engordou')
    this.peso += p
}}

console.log(`${amigo.nome} pesa ${amigo.peso} e é do sexo ${amigo.sexo}`)