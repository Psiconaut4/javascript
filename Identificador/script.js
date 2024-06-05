function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', "foto")
    }
        if (fsex[0].checked){
            gen = 'Homem'
            if (idade >=0 && idade < 12){
                //criança
                img.setAttribute('src', 'bebe.m.png')
            } else if (idade >= 12 && idade < 19){
                //jovem
                img.setAttribute('src', 'jovem.m.png')
            } else if (idade >=19 && idade < 60){
                //adulto
                img.setAttribute('src', 'adulto.m.png')
            } else {
                //idoso
                img.setAttribute('src', 'idoso.m.png')
            }
        } else if (fsex[1].checked){
            gen = 'Mulher'
            if (idade >=0 && idade < 12){
                //criança
                img.setAttribute('src', 'bebe.f.png')
            } else if (idade >= 12 && idade < 19){
                //jovem
                img.setAttribute('src', 'jovem.f.png')
            } else if (idade >=19 && idade < 60){
                //adulto
                img.setAttribute('src', 'adulto.f.png')
            } else {
                //idoso
                img.setAttribute('src', 'idoso.f.png')
            }
        }
        res.innerHTML = `Detectamos ${gen} com ${idade} anos.` 
        res.appendChild(img)
}
