var canvas = new fabric.Canvas('myCanvas'); //criando canvas utilizando a biblioteca gráfica Fabric

playerX = 10; //posição x
playerY = 10; //posição y

larguraBlocos = 30;
alturaBlocos = 30;

var playerObject = "";
var blockImageObject = "";

//criação e atualização da imagem do personagem
function playerUpdate() {
	fabric.Image.fromURL("player.png", function (Img) {
		playerObject = Img;

		playerObject.scaleToWidth(150);
		playerObject.scaleToHeight(140);
		playerObject.set({
			top: playerY,
			left: playerX
		});
		canvas.add(playerObject);

	});
}

//criação e atualização das imagens de cada bloco
function newImage(getImage) {
	fabric.Image.fromURL(getImage, function (Img) {
		blockImageObject = Img;

		blockImageObject.scaleToWidth(blockImageWidth);
		blockImageObject.scaleToHeight(blockImageHeight);
		blockImageObject.set({
			top: playerY,
			left: playerX
		});
		canvas.add(blockImageObject);

	});

}

//adicionar escutador de eventos de tecla pressionada

function teclas(e) {
	//criar variável para obter o código da tecla pressionada
	//dar um console.log para poder ver os códigos pelo navegador
	if (//escolher duas teclas para que ao pressionar juntas aumente o tamanho dos blocos) {
		console.log("  e  pressionadas juntas");
		//aumentar a largura dos blocos
		//aumentar a altura dos blocos
		document.getElementById("larguraAtual").innerHTML = larguraBlocos;
		document.getElementById("alturaAtual").innerHTML = alturaBlocos;
	}
	if (//escolher duas teclas pressionadas juntas para diminuir o tamanho dos blocos) {
		console.log(" e  pressionadas juntas");
		larguraBlocos = larguraBlocos - 10;
		alturaBlocos = alturaBlocos - 10;
		//mostrar no html a  largura atual
		//mostrar no html a altura atual
	}

	//programar os movimentos com as setas
	if ( ) {
		up();
		console.log("cima");
	}
	if ( ) {
		down();
		console.log("baixo");
	}
	if ( ) {
		left();
		console.log("esquerda");
	}

	if ( ) {
		right();
		console.log("direita");
	}


	//programar as teclas para gerar os blocos
	if ( ) {
		newImage('wall.jpg');
	}
	if () {
		newImage('ground.png');
	}
	if () {
		newImage('light_green.png');
	}
	if () {
		newImage('trunk.jpg');
	}
	if () {
		newImage('roof.jpg');
	}
	if () {
		newImage('yellow_wall.png');
	}
	if () {
		newImage('dark_green.png');
	}
	if () {
		newImage('unique.png');
	}
	if () {
		newImage('cloud.jpg');
	}

}
function up() {
	if (playerY >= 0) {
		playerY = playerY - alturaBlocos;
		canvas.remove(playerObject);
		playerUpdate();
	}
}

function down() {
	if (playerY <= 500) {
		//ajustar o movimento para baixo do personagem
		canvas.remove(playerObject);
		playerUpdate();
	}
}

function left() {
	if (playerX > 0) {
		playerX = playerX - larguraBlocos;
		canvas.remove(playerObject);
		playerUpdate();
	}
}

function right() {
	if (playerX <= 850) {
		//ajustar o movimento do personagem para a direita
		canvas.remove(playerObject);
		playerUpdate();
	}
}
