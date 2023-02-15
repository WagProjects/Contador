function contagem() {
    var inicio = window.document.getElementById('inicio')
    var passo = window.document.getElementById('passo')
    var fim = window.document.getElementById('fim')
    var res = window.document.getElementById('res')
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('ERRO! Faltam dados!')
    }else{
        res.innerHTML = 'Contando: '
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (i < f){
            //Contagem crescente
            for(var c = i; c <= f; c += p){
            res.innerHTML += `${c} \u{1F449}`
            }
        } else{
            //Contagem regressiva
            for(var c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}
