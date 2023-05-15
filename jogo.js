//Ajustando a resolução do jogo de acordo com a aperelho usado 
var altura = 0
var largura = 0
var vidas = 1

function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(largura,alura)
}

ajustaTamanhoPalcoJogo()

//Criando mosquitos de forma aleatória na tela 
//(Math.floor = tirar casas decimais)

function posicaoRandomica() {

    //removendo mosquito anterior (caso exista)
    if(document.getElementById('mosquito')) {
		document.getElementById('mosquito').remove()

		//console.log('Elemento selecionado foi: v' + vidas)
        //logica de remover pontos de vidas caso não acerte o mosquito com click do mouse
		if(vidas > 3) {

			alert('Interromper o jogo (game over)')
		} else {
			document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"

			vidas++
		}
	}          
    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

 // posicaoX ou posicaoY recebem 0 se posicaoX ou posicaoY for menor que 0 caso contrario recebem elas mesmo 
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)


    //Criando elementos html usando DOM

    var mosquito = document.createElement('img')
	mosquito.src = 'imagens/mosquito.png'
	mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
	mosquito.style.left = posicaoX + 'px'
	mosquito.style.top = posicaoY + 'px'
	mosquito.style.position = 'absolute'
	mosquito.id = 'mosquito'
    //função que ao clicar no mosquito remove ele, sem perder pontos de vidas.
	mosquito.onclick = function() {
		this.remove()
	}
    
    document.body.appendChild(mosquito)
}

function tamanhoAleatorio () {
    var classe = Math.floor(Math.random() * 3)

    switch(classe) {
        
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'      
    }
}

function ladoAleatorio () {
    var classe = Math.floor(Math.random() * 2)

    switch(classe) {
        
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
             
    }
}