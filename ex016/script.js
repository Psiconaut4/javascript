function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora}horas.`
    if(hora >= 6 && hora <= 12){
        //BOM DIA
        img.src = 'manhã1.png'
        document.body.style.background = '#E7C000'
    } else if(hora > 12 && hora <= 18){
        //BOA TARDE
        img.src = 'tarde1.png'
        document.body.style.background = '#EF9047'
    }else{
        //BOA NOITE
        img.src = 'noite1.png'
        document.body.style.background = '#3F3F3F'
    }
}
