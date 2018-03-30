var game = new Game({
	autoFocus: true
});
var scene = game.createScene("test");

var SPEED = 3;
var carre = scene.createShape("hw", ShapeType.RECTANGLE, new Position(50, 50), 25, Color.RED);

game.preload.add(function() {
	game.loader.onLoadComplete.add(function() {
		game.input.keyboard.onKeyPressed.add(function(event) {
			if (event == Key.LEFT) carre.position.addX(-SPEED);
			if (event == Key.RIGHT) carre.position.addX(SPEED);
			if (event == Key.DOWN) carre.position.addY(SPEED);
			if (event == Key.UP) carre.position.addY(-SPEED);
		});
	});
});

game.setCurrentScene(scene);