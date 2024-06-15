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
        valores.push(Number(num.value))
        let item = document.createElement('option')  
          item.text = `Valor ${num.value} adicionado.`
          lis.appendChild(item)
          res.innerHTML = ''
    } else {
        alert('Valor invalido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if (valores.length == 0){
        alert('Adicione valores para analisar.')
    } else{
        var tot = valores.length
        let maior = valores[0]
        let menor = valores [0]
        let soma = 0
        let media = 0
        for (let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma/tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo foram cadastrados ${tot} valores.</p>`
        res.innerHTML += `<p>${maior} foi o maior valor encontrado.</p>`
        res.innerHTML += `<p>${menor} foi o menor valor encontrado.</p>`
        res.innerHTML += `<p>A soma dos valores é ${soma}</p>`
        res.innerHTML += `<p>A média dos valores informados é ${media}</p>`
    }
}