//Ajustando a resolução do jogo de acordo com a aperelho usado 
var altura = 0
var largura = 0
var vidas = 1
var tempo = 15

var criaMosquitoTempo = 1500

var nivel = window.location.search 
nivel = nivel.replace('?' , '')

    if(nivel === 'normal'){
        //1500 MS
        criaMosquitoTempo = 1500
    } else if (nivel === 'dificil'){
        //1000 MS
        criaMosquitoTempo = 1000
    }else if(nivel === 'hardcore'){
        //700
        criaMosquitoTempo = 700
    }

function ajustaTamanhoPalcoJogo() {
	altura = window.innerHeight
	largura = window.innerWidth

	console.log(altura,largura )
}

ajustaTamanhoPalcoJogo()

//lógico do cronometro
var cronometro = setInterval(function() {

	tempo -= 1

	if(tempo < 0) {
		clearInterval(cronometro)
		clearInterval(criaMosca)
		window.location.href = 'vitoria.html'
	} else {
		document.getElementById('cronometro').innerHTML = tempo
	}
	
}, 1000)

function posicaoRandomica() {


	//remover o mosquito anterior (caso exista)
	if(document.getElementById('mosquito')) {
		document.getElementById('mosquito').remove()

		//console.log('elemento selecionado foi: v' + vidas)
		//logica de remover pontos de vidas caso não acerte o mosquito com click do mouse
        if(vidas > 3) {
            
            //Usando o BOM para redirecionar o jogador para outra página
			window.location.href = 'fim_de_jogo.html'
		} else {
			document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"

			vidas++
		}
	}

    //Criando mosquitos de forma aleatória na tela 
    //(Math.floor = tirar casas decimais)

	var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90

    //posicaoX ou posicaoY recebem 0 se posicaoX ou posicaoY for menor que 0 caso contrario recebem elas mesmo
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

function tamanhoAleatorio() {
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

function ladoAleatorio() {
	var classe = Math.floor(Math.random() * 2)
	
	switch(classe) {
		case 0:
			return 'ladoA'
		
		case 1:
			return 'ladoB'

	}
}

