
//Populate Gallery with Random Placeholder Images
const galleryItems = document.querySelectorAll('.zoom-inner');
//const src = 'https://lorempixel.com/600/400/city/';
const src = [
"https://cdn.glitch.com/04730f0f-2c01-4c9a-9d1b-7728a6b9c2ef%2FgameMechanics_staticenemies.jpg?v=1592768834080",
"https://cdn.glitch.com/d8e86cfb-15bc-4681-aea2-2a321ccad370%2FgameMechanics_jumping.jpg?1551473692625",
"https://cdn.glitch.com/04730f0f-2c01-4c9a-9d1b-7728a6b9c2ef%2FgameMechanics_doublejump.jpg?v=1592768831396",
"https://cdn.glitch.com/04730f0f-2c01-4c9a-9d1b-7728a6b9c2ef%2FgameMechanics_animatedenemies.jpg?v=1592768828722",
"https://cdn.glitch.com/04730f0f-2c01-4c9a-9d1b-7728a6b9c2ef%2FgameMechanics_patrollingenemies.jpg?v=1592768825863",
"https://cdn.glitch.com/04730f0f-2c01-4c9a-9d1b-7728a6b9c2ef%2FgameMechanics_followingenemies.jpg?v=1592768820330",
"https://cdn.glitch.com/d8e86cfb-15bc-4681-aea2-2a321ccad370%2Fgamemechanic_extralives_800.png?1552402556128",
   ];
//console.log(src)

// const gm_description = [
// "Extra lives for your player and a graphic to show how many are left",
//   "Enemies that move around the screen, using the tween keyword",
// "Jump on enemies to zap them",
// "Add a countdown timer to add more challenge to your game",
// "Make player jumps higher if you press jump button longer",
// "Player only gets zapped if enemies touch a middle section",
// "Player health bar goes down when zapped for chalenging games",
//    ];


const gm_book = [
"https://mickfuzz.github.io/makecode-platformer-101/addHazard",
"https://mickfuzz.github.io/makecode-platformer-101/jumpOnEnemies",
"https://mickfuzz.github.io/makecode-platformer-101/doubleJump",
"https://mickfuzz.github.io/makecode-platformer-101/movingEnemiesAnimated",
"https://mickfuzz.github.io/makecode-platformer-101/movingEnemiesPatrolling",
"https://mickfuzz.github.io/makecode-platformer-101/movingEnemiesFollowing",
"https://mickfuzz.github.io/makecode-platformer-101/addLives",
   ];

galleryItems.forEach((item,i) => item.style.backgroundImage = `url(${src[i]})`);
//galleryItems.forEach((item,i) => item.setAttribute("title1" , `${gm_description[i]}`));

galleryItems.forEach(function(item,i) {
    item.addEventListener("click", function(event) {
       window.open(`${gm_book[i]}`)
    });
});


const polishItems = document.querySelectorAll('.zoom-inner_2');

//console.log(polishItems)

const polish_src = [
"https://cdn.glitch.com/04730f0f-2c01-4c9a-9d1b-7728a6b9c2ef%2Fgame_polish_graphical_effect.jpg?v=1592769469073",
"https://cdn.glitch.com/d8e86cfb-15bc-4681-aea2-2a321ccad370%2Fgame_polish_new_sounds.jpg?1551524948349",
"https://cdn.glitch.com/d8e86cfb-15bc-4681-aea2-2a321ccad370%2Fgame_polish_soundtrack.png?1551473693380",
"https://cdn.glitch.com/04730f0f-2c01-4c9a-9d1b-7728a6b9c2ef%2Fgame_polish_storywithmessages.jpg?v=1592769466732",
"https://cdn.glitch.com/d8e86cfb-15bc-4681-aea2-2a321ccad370%2Fgame_polish_animate.jpg?1551523720117",
"https://cdn.glitch.com/04730f0f-2c01-4c9a-9d1b-7728a6b9c2ef%2Fgame_polish_makeplayerimmune.jpg?v=1592769463886",
   ];

// const polish_description = [
// "Add new sound effects you have created to your game",
// "Animate your player so it looks like it's running",
// "Add a music soundtrack to play while game is running",
// "Show when your player gets zapped with a dying animation",
// "Screen shakes when player gets zapped for shock value",
// "Create Explosions when something gets zapped",
//    ];



const polish_book = [
"https://mickfuzz.github.io/makecode-platformer-101/simpleGraphicalEffects",
"https://mickfuzz.github.io/makecode-platformer-101/soundEffects",
"https://mickfuzz.github.io/makecode-platformer-101/soundTrack",
"https://mickfuzz.github.io/makecode-platformer-101/addMessages",
"https://mickfuzz.github.io/makecode-platformer-101/animatePlayer",
"https://mickfuzz.github.io/makecode-platformer-101/makePlayerImmune",
   ];


polishItems.forEach((item,i) => item.style.backgroundImage = `url(${polish_src[i]})`);
//polishItems.forEach((item,i) => item.setAttribute("title1" , `${polish_description[i]}`));


//galleryItems.forEach((item,i) => item.setAttributeNode(att);  = onclick="window.location='link[i]})`);

polishItems.forEach(function(item,i) {
    item.addEventListener("click", function(event) {
       window.open(`${polish_book[i]}`)
    });
});


const spaceItems = document.querySelectorAll('.zoom-inner_3');

//console.log(polishItems)

const space_src = [
"https://cdn.glitch.com/04730f0f-2c01-4c9a-9d1b-7728a6b9c2ef%2FgameSpace_leveldesign.jpg?v=1592769886123",
"https://cdn.glitch.com/d8e86cfb-15bc-4681-aea2-2a321ccad370%2FgameSpace_moreLevels.jpg?1553025336947",
"https://cdn.glitch.com/d8e86cfb-15bc-4681-aea2-2a321ccad370%2FgameSpace_gameSize.jpg?1553025336727",
  "https://cdn.glitch.com/d8e86cfb-15bc-4681-aea2-2a321ccad370%2FgameSpace_background_image.jpg?1553025336829",
"https://cdn.glitch.com/d8e86cfb-15bc-4681-aea2-2a321ccad370%2FgameSpace_keysDoors.jpg?1553025337108",
   ];

// const space_description = [
// "Add your own background image to set the scene",
// "Add more levels to your game to increase the challenge",
// "Increase the size of your game so that it scrolls when player moves",
// "Resize your player and other sprites in your game",
// "Create a Game Over screen when your player gets zapped",
// "Make players to collect keys to open doors to progress",
// "Created an animated opening scene to give starting info",
//    ];


const space_book = [
"https://mickfuzz.github.io/makecode-platformer-101/changeLevelDesign",
"https://mickfuzz.github.io/makecode-platformer-101/addLevels",
"https://mickfuzz.github.io/makecode-platformer-101/changeLevelShape",
"https://mickfuzz.github.io/makecode-platformer-101/changeBackgroundImage",
"https://mickfuzz.github.io/makecode-platformer-101/keyAndDoor",

   ];


spaceItems.forEach((item,i) => item.style.backgroundImage = `url(${space_src[i]})`);
//spaceItems.forEach((item,i) => item.setAttribute("title1" , `${space_description[i]}`));

//galleryItems.forEach((item,i) => item.setAttributeNode(att);  = onclick="window.location='link[i]})`);

spaceItems.forEach(function(item,i) {
    item.addEventListener("click", function(event) {
       window.open(`${space_book[i]}`)
    });
});


const challengeItems = document.querySelectorAll('.zoom-inner_4');

//console.log(polishItems)

const challenge_src = [
"https://cdn.glitch.com/04730f0f-2c01-4c9a-9d1b-7728a6b9c2ef%2FgameChallenge_gainpoints.jpg?v=1592766950711",
"https://cdn.glitch.com/04730f0f-2c01-4c9a-9d1b-7728a6b9c2ef%2FgameChallenge_countdown.jpg?v=1592766953452",
"https://cdn.glitch.com/04730f0f-2c01-4c9a-9d1b-7728a6b9c2ef%2FgameChallenge_collectallfood.jpg?v=1592766946782",
"https://cdn.glitch.com/04730f0f-2c01-4c9a-9d1b-7728a6b9c2ef%2FgameChallenge_poweruphigherjump.jpg?v=1592766944082",
"https://cdn.glitch.com/04730f0f-2c01-4c9a-9d1b-7728a6b9c2ef%2FgameChallenge_powerupspeed.jpg?v=1592766941055",
"https://cdn.glitch.com/04730f0f-2c01-4c9a-9d1b-7728a6b9c2ef%2FgameChallenge_doublingenemies.jpg?v=1592766936864",
   ];

// const challenge_description = [
// "Add your own background image to set the scene",
// "Add more levels to your game to increase the challenge",
// "Increase the size of your game so that it scrolls when player moves",
// "Resize your player and other sprites in your game",
// "Create a Game Over screen when your player gets zapped",
// "Make players to collect keys to open doors to progress",
// "Created an animated opening scene to give starting info",
//    ];


const challenge_book = [
"https://mickfuzz.github.io/makecode-platformer-101/collectPoints",
"https://mickfuzz.github.io/makecode-platformer-101/addTimer",
"https://mickfuzz.github.io/makecode-platformer-101/collectAllFood",
"https://mickfuzz.github.io/makecode-platformer-101/powerUpJump",
"https://mickfuzz.github.io/makecode-platformer-101/powerUpSpeed",
"https://mickfuzz.github.io/makecode-platformer-101/randomDoublingEnemies",
   ];


challengeItems.forEach((item,i) => item.style.backgroundImage = `url(${challenge_src[i]})`);
//challengeItems.forEach((item,i) => item.setAttribute("title1" , `${challenge_description[i]}`));

//galleryItems.forEach((item,i) => item.setAttributeNode(att);  = onclick="window.location='link[i]})`);

challengeItems.forEach(function(item,i) {
    item.addEventListener("click", function(event) {
       window.open(`${challenge_book[i]}`)
    });
});
