function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    if(hora >= 6 && hora <= 12){
        msg.innerHTML = `Agora são ${hora}horas, Bom dia!`
        img.src = 'manhã1.png'
        document.body.style.background = '#E7C000'
    } else if(hora > 12 && hora <= 18){
        msg.innerHTML = `Agora são ${hora}horas, Boa Tarde!`
        img.src = 'tarde1.png'
        document.body.style.background = '#EF9047'
    }else{
        msg.innerHTML = `Agora são ${hora}horas, Boa noite!`
        img.src = 'noite1.png'
        document.body.style.background = '#3F3F3F'
    }
}
