let num = document.getElementById('fnum')
let lis = document.getElementById('flist')
let res = document.querySelector('div#res')
var valores = []

function IsNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function InLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar(){
    if (IsNumero(num.value) && !InLista(num.value, valores)) {
        alert('Funcionando')
    } else {
        alert('Valor invalido ou já encontrado na lista.')
    }
}