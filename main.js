var gameEngine = new GameEngine();

var ASSET_MANAGER = new AssetManager();
// Player Sprites
ASSET_MANAGER.queueDownload("./assets/good_guy.png");
// NPC's
ASSET_MANAGER.queueDownload("./assets/bad_guy.png");
// Background Tiles
ASSET_MANAGER.queueDownload("./assets/tile.png");

ASSET_MANAGER.downloadAll(function () {
	var canvas = document.getElementById('gameWorld');
	var ctx = canvas.getContext('2d');
	
	gameEngine.init(ctx);
	new SceneManager(gameEngine);
	gameEngine.start();
});