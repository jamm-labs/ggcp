/* global Phaser */
// list some game elements put at the beginning so preload, create and update can access them.

// Things that change how the game works
var gravity = 500;
var velocity_x = 100;
var velocity_y = 300;

// Parts of the game
var game;
var player;
var coins;
var platforms;
var enemies;

// Set the starting level
var currentLevel = 1;

// Names of Noises in the game
var splatNoise;
var winNoise;

// Initialize the game at a certain size
game = new Phaser.Game(550, 400, Phaser.AUTO, "", "", false, false);

// The following javascript object called playState contains all the active code for this simple game.
// You can add other states like, win, lose, start etc
var playState = {};

playState.preload = function () {
  
    // These three lines make the game as large as possible on our screens   
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;

    // Here we preload the image assets - make more here http://piskelapp.com
    game.load.crossOrigin = "anonymous";
  
    game.load.image("player", "https://cdn.glitch.com/05027ea3-25db-40c7-803e-2f710bf696a1%2Fplayer.png?1549457791680");
    
    //game.load.spritesheet("player", "https://cdn.glitch.com/05027ea3-25db-40c7-803e-2f710bf696a1%2Fplayer_anim.png?1550737952823",32,32); 
  
    game.load.image("platform", "https://cdn.glitch.com/05027ea3-25db-40c7-803e-2f710bf696a1%2Fwall.png?1549457791790");
    game.load.image("coin", "https://cdn.glitch.com/05027ea3-25db-40c7-803e-2f710bf696a1%2Fcoin.png?1549457791846");
    game.load.image("enemy", "https://cdn.glitch.com/05027ea3-25db-40c7-803e-2f710bf696a1%2Fhazard.png?1549457791750");
  
    // Here we preload the audio assets - you can make more here http://sfbgames.com/chiptone/
    game.load.audio("win", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1171931/win.wav");
    game.load.audio("splat", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1171931/splat.wav");

};

playState.create = function () {
    // Here we create the game, starting with the background colour
    game.stage.backgroundColor = "#5699ab";

    // These two lines add physics to the game world
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.world.enableBody = true;

     //create groups for the platforms, coins and enemies - what ever happens to the group happens to all the members of the group

    platforms = game.add.group();
    coins = game.add.group();
    enemies = game.add.group();

    // add the main player to the game 70 pixels to the left and 100 pixels down from the top
    player = game.add.sprite(20, 100, "player");
    //player.animations.add("move", [0, 1], 3, true);
    //player.animations.play("move");

    //add gravity to the player so that it falls down
    player.body.gravity.y = gravity;

    // don't let the player leave the screen area
    player.body.collideWorldBounds = true;

    // add audio to two variable ready to play later in other functions
    splatNoise = game.add.audio("splat");
    winNoise = game.add.audio("win");

    // Design the level. x = platform, o = coin, h = hazard.
    var level1 = [
        "                 ",
        "                 ",
        "    o            ",
        "                 ",
        "  xxxxx          ",
        "                ",
        "                 ",
        "                o",
        "             xxxx",
        "                 ",
        "    o   h    h   ",
        "xxxxxxxxxxxxxxxxx"
    ];  
  
    var level2 = [
        "                o",
        "                 ",
        "                 ",
        "                 ",
        "         o       ",
        "        xxxxx    ",
        "                 ",
        "     o          ",
        "   xxxx          ",
        "                 ",
        "    o        h   ",
        "xxxxxxxxxxxxxxxxx"
    ];

    var level3 = [
        "                 ",
        "                o",
        "                 ",
        "      o h    xxxx",
        "      xxx        ",
        "    o            ",
        "                 ",
        "  xxxx          o",
        "     o    xxxx   ",
        "                 ",
        "    o   h    h   ",
        "xxxxxxxxxxxxxxxxx"
    ];

    // find out what the level is and send that data to the LoadLevel function - add an extra code for each level after that 
    if (!currentLevel || currentLevel === 1) {
      loadLevel(level1);
      // add extra code for just level one here
      
    } else if (currentLevel === 2) {      
      loadLevel(level2);
      // add extra code for just level two after here
      
    } else if (currentLevel === 3) {
      loadLevel(level3);
      // add extra code for just level three after here
      
    }
};


playState.update = function () {
    // Here we update the game 60 times per second - all code here is run all the time

    // stop the player if no key is pressed
    player.body.velocity.x = 0;

    // Make the player and the platforms collide , so player can't move through them
    game.physics.arcade.collide(player, platforms);

    // Call the 'takeCoin' function when the player takes a coin
    game.physics.arcade.overlap(player, coins, takeCoin, null, this);

    // Call the 'lose' function when the player touches the enemy
    game.physics.arcade.overlap(player, enemies, hitHazard, null, this);

    // add the controls for the cursor keys
    if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT) === true) {
        player.body.velocity.x = -velocity_x;
    } 
    else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT) === true) {
        player.body.velocity.x = velocity_x;
    }
    else {
        player.body.velocity.x = 0;
    }
  
    // Make the player jump only if he is touching down on something
    if (game.input.keyboard.isDown(Phaser.Keyboard.UP) === true && player.body.touching.down === true) {
        player.body.velocity.y = -velocity_y;
    }
    
    //if the player has collected all the coins move them on to the next level
    if (coins.total === 0) {
        nextlevel();
    }

};

// Function to kill/disappear a coin if player touches it
var takeCoin = function (player, coin) {
    coin.kill();
    winNoise.play();
};

// Function called when a player touches a hazard / enemy
var hitHazard = function (player, enemy) {
    splatNoise.play();
    restart();
};

// Function to restart the game from the beginning
var restart = function () {
    currentLevel = 1;
    game.state.start("play", true, false, currentLevel);
};

// Function to move player on to the next level
var nextlevel = function () {
    winNoise.play();
    if (!currentLevel) {
        currentLevel = 1;
    }
    currentLevel = currentLevel + 1;
    game.state.start("play", true, false, currentLevel);
};

// Create the level from the level data grid in create
function loadLevel (level) {
    for (var i = 0; i < level.length; i = i + 1) {
        for (var j = 0; j < level[i].length; j = j + 1) {
            if (level[i][j] === "x") { 
                // Create a wall and add it to the 'platfrom' group
                var platform = game.add.sprite(0 + 32 * j, 0 + 32 * i, "platform");
                platform.body.immovable = true;
                platforms.add(platform);
              
            } else if (level[i][j] === "o") { 
                // Create a coin and add it to the 'coins' group
                var coin = game.add.sprite(0 + 32 * j, 0 + 32 * i, "coin");
                coins.add(coin);
              
            } else if (level[i][j] === "h") { 
                // Create a enemy and add it to the 'enemies' group
                var enemy = game.add.sprite(0 + 32 * j, 0 + 32 * i, "enemy");
                enemies.add(enemy);
              
            }
        }
    }
}

//Add and start our play state
game.state.add("play", playState);
game.state.start("play");