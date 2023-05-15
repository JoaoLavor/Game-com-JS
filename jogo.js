//Ajustando a resolução do jogo de acordo com a aperelho usado 
var altura = 0
var largura = 0

function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(altura, largura)
}

ajustaTamanhoPalcoJogo()

//Criando mosquitos de forma aleatória na tela 
//(Math.floor = tirar casais decimais)

function posicaoRandomica() {
    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

 // posicaoX ou posicaoY recebem 0 se posicaoX ou posicaoY for menor que 0 caso contrario recebem elas mesmo 
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)


    //Criando elementos html usando DOM

    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosquito.png'
    mosquito.className = 'mosquito1'
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'

    document.body.appendChild(mosquito)
}