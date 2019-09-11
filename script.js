function verificar() {
    //window.alert("Funcionou!")
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value == 0 || fano.value > ano) {
        window.alert('Verfique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
            //res.innerHTML = `Idade calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = "Homem"
            if (idade >= 0 && idade < 10) {
                //crianca
                img.setAttribute('src', 'baby_boy.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'young_man.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adult_man.png')
            } else {
                //idoso
                img.setAttribute('src', 'old_man.png')
            }
        } else if (fsex[1].checked) {
            genero = "Mulher"
            if (idade >= 0 && idade < 10) {
                //crianca
                img.setAttribute('src', 'baby_girl.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'young_woman.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adult_woman.png')
            } else {
                //idoso
                img.setAttribute('src', 'old_woman.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}