function verificar() {
 var data = new Date()
 var ano = data.getFullYear()
 var fAno = document.getElementById('txtano')
 var res = document.getElementById('res')
 if (fAno.value.length  == 0 || fAno.value > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente')
 } else {
var fsex = document.getElementsByName('radsex')
var idade = ano - Number(fAno.value)
res.innerHTML = `Idade calculada: ${idade}`
var genero = ''
var img = document.createElement('img')
img.setAttribute('id','foto')
if (fsex[0].checked) {
    genero = 'Homem'
    if (idade >= 0 && idade <= 10 ) {
        //Criança
        img.setAttribute('src', 'Criança-Menino.jpg')
    } else if (idade >= 11 && idade <=25 ) {
// Jovem
img.setAttribute('src', 'Jovem-Homem.jpg')
        } else if (idade >= 26 && idade < 60) {
            // Adulto
            img.setAttribute('src', 'Adulto-Homem.png')
        } else {
            //Idoso
            img.setAttribute('src', 'Idoso-Homem.jpeg')
        }
        
    } else if (fsex[1].checked) {
        genero = 'Mulher'
        if (idade >= 0 && idade <= 10 ) {
            //Criança
            img.setAttribute('src', 'Criança-Menina.jpg')
        } else if (idade >= 11 && idade <=25 ) {
    // Jovem
    img.setAttribute('src', 'Jovem-Mulher.jpg')
            } else if (idade >= 26 && idade < 60) {
                // Adulto
                img.setAttribute('src', 'Adulto-Mulher.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'Idoso-Mulher.jpg')
            }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `O gênero: ${genero} ,com ${idade} anos.`
    res.appendChild(img)
 }
}
