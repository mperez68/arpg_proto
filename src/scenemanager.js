class SceneManager {
	constructor(game) {
		Object.assign(this, { game });
		this.game.camera = this;
		this.defaultScale = 2;
		this.x = 0;
		this.y = 0;
		this.lvl = 0;

		this.leftText = "LEFT";
		this.centerText = "CENTER";
		this.rightText = "RIGHT";
		
		this.loadMap(levels[this.lvl]);
	};
	
	loadMap(level) {
		this.clearMap();
		let g = this.game;
		console.log(level);		

		// Build map from level object
		// Tiles

		// Player

		// Bad Guys

	};

	nextLevel() {
		this.lvl++;
		if (levels[this.lvl]) this.loadMap(levels[this.lvl]);
		else this.loadMap(levels.end);
		
	}
	
	update() {
		//
	};
	
	draw(ctx) {
		// HUD //

		// DEBUG HUD //
		if (PARAMS.DEBUG) {
			let border = 50;
			let font = 30;
			// LEFT ALIGN TEXT //
			ctx.textAlign  = "left";
			//
			ctx.font = font + "px Impact";
			ctx.strokeStyle = 'White';
			ctx.strokeText(this.leftText, border, this.game.surfaceHeight - border - (font / 2));
			ctx.strokeStyle = 'Black';
			ctx.fillText(this.leftText, border, this.game.surfaceHeight - border - (font / 2));
			
			// CENTER ALIGN TEXT //
			ctx.textAlign  = "center";
			//
			ctx.font = font + "px Impact";
			ctx.strokeStyle = 'White';
			ctx.strokeText(this.centerText, this.game.surfaceWidth / 2, this.game.surfaceHeight - border - (font / 2));
			ctx.strokeStyle = 'Black';
			ctx.fillText(this.centerText, this.game.surfaceWidth / 2, this.game.surfaceHeight - border - (font / 2));
			
			// RIGHT ALIGN TEXT //
			ctx.textAlign  = "right";
			//
			ctx.font = font + "px Impact";
			ctx.strokeStyle = 'White';
			ctx.strokeText(this.rightText, this.game.surfaceWidth - border, this.game.surfaceHeight - border - (font / 2));
			ctx.strokeStyle = 'Black';
			ctx.fillText(this.rightText, this.game.surfaceWidth - border, this.game.surfaceHeight - border - (font / 2));
		}
	};
	
	clearMap() {
        //
    };
}