
function load() {
    const msg = window.document.getElementById('msg')
    const img = window.document.getElementById('imagem')
   
    //Para conseguir armazenar horário local
    const hora = new Date().getHours()
    //var hora = 19

    switch (hora) {
        case 0:
             msg.innerHTML = `Agora é meia-noite (${hora} horas).`
            break
        case 1: 
            msg.innerHTML = `Agora é ${hora} hora.`
            break
        case 12: 
            msg.innerHTML = `Agora é meio-dia (${hora} horas).`
            break
        default:
            msg.innerHTML = `Agora são ${hora} horas.`
            break
    }

    if (hora >= 5 && hora < 12){
        img.src = 'imagens/fotomanha.png'
        document.body.style.background = 'linear-gradient(0deg, #fccb94 68%, #264f74 100%)'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'imagens/fototarde.png'
        document.body.style.background = 'linear-gradient(0deg, #eba48a 68%,rgb(249, 201, 118) 100%)'
    } else {
        img.src = 'imagens/fotonoite.png'
        document.body.style.background ='linear-gradient(180deg, #264f74 60%,rgb(1, 8, 41) 100%)'
    } 

    //Formatar o gradiente para ocupar a tela inteira sem repetição
    document.body.style.backgroundRepeat = 'no-repeat' 
    document.body.style.height = '100vh' 
    document.body.style.margin = '0'
}

